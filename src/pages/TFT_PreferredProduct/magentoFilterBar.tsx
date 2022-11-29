export const MagentoFilterBar = () => {
    return (<div className="sidebar sidebar-main">
        <div className="block filter" id="layered-filter-block" data-collapsible="true">
            <div className="block-title filter-title" data-count="1" role="tablist">
                <strong data-role="title" role="tab" aria-selected="false" aria-expanded="false">Shop By</strong>
            </div>
            <div className="block-content filter-content">





                <div className="filter-current">
                    <div className="block-subtitle filter-current-subtitle">

                        state.phtml
                        Now Shopping by
                    </div>
                    <ol className="items">
                        <li className="item">
                            <span className="filter-label">Category</span>
                            <span className="filter-value">Watches</span>
                            <a className="action remove" href="http://tommylee.hannstar.com/tftdisplay/PreferredProduct/ProductList/?cat=3" title="Remove Category Watches">
                                <span>Remove This Item</span>
                            </a>
                        </li>
                    </ol>
                </div>

                <div className="block-actions filter-actions">
                    <a href="http://tommylee.hannstar.com/tftdisplay/PreferredProduct/ProductList/" className="action clear filter-clear">
                        <span>Clear All</span>
                    </a>
                </div>
                <div className="block-subtitle filter-subtitle">Shopping Options</div>
                <div className="filter-options mage-accordion-disabled" id="narrow-by-list" data-role="content" role="tablist">
                    <div data-role="collapsible" className="filter-options-item" role="presentation" data-collapsible="true">
                        <div data-role="title" className="filter-options-title" role="tab" aria-selected="false" aria-expanded="false" >Price</div>
                        <div data-role="content" className="filter-options-content" role="tabpanel" aria-hidden="true" style={{ display: "none" }}>
                            <ol className="items">
                                <li className="item">

                                    <a href="http://tommylee.hannstar.com/tftdisplay/PreferredProduct/ProductList/?cat=6&amp;price=0-10" rel="nofollow">
                                        <span className="price">$0.00</span> - <span className="price">$9.99</span>                </a>
                                </li>
                                <li className="item">



                                    <a href="http://tommylee.hannstar.com/tftdisplay/PreferredProduct/ProductList/?cat=6&amp;price=10-20" rel="nofollow">
                                        <span className="price">$10.00</span> - <span className="price">$19.99</span>                </a>
                                </li>
                                <li className="item">



                                    <a href="http://tommylee.hannstar.com/tftdisplay/PreferredProduct/ProductList/?cat=6&amp;price=20-30" rel="nofollow">
                                        <span className="price">$20.00</span> - <span className="price">$29.99</span>                </a>
                                </li>
                                <li className="item">


                                    <a href="http://tommylee.hannstar.com/tftdisplay/PreferredProduct/ProductList/?cat=6&amp;price=30-40" rel="nofollow">
                                        <span className="price">$30.00</span> - <span className="price">$39.99</span>                </a>
                                </li>
                                <li className="item">


                                    <a href="http://tommylee.hannstar.com/tftdisplay/PreferredProduct/ProductList/?cat=6&amp;price=40-50" rel="nofollow">
                                        <span className="price">$40.00</span> - <span className="price">$49.99</span>                </a>
                                </li>
                                <li className="item">


                                    <a href="http://tommylee.hannstar.com/tftdisplay/PreferredProduct/ProductList/?cat=6&amp;price=50-60" rel="nofollow">
                                        <span className="price">$50.00</span> - <span className="price">$59.99</span>                </a>
                                </li>
                                <li className="item">


                                    <a href="http://tommylee.hannstar.com/tftdisplay/PreferredProduct/ProductList/?cat=6&amp;price=60-70" rel="nofollow">
                                        <span className="price">$60.00</span> - <span className="price">$69.99</span>                </a>
                                </li>
                                <li className="item">



                                    <a href="http://tommylee.hannstar.com/tftdisplay/PreferredProduct/ProductList/?cat=6&amp;price=70-80" rel="nofollow">
                                        <span className="price">$70.00</span> - <span className="price">$79.99</span>                </a>
                                </li>
                                <li className="item">



                                    <a href="http://tommylee.hannstar.com/tftdisplay/PreferredProduct/ProductList/?cat=6&amp;price=80-90" rel="nofollow">
                                        <span className="price">$80.00</span> - <span className="price">$89.99</span>                </a>
                                </li>
                                <li className="item">



                                    <a href="http://tommylee.hannstar.com/tftdisplay/PreferredProduct/ProductList/?cat=6&amp;price=90-100" rel="nofollow">
                                        <span className="price">$90.00</span> - <span className="price">$99.99</span>                </a>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div data-role="collapsible" className="filter-options-item" role="presentation" data-collapsible="true">
                        <div data-role="title" className="filter-options-title" role="tab" aria-selected="false" aria-expanded="false" >Activity</div>
                        <div data-role="content" className="filter-options-content" role="tabpanel" aria-hidden="true" style={{ display: "none" }}>
                            <ol className="items">
                                <li className="item">



                                    <a href="http://tommylee.hannstar.com/tftdisplay/PreferredProduct/ProductList/?activity=5&amp;cat=6" rel="nofollow">
                                        Outdoor                </a>
                                </li>
                                <li className="item">



                                    <a href="http://tommylee.hannstar.com/tftdisplay/PreferredProduct/ProductList/?activity=9&amp;cat=6" rel="nofollow">
                                        Recreation                </a>
                                </li>
                                <li className="item">



                                    <a href="http://tommylee.hannstar.com/tftdisplay/PreferredProduct/ProductList/?activity=11&amp;cat=6" rel="nofollow">
                                        Gym                </a>
                                </li>
                                <li className="item">



                                    <a href="http://tommylee.hannstar.com/tftdisplay/PreferredProduct/ProductList/?activity=16&amp;cat=6" rel="nofollow">
                                        Athletic                </a>
                                </li>
                                <li className="item">



                                    <a href="http://tommylee.hannstar.com/tftdisplay/PreferredProduct/ProductList/?activity=17&amp;cat=6" rel="nofollow">
                                        Sports                </a>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div data-role="collapsible" className="filter-options-item" role="presentation" data-collapsible="true">
                        <div data-role="title" className="filter-options-title" role="tab" aria-selected="false" aria-expanded="false">Material</div>
                        <div data-role="content" className="filter-options-content" role="tabpanel" aria-hidden="true" style={{ display: "none" }}>
                            <ol className="items">
                                <li className="item">


                                    <a href="http://tommylee.hannstar.com/tftdisplay/PreferredProduct/ProductList/?cat=6&amp;material=35" rel="nofollow">
                                        Leather                </a>
                                </li>
                                <li className="item">



                                    <a href="http://tommylee.hannstar.com/tftdisplay/PreferredProduct/ProductList/?cat=6&amp;material=43" rel="nofollow">
                                        Metal                </a>
                                </li>
                                <li className="item">



                                    <a href="http://tommylee.hannstar.com/tftdisplay/PreferredProduct/ProductList/?cat=6&amp;material=44" rel="nofollow">
                                        Plastic                </a>
                                </li>
                                <li className="item">



                                    <a href="http://tommylee.hannstar.com/tftdisplay/PreferredProduct/ProductList/?cat=6&amp;material=45" rel="nofollow">
                                        Rubber                </a>
                                </li>
                                <li className="item">



                                    <a href="http://tommylee.hannstar.com/tftdisplay/PreferredProduct/ProductList/?cat=6&amp;material=47" rel="nofollow">
                                        Stainless Steel                </a>
                                </li>
                                <li className="item">



                                    <a href="http://tommylee.hannstar.com/tftdisplay/PreferredProduct/ProductList/?cat=6&amp;material=48" rel="nofollow">
                                        Silicone                </a>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div data-role="collapsible" className="filter-options-item" role="presentation" data-collapsible="true">
                        <div data-role="title" className="filter-options-title" role="tab" aria-selected="false" aria-expanded="false">Gender</div>
                        <div data-role="content" className="filter-options-content" role="tabpanel" aria-hidden="true" style={{ display: "none" }}>
                            <ol className="items">
                                <li className="item">



                                    <a href="http://tommylee.hannstar.com/tftdisplay/PreferredProduct/ProductList/?cat=6&amp;gender=80" rel="nofollow">
                                        Men                </a>
                                </li>
                                <li className="item">



                                    <a href="http://tommylee.hannstar.com/tftdisplay/PreferredProduct/ProductList/?cat=6&amp;gender=81" rel="nofollow">
                                        Women                </a>
                                </li>
                                <li className="item">



                                    <a href="http://tommylee.hannstar.com/tftdisplay/PreferredProduct/ProductList/?cat=6&amp;gender=84" rel="nofollow">
                                        Unisex                </a>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}