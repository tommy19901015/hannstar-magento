<?php
/**
 *
 */
namespace Tftdisplay\TftdisplayModule\Model;

class Layer extends \Magento\Catalog\Model\Layer
{
    public function getProductCollection()
    {
        $collection = parent::getProductCollection();
        //$collection->addAttributeToFilter('deal_status', ['eq' => '1']);
        //$idArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        //if (!empty($idArray)) {
        //    $collection->addAttributeToFilter('entity_id', ["in"=>$idArray]);
        //}

        return $collection;
    }
}