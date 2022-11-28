<?php
namespace Tftdisplay\TftdisplayModule\Controller\PreferredProduct;

use Magento\Framework\App\Action\Action;
use Magento\Framework\App\Action\Context;
use Magento\Framework\View\Result\PageFactory;

class ProductList extends Action
{
    private $_pageFactory;

    public function __construct(Context $context,PageFactory $PageFactory)
    {
      $this->_pageFactory = $PageFactory;
      parent::__construct($context);
    }

    public function execute()
    { //http://alex04.hannstar.com/tftdisplay/PreferredProduct/ProductList

      return $this->_pageFactory->create();
    }
}