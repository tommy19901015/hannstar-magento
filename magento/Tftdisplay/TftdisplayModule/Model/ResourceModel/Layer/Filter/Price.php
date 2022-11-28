<?php

namespace Tftdisplay\TftdisplayModule\Model\ResourceModel\Layer\Filter;

class Price extends \Magento\Catalog\Model\ResourceModel\Layer\Filter\Price
{

    public function __construct(
        \Magento\Framework\Model\ResourceModel\Db\Context $context,
        \Magento\Framework\Event\ManagerInterface $eventManager,
        \Magento\Catalog\Model\Layer\Resolver $layerResolver,
        \Magento\Customer\Model\Session $session,
        \Magento\Store\Model\StoreManagerInterface $storeManager,
        \Tftdisplay\TftdisplayModule\Model\Layer $layer,
        $connectionName = null
        ) {
            $this->layer        = $layerResolver->get();
            $this->session      = $session;
            $this->storeManager = $storeManager;
            parent::__construct(
                $context,
                $eventManager,
                $layerResolver,
                $session,
                $storeManager,
                $connectionName
            );
    }
    
    public function getCount($range)
    {
        $select = $this->getSelect();
        $priceExpression = $this->_getFullPriceExpression($select);

        /**
         * Check and set correct variable values to prevent SQL-injections
         */
        $range = floatval($range);
        if ($range == 0) {
            $range = 1;
        }
        $countExpr = new \Zend_Db_Expr('COUNT(*)');
        $rangeExpr = new \Zend_Db_Expr("FLOOR(({$priceExpression}) / {$range}) + 1");

        $select->columns(['range' => $rangeExpr, 'count' => $countExpr]);
        $select->group($rangeExpr)->order(new \Zend_Db_Expr("({$rangeExpr}) ASC"));
        
        return $this->getConnection()->fetchPairs($select);
    }
    
    public function getSelect()
    {
        $collection = $this->layer->getProductCollection();
        
        //$collection->addAttributeToFilter('STATESTATE', array('nin' => ['RELEASED','EOL'] )); //���]�t PLM ���~�ͩR�g�������ӫ~
        //$collection->addAttributeToFilter('LCD_TECHNOLOGY', ["in"=> ['TN','TPS'] ]); //�u��TFT
        
        $collection->addAttributeToSelect(['SHIPMENT_TYPE','DISPLAY_AREA_DIAGONAL_SIZE','RESOLUTION','BRIGHTNESS','LCM_INTERFACE','LCM_INTERFACE','LCD_TECHNOLOGY','COLORGAMUT']);
        $collection->addPriceData(
            $this->session->getCustomerGroupId(),
            $this->storeManager->getStore()->getWebsiteId()
        );
        
        $select = clone $collection->getSelect();
        // reset columns, order and limitation conditions
        $select->reset(\Magento\Framework\DB\Select::COLUMNS);
        $select->reset(\Magento\Framework\DB\Select::ORDER);
        $select->reset(\Magento\Framework\DB\Select::LIMIT_COUNT);
        $select->reset(\Magento\Framework\DB\Select::LIMIT_OFFSET);
        
        // remove join with main table
        $fromPart = $select->getPart(\Magento\Framework\DB\Select::FROM);
        if (!isset(
            $fromPart[\Magento\Catalog\Model\ResourceModel\Product\Collection::INDEX_TABLE_ALIAS]
        ) || !isset(
            $fromPart[\Magento\Catalog\Model\ResourceModel\Product\Collection::MAIN_TABLE_ALIAS]
            )
        ) {
            return $select;
        }
        
        // processing FROM part
        $priceIndexJoinPart = $fromPart[\Magento\Catalog\Model\ResourceModel\Product\Collection::INDEX_TABLE_ALIAS];
        $priceIndexJoinConditions = explode('AND', $priceIndexJoinPart['joinCondition']);
        $priceIndexJoinPart['joinType'] = \Magento\Framework\DB\Select::FROM;
        $priceIndexJoinPart['joinCondition'] = null;
        $fromPart[\Magento\Catalog\Model\ResourceModel\Product\Collection::MAIN_TABLE_ALIAS] = $priceIndexJoinPart;
        unset($fromPart[\Magento\Catalog\Model\ResourceModel\Product\Collection::INDEX_TABLE_ALIAS]);
        $select->setPart(\Magento\Framework\DB\Select::FROM, $fromPart);
        foreach ($fromPart as $key => $fromJoinItem) {
            $fromPart[$key]['joinCondition'] = $this->_replaceTableAlias($fromJoinItem['joinCondition']);
        }
        $select->setPart(\Magento\Framework\DB\Select::FROM, $fromPart);
        
        // processing WHERE part
        $wherePart = $select->getPart(\Magento\Framework\DB\Select::WHERE);
        foreach ($wherePart as $key => $wherePartItem) {
            $wherePart[$key] = $this->_replaceTableAlias($wherePartItem);
        }
        $select->setPart(\Magento\Framework\DB\Select::WHERE, $wherePart);
        $excludeJoinPart = \Magento\Catalog\Model\ResourceModel\Product\Collection::MAIN_TABLE_ALIAS . '.entity_id';
        foreach ($priceIndexJoinConditions as $condition) {
            if (strpos($condition, $excludeJoinPart) !== false) {
                continue;
            }
            $select->where($this->_replaceTableAlias($condition));
        }
        $select->where($this->_getPriceExpression($select) . ' IS NOT NULL');
        
        return $select;
    }
}