<?php

namespace Tftdisplay\TftdisplayModule\Model\ResourceModel;

class Category extends \Magento\Catalog\Model\ResourceModel\Category
{
    public function getProductCount($category)
    {
        $collection = $category->getProductCollection();
        //$collection->addAttributeToFilter('STATESTATE', array('nin' => ['RELEASED','EOL'] )); //不包含 PLM 產品生命週期結束商品
        //$collection->addAttributeToFilter('LCD_TECHNOLOGY', ["in"=> ['TN','TPS'] ]); //只取TFT
        $collection->addAttributeToSelect(['SHIPMENT_TYPE','DISPLAY_AREA_DIAGONAL_SIZE','RESOLUTION','BRIGHTNESS','LCM_INTERFACE','LCM_INTERFACE','LCD_TECHNOLOGY','COLORGAMUT']);

        return intval($collection->count());
    }
}