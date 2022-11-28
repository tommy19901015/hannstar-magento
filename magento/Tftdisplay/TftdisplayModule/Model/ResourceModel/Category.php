<?php

namespace Tftdisplay\TftdisplayModule\Model\ResourceModel;

class Category extends \Magento\Catalog\Model\ResourceModel\Category
{
    public function getProductCount($category)
    {
        $collection = $category->getProductCollection();
        //$collection->addAttributeToFilter('STATESTATE', array('nin' => ['RELEASED','EOL'] )); //���]�t PLM ���~�ͩR�g�������ӫ~
        //$collection->addAttributeToFilter('LCD_TECHNOLOGY', ["in"=> ['TN','TPS'] ]); //�u��TFT
        $collection->addAttributeToSelect(['SHIPMENT_TYPE','DISPLAY_AREA_DIAGONAL_SIZE','RESOLUTION','BRIGHTNESS','LCM_INTERFACE','LCM_INTERFACE','LCD_TECHNOLOGY','COLORGAMUT']);

        return intval($collection->count());
    }
}