export const MagentoInfo = () => {
    return (
        <div className="product-info-main"><div className="page-title-wrapper product">
            <h1 className="page-title">
                <span className="base" data-ui-id="page-title-wrapper" >Joust Duffle Bag</span>    </h1>
        </div>
            <div className="product-reviews-summary empty">
                <div className="reviews-actions">
                    <a className="action add" href="http://tommylee.hannstar.com/joust-duffle-bag.html#review-form">
                        Be the first to review this product            </a>
                </div>
            </div>
            <div className="product-info-price"><div className="price-box price-final_price" data-role="priceBox" data-product-id="1" data-price-box="product-id-1">


                <span className="price-container price-final_price tax weee"  >
                    <span id="product-price-1" data-price-amount="34" data-price-type="finalPrice" className="price-wrapper "><span className="price">$34.00</span></span>
                    <meta content="34" />
                    <meta content="TWD" />
                </span>

            </div><div className="product-info-stock-sku">
                    <div className="stock available" title="Availability">
                        <span>In stock</span>
                    </div>

                    <div className="product attribute sku">
                        <strong className="type">SKU</strong>
                        <div className="value" >24-MB01</div>
                    </div>
                </div></div>

            <div className="product-add-form">
                <form action="http://tommylee.hannstar.com/checkout/cart/add/uenc/aHR0cDovL3RvbW15bGVlLmhhbm5zdGFyLmNvbS9qb3VzdC1kdWZmbGUtYmFnLmh0bWw%2C/product/1/" method="post" id="product_addtocart_form">
                    <input type="hidden" name="product" value="1" />
                    <input type="hidden" name="selected_configurable_option" value="" />
                    <input type="hidden" name="related_product" id="related-products-field" value="" />
                    <input type="hidden" name="item" value="1" />
                    <input name="form_key" type="hidden" value="FrwyJ2RLmvhjcFdh" />                            <div className="box-tocart">
                        <div className="fieldset">
                            <div className="field qty">
                                <label className="label" htmlFor="qty"><span>Qty</span></label>
                                <div className="control">
                                    <input type="number" name="qty" id="qty" min="0" value="1" title="Qty" className="input-text qty" data-validate="{&quot;required-number&quot;:true,&quot;validate-item-quantity&quot;:{&quot;minAllowed&quot;:1,&quot;maxAllowed&quot;:10000}}" />
                                </div>
                            </div>
                            <div className="actions">
                                <button type="submit" title="Add to Cart" className="action primary tocart" id="product-addtocart-button">
                                    <span>Add to Cart</span>
                                </button>
                            </div>
                        </div>
                    </div>


                </form>
            </div>


            <div className="product-social-links"><div className="product-addto-links" data-role="add-to-links">

                <a href="#" data-post="{&quot;action&quot;:&quot;http:\/\/tommylee.hannstar.com\/catalog\/product_compare\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;1&quot;,&quot;uenc&quot;:&quot;aHR0cDovL3RvbW15bGVlLmhhbm5zdGFyLmNvbS9qb3VzdC1kdWZmbGUtYmFnLmh0bWw,&quot;}}" data-role="add-to-links" className="action tocompare"><span>Add to Compare</span></a>

            </div>
            </div>
        </div>
    )
}