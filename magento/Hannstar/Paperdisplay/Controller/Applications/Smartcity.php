<?php

declare(strict_types=1);

namespace Hannstar\Paperdisplay\Controller\Applications;

use Magento\Framework\App\Action\Action;
use Magento\Framework\Controller\ResultFactory;
use Magento\Framework\View\Result\Page;

class Smartcity extends Action
{
    public function execute()
    {
        /** @var Page $resultPage */
        return $this->resultFactory->create(ResultFactory::TYPE_PAGE);
    }
}