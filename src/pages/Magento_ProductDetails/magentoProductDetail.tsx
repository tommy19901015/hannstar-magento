export const MagentoProductDetail = () => {
  return (<div className="product info detailed">
    <div className="product data items mage-tabs-disabled" role="tablist">
      <div className="data item title active" data-role="collapsible" id="tab-label-description" role="tab" data-collapsible="true" aria-controls="description" aria-selected="false" aria-expanded="true" >
        <a className="data switch" data-toggle="trigger" href="#description" id="tab-label-description-title">
          Details                    </a>
      </div>
      <div className="data item content" aria-labelledby="tab-label-description" id="description" data-role="content" role="tabpanel" aria-hidden="false">

        <div className="product attribute description">
          <div className="value"><p>The sporty Joust Duffle Bag can't be beat - not in the gym, not on the luggage carousel, not anywhere. Big enough to haul a basketball or soccer ball and some sneakers with plenty of room to spare, it's ideal for athletes with places to go.</p><p>
          </p><ul>
              <li>Dual top handles.</li>
              <li>Adjustable shoulder strap.</li>
              <li>Full-length zipper.</li>
              <li>L 29" x W 13" x H 11".</li>
            </ul></div>
        </div>
      </div>
    </div>
  </div>)
};

