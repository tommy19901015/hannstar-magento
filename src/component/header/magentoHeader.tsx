export const MagentoNotLoginHeader = () => {
  return (
    <header className="page-header">
      <div className="panel wrapper">
        <div className="panel header">
          <a className="action skip contentarea" href="#contentarea">
            <span>Skip to Content </span>
          </a>
          <ul className="header links">
            {" "}
            <li className="greet welcome" data-bind="scope: 'customer'">
              <span
                className="not-logged-in"
                data-bind="html: 'Default welcome msg!'"
              >
                Default welcome msg!
              </span>
            </li>
            <li className="link authorization-link" data-label="or">
              <a href="http://tommylee.magento.com/customer/account/login/referer/aHR0cDovL3RvbW15bGVlLm1hZ2VudG8uY29tLw%2C%2C/">
                Sign In
              </a>
            </li>
            <li>
              <a
                href="http://tommylee.magento.com/customer/account/create/"
                id="idaUCMmtHl"
              >
                Create an Account
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="header content">
        <span data-action="toggle-nav" className="action nav-toggle">
          <span>Toggle Nav</span>
        </span>
        <a
          className="logo"
          href="http://tommylee.magento.com/"
          title=""
          aria-label="store logo"
        >
          <img
            src="http://tommylee.magento.com/static/version1667913445/frontend/Magento/luma/en_US/images/logo.svg"
            title=""
            alt=""
            width="170"
          />
        </a>

        <div data-block="minicart" className="minicart-wrapper">
          <a
            className="action showcart"
            href="http://tommylee.magento.com/checkout/cart/"
            data-bind="scope: 'minicart_content'"
          >
            <span className="text">My Cart</span>
            <span
              className="counter qty empty"
              data-bind="css: { empty: !!getCartParam('summary_count') == false &amp;&amp; !isLoading() },
               blockLoader: isLoading"
            >
              <span className="counter-number"></span>
              <span className="counter-label"></span>
            </span>
          </a>

          <div
            role="dialog"
            className="ui-dialog ui-corner-all ui-widget ui-widget-content ui-front mage-dropdown-dialog"
            aria-describedby="ui-id-1"
            style={{ display: "none" }}
          >
            <div
              className="block block-minicart ui-dialog-content ui-widget-content"
              data-role="dropdownDialog"
              id="ui-id-1"
            >
              <div
                id="minicart-content-wrapper"
                data-bind="scope: 'minicart_content'"
              >
                <div className="block-title">
                  <strong>
                    <span className="text" data-bind="i18n: 'My Cart'">
                      My Cart
                    </span>
                    <span
                      className="qty empty"
                      data-bind="css: { empty: !!getCartParam('summary_count') == false },
                       attr: { title: $t('Items in Cart') }, text: getCartParam('summary_count')"
                      title="Items in Cart"
                    ></span>
                  </strong>
                </div>

                <div className="block-content">
                  <button
                    type="button"
                    id="btn-minicart-close"
                    className="action close"
                    data-action="close"
                    data-bind="
                attr: {
                    title: $t('Close')
                },
                click: closeMinicart()
            "
                    title="Close"
                  >
                    <span data-bind="i18n: 'Close'">Close</span>
                  </button>

                  <strong
                    className="subtitle empty"
                    data-bind="i18n: 'You have no items in your shopping cart.'"
                  >
                    You have no items in your shopping cart.
                  </strong>

                  <div id="minicart-widgets" className="minicart-widgets"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block block-search">
          <div className="block block-title">
            <strong>Search</strong>
          </div>
          <div className="block block-content">
            <form
              className="form minisearch"
              id="search_mini_form"
              action="http://tommylee.magento.com/catalogsearch/result/"
              method="get"
            >
              <div className="field search">
                <label
                  className="label"
                  htmlFor="search"
                  data-role="minisearch-label"
                >
                  <span>Search</span>
                </label>
                <div className="control">
                  <input
                    id="search"
                    type="text"
                    name="q"
                    value=""
                    placeholder="Search entire store here..."
                    className="input-text"
                    role="combobox"
                    aria-haspopup="false"
                    aria-autocomplete="both"
                    aria-expanded="false"
                  />
                  <div
                    id="search_autocomplete"
                    className="search-autocomplete"
                  ></div>
                  <div className="nested">
                    <a
                      className="action advanced"
                      href="http://tommylee.magento.com/catalogsearch/advanced/"
                      data-action="advanced-search"
                    >
                      Advanced Search{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="actions">
                <button
                  type="submit"
                  title="Search"
                  className="action search"
                  aria-label="Search"
                >
                  <span>Search</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <ul className="compare wrapper">
          <li
            className="item link compare"
            data-bind="scope: 'compareProducts'"
            data-role="compare-products-link"
          >
            <a
              className="action compare no-display"
              title="Compare Products"
              data-bind="attr: {'href': compareProducts().listUrl}, css: {'no-display': !compareProducts().count}"
            >
              Compare Products{" "}
              <span
                className="counter qty"
                data-bind="text: compareProducts().countCaption"
              ></span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export const MagentoLoginHeader = () => {
  return (
    <header className="page-header">
      <div className="panel wrapper">
        <div className="panel header">
          <a className="action skip contentarea" href="#contentarea">
            <span>Skip to Content </span>
          </a>
          <ul className="header links">
            {" "}
            <li className="greet welcome" data-bind="scope: 'customer'">
              <span
                className="logged-in"
                data-bind="text: new String('Welcome, %1!').replace('%1', customer().fullname)"
              >
                Welcome,
                測試姓名測試姓名測試姓名測試姓名測試姓名測試姓名測試姓名測試姓名測試姓名測試姓名測試姓名
              </span>
            </li>
            <li className="customer-welcome">
              <span
                className="customer-name"
                role="button"
                data-toggle="dropdown"
                data-trigger-keypress-button="true"
                data-bind="scope: 'customer'"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <button
                  type="button"
                  className="action switch"
                  data-action="customer-menu-toggle"
                >
                  <span>Change</span>
                </button>
              </span>

              <div
                className="customer-menu"
                data-target="dropdown"
                aria-hidden="true"
              >
                <ul className="header links">
                  <li>
                    <a
                      href="http://tommylee.magento.com/customer/account/"
                      id="idTWBJYOsL"
                    >
                      My Account
                    </a>
                  </li>
                  <li className="link wishlist" data-bind="scope: 'wishlist'">
                    <a href="http://tommylee.magento.com/wishlist/">
                      My Wish List
                    </a>
                  </li>

                  <li className="link authorization-link" data-label="or">
                    <a
                      href="http://tommylee.magento.com/customer/account/logout/"
                      data-post='{"action":"http:\/\/tommylee.magento.com\/customer\/account\/logout\/","data":{"uenc":"aHR0cDovL3RvbW15bGVlLm1hZ2VudG8uY29tL2N1c3RvbWVyL2FjY291bnQv"}}'
                    >
                      Sign Out
                    </a>
                  </li>
                </ul>{" "}
              </div>
            </li>
            <li className="link authorization-link" data-label="or">
              <a
                href="http://tommylee.magento.com/customer/account/logout/"
                data-post='{"action":"http:\/\/tommylee.magento.com\/customer\/account\/logout\/","data":{"uenc":"aHR0cDovL3RvbW15bGVlLm1hZ2VudG8uY29tL2N1c3RvbWVyL2FjY291bnQv"}}'
              >
                Sign Out
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="header content">
        <span data-action="toggle-nav" className="action nav-toggle">
          <span>Toggle Nav</span>
        </span>
        <a
          className="logo"
          href="http://tommylee.magento.com/"
          title=""
          aria-label="store logo"
        >
          <img
            src="http://tommylee.magento.com/static/version1667918829/frontend/Magento/luma/en_US/images/logo.svg"
            title=""
            alt=""
            width="170"
          />
        </a>

        <div data-block="minicart" className="minicart-wrapper">
          <a
            className="action showcart"
            href="http://tommylee.magento.com/checkout/cart/"
            data-bind="scope: 'minicart_content'"
          >
            <span className="text">My Cart</span>
            <span
              className="counter qty empty"
              data-bind="css: { empty: !!getCartParam('summary_count') == false &amp;&amp; !isLoading() },
               blockLoader: isLoading"
            >
              <span className="counter-number"></span>
              <span className="counter-label"></span>
            </span>
          </a>

          <div
            role="dialog"
            className="ui-dialog ui-corner-all ui-widget ui-widget-content ui-front mage-dropdown-dialog"
            aria-describedby="ui-id-1"
            style={{ display: "none" }}
          >
            <div
              className="block block-minicart ui-dialog-content ui-widget-content"
              data-role="dropdownDialog"
              id="ui-id-1"
            >
              <div
                id="minicart-content-wrapper"
                data-bind="scope: 'minicart_content'"
              >
                <div className="block-title">
                  <strong>
                    <span className="text" data-bind="i18n: 'My Cart'">
                      My Cart
                    </span>
                    <span
                      className="qty empty"
                      data-bind="css: { empty: !!getCartParam('summary_count') == false },
                       attr: { title: $t('Items in Cart') }, text: getCartParam('summary_count')"
                      title="Items in Cart"
                    >
                      0
                    </span>
                  </strong>
                </div>

                <div className="block-content">
                  <button
                    type="button"
                    id="btn-minicart-close"
                    className="action close"
                    data-action="close"
                    data-bind="
                attr: {
                    title: $t('Close')
                },
                click: closeMinicart()
            "
                    title="Close"
                  >
                    <span data-bind="i18n: 'Close'">Close</span>
                  </button>

                  <strong
                    className="subtitle empty"
                    data-bind="i18n: 'You have no items in your shopping cart.'"
                  >
                    You have no items in your shopping cart.
                  </strong>

                  <div id="minicart-widgets" className="minicart-widgets"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block block-search">
          <div className="block block-title">
            <strong>Search</strong>
          </div>
          <div className="block block-content">
            <form
              className="form minisearch"
              id="search_mini_form"
              action="http://tommylee.magento.com/catalogsearch/result/"
              method="get"
            >
              <div className="field search">
                <label
                  className="label"
                  htmlFor="search"
                  data-role="minisearch-label"
                >
                  <span>Search</span>
                </label>
                <div className="control">
                  <input
                    id="search"
                    type="text"
                    name="q"
                    value=""
                    placeholder="Search entire store here..."
                    className="input-text"
                    role="combobox"
                    aria-haspopup="false"
                    aria-autocomplete="both"
                    aria-expanded="false"
                  />
                  <div
                    id="search_autocomplete"
                    className="search-autocomplete"
                  ></div>
                  <div className="nested">
                    <a
                      className="action advanced"
                      href="http://tommylee.magento.com/catalogsearch/advanced/"
                      data-action="advanced-search"
                    >
                      Advanced Search{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="actions">
                <button
                  type="submit"
                  title="Search"
                  className="action search"
                  aria-label="Search"
                >
                  <span>Search</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <ul className="compare wrapper">
          <li
            className="item link compare"
            data-bind="scope: 'compareProducts'"
            data-role="compare-products-link"
          >
            <a
              className="action compare no-display"
              title="Compare Products"
              data-bind="attr: {'href': compareProducts().listUrl}, css: {'no-display': !compareProducts().count}"
              href="http://tommylee.magento.com/catalog/product_compare/index/uenc/aHR0cDovL3RvbW15bGVlLm1hZ2VudG8uY29tL2N1c3RvbWVyL3NlY3Rpb24vbG9hZC8_c2VjdGlvbnM9bWVzc2FnZXMlMkNjdXN0b21lciUyQ2NvbXBhcmUtcHJvZHVjdHMlMkNsYXN0LW9yZGVyZWQtaXRlbXMlMkNjYXJ0JTJDZGlyZWN0b3J5LWRhdGElMkNjYXB0Y2hhJTJDaW5zdGFudC1wdXJjaGFzZSUyQ2xvZ2dlZEFzQ3VzdG9tZXIlMkNwZXJzaXN0ZW50JTJDcmV2aWV3JTJDd2lzaGxpc3QlMkNyZWNlbnRseV92aWV3ZWRfcHJvZHVjdCUyQ3JlY2VudGx5X2NvbXBhcmVkX3Byb2R1Y3QlMkNwcm9kdWN0X2RhdGFfc3RvcmFnZSUyQ3BheXBhbC1iaWxsaW5nLWFncmVlbWVudCZmb3JjZV9uZXdfc2VjdGlvbl90aW1lc3RhbXA9ZmFsc2UmXz0xNjY3OTE5MDI1MTM2/"
            >
              Compare Products{" "}
              <span
                className="counter qty"
                data-bind="text: compareProducts().countCaption"
              >
                0 items
              </span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export const MagentoLanguageHeader = () => {
  return (
    <header className="page-header">
      <div className="panel wrapper">
        <div className="panel header">
          <a className="action skip contentarea" href="#contentarea">
            <span>Skip to Content </span>
          </a>
          <div
            className="switcher language switcher-language"
            data-ui-id="language-switcher"
            id="switcher-language"
          >
            <strong className="label switcher-label">
              <span>Language</span>
            </strong>
            <div className="actions dropdown options switcher-options">
              <div
                className="action toggle switcher-trigger"
                id="switcher-language-trigger"
                data-toggle="dropdown"
                data-trigger-keypress-button="true"
                aria-haspopup="true"
                aria-expanded="false"
                role="button"
              >
                <strong className="view-default">
                  <span>Default Store View</span>
                </strong>
              </div>
              <ul
                className="dropdown switcher-dropdown"
                data-target="dropdown"
                aria-hidden="true"
              >
                <li className="view-EN switcher-option">
                  <a href="http://tommylee.hannstar.com/stores/store/redirect/___store/EN/___from_store/default/uenc/aHR0cDovL3RvbW15bGVlLmhhbm5zdGFyLmNvbS9jdXN0b21lci9hY2NvdW50L2xvZ2luL3JlZmVyZXIvYUhSMGNEb3ZMM1J2YlcxNWJHVmxMbWhoYm01emRHRnlMbU52YlM4JTJDLz9fX19zdG9yZT1FTg%2C%2C/">
                    EN{" "}
                  </a>
                </li>
                <li className="view-TW switcher-option">
                  <a href="http://tommylee.hannstar.com/stores/store/redirect/___store/TW/___from_store/default/uenc/aHR0cDovL3RvbW15bGVlLmhhbm5zdGFyLmNvbS9jdXN0b21lci9hY2NvdW50L2xvZ2luL3JlZmVyZXIvYUhSMGNEb3ZMM1J2YlcxNWJHVmxMbWhoYm01emRHRnlMbU52YlM4JTJDLz9fX19zdG9yZT1UVw%2C%2C/">
                    繁中{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <ul className="header links">
            {" "}
            <li className="greet welcome" data-bind="scope: 'customer'">
              <span
                className="not-logged-in"
                data-bind="html: 'Default welcome msg!'"
              >
                Default welcome msg!
              </span>
            </li>
            <li className="link authorization-link" data-label="or">
              <a href="http://tommylee.hannstar.com/customer/account/login/referer/aHR0cDovL3RvbW15bGVlLmhhbm5zdGFyLmNvbS8%2C/">
                Sign In
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="header content">
        <span data-action="toggle-nav" className="action nav-toggle">
          <span>Toggle Nav</span>
        </span>
        <a
          className="logo"
          href="http://tommylee.hannstar.com/"
          title=""
          aria-label="store logo"
        >
          <img
            src="http://tommylee.hannstar.com/static/version1667955633/frontend/Magento/luma/zh_Hant_TW/images/logo.svg"
            title=""
            alt=""
            width="170"
          />
        </a>

        <div data-block="minicart" className="minicart-wrapper">
          <a
            className="action showcart"
            href="http://tommylee.hannstar.com/checkout/cart/"
            data-bind="scope: 'minicart_content'"
          >
            <span className="text">My Cart</span>
            <span
              className="counter qty empty"
              data-bind="css: { empty: !!getCartParam('summary_count') == false &amp;&amp; !isLoading() },
               blockLoader: isLoading"
            >
              <span className="counter-number"></span>
              <span className="counter-label"></span>
            </span>
          </a>
          <div
            role="dialog"
            className="ui-dialog ui-corner-all ui-widget ui-widget-content ui-front mage-dropdown-dialog"
            aria-describedby="ui-id-1"
            style={{ display: "none" }}
          >
            <div
              className="block block-minicart ui-dialog-content ui-widget-content"
              data-role="dropdownDialog"
              id="ui-id-1"
            >
              <div
                id="minicart-content-wrapper"
                data-bind="scope: 'minicart_content'"
              >
                <div className="block-title">
                  <strong>
                    <span className="text" data-bind="i18n: 'My Cart'">
                      My Cart
                    </span>
                    <span
                      className="qty empty"
                      data-bind="css: { empty: !!getCartParam('summary_count') == false },
                       attr: { title: $t('Items in Cart') }, text: getCartParam('summary_count')"
                      title="Items in Cart"
                    ></span>
                  </strong>
                </div>

                <div className="block-content">
                  <button
                    type="button"
                    id="btn-minicart-close"
                    className="action close"
                    data-action="close"
                    data-bind="
                attr: {
                    title: $t('Close')
                },
                click: closeMinicart()
            "
                    title="Close"
                  >
                    <span data-bind="i18n: 'Close'">Close</span>
                  </button>

                  <strong
                    className="subtitle empty"
                    data-bind="i18n: 'You have no items in your shopping cart.'"
                  >
                    You have no items in your shopping cart.
                  </strong>

                  <div id="minicart-widgets" className="minicart-widgets"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block block-search">
          <div className="block block-title">
            <strong>Search</strong>
          </div>
          <div className="block block-content">
            <form
              className="form minisearch"
              id="search_mini_form"
              action="http://tommylee.hannstar.com/catalogsearch/result/"
              method="get"
            >
              <div className="field search">
                <label
                  className="label"
                  htmlFor="search"
                  data-role="minisearch-label"
                >
                  <span>Search</span>
                </label>
                <div className="control">
                  <input
                    id="search"
                    type="text"
                    name="q"
                    value=""
                    placeholder="Search entire store here..."
                    className="input-text"
                    role="combobox"
                    aria-haspopup="false"
                    aria-autocomplete="both"
                    aria-expanded="false"
                  />
                  <div
                    id="search_autocomplete"
                    className="search-autocomplete"
                  ></div>
                  <div className="nested">
                    <a
                      className="action advanced"
                      href="http://tommylee.hannstar.com/catalogsearch/advanced/"
                      data-action="advanced-search"
                    >
                      Advanced Search{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="actions">
                <button
                  type="submit"
                  title="Search"
                  className="action search"
                  aria-label="Search"
                >
                  <span>Search</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <ul className="compare wrapper">
          <li
            className="item link compare"
            data-bind="scope: 'compareProducts'"
            data-role="compare-products-link"
          >
            <a
              className="action compare no-display"
              title="Compare Products"
              data-bind="attr: {'href': compareProducts().listUrl}, css: {'no-display': !compareProducts().count}"
            >
              Compare Products{" "}
              <span
                className="counter qty"
                data-bind="text: compareProducts().countCaption"
              ></span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export const MagentoInputHeader = () => {
  return (
    <header className="page-header hannstarMagentoHeader">
      <div className="panel wrapper ddd">
        <div className="panel header">
          <a className="action skip contentarea" href="#contentarea">
            <span>Skip to Content </span>
          </a>
          <ul className="header links">
            {" "}
            <li className="greet welcome" data-bind="scope: 'customer'">
              <span
                className="not-logged-in"
                data-bind="html: 'Default welcome msg!'"
              >
                Default welcome msg!
              </span>
            </li>
            <li className="link authorization-link" data-label="or">
              <a href="http://tommylee.magento.com/customer/account/login/referer/aHR0cDovL3RvbW15bGVlLm1hZ2VudG8uY29tLw%2C%2C/">
                Sign In
              </a>
            </li>
            <li>
              <a
                href="http://tommylee.magento.com/customer/account/create/"
                id="idYblgCxm9"
              >
                Create an Account
              </a>
            </li>
          </ul>
          <div className="block block-search">
            <div className="block block-title">
              <strong>Search</strong>
            </div>
            <div className="block block-content">
              <form
                className="form minisearch"
                id="search_mini_form"
                action="http://tommylee.magento.com/catalogsearch/result/"
                method="get"
              >
                <div className="field search">
                  <label
                    className="label"
                    htmlFor="search"
                    data-role="minisearch-label"
                  >
                    <span>Search</span>
                  </label>
                  <div className="control">
                    <input
                      id="search"
                      type="text"
                      name="q"
                      value=""
                      placeholder="Search entire store here..."
                      className="input-text"
                      role="combobox"
                      aria-haspopup="false"
                      aria-autocomplete="both"
                      aria-expanded="false"
                    />
                    <div
                      id="search_autocomplete"
                      className="search-autocomplete"
                    ></div>
                    <div className="nested">
                      <a
                        className="action advanced"
                        href="http://tommylee.magento.com/catalogsearch/advanced/"
                        data-action="advanced-search"
                      >
                        Advanced Search{" "}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="actions">
                  <button
                    type="submit"
                    title="Search"
                    className="action search"
                    aria-label="Search"
                  >
                    <span>Search</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div data-block="minicart" className="minicart-wrapper">
            <a
              className="action showcart"
              href="http://tommylee.magento.com/checkout/cart/"
              data-bind="scope: 'minicart_content'"
            >
              <span className="text">My Cart</span>
              <span
                className="counter qty empty"
                data-bind="css: { empty: !!getCartParam('summary_count') == false &amp;&amp; !isLoading() },
               blockLoader: isLoading"
              >
                <span className="counter-number"></span>
                <span className="counter-label"></span>
              </span>
            </a>

            <div
              role="dialog"
              className="ui-dialog ui-corner-all ui-widget ui-widget-content ui-front mage-dropdown-dialog"
              aria-describedby="ui-id-1"
            >
              <div
                className="block block-minicart ui-dialog-content ui-widget-content"
                data-role="dropdownDialog"
                id="ui-id-1"
              >
                <div
                  id="minicart-content-wrapper"
                  data-bind="scope: 'minicart_content'"
                >
                  <div className="block-title">
                    <strong>
                      <span className="text" data-bind="i18n: 'My Cart'">
                        My Cart
                      </span>
                      <span
                        className="qty empty"
                        data-bind="css: { empty: !!getCartParam('summary_count') == false },
                       attr: { title: $t('Items in Cart') }, text: getCartParam('summary_count')"
                        title="Items in Cart"
                      ></span>
                    </strong>
                  </div>

                  <div className="block-content">
                    <button
                      type="button"
                      id="btn-minicart-close"
                      className="action close"
                      data-action="close"
                      data-bind="
                attr: {
                    title: $t('Close')
                },
                click: closeMinicart()
            "
                      title="Close"
                    >
                      <span data-bind="i18n: 'Close'">Close</span>
                    </button>

                    <strong
                      className="subtitle empty"
                      data-bind="i18n: 'You have no items in your shopping cart.'"
                    >
                      You have no items in your shopping cart.
                    </strong>

                    <div
                      id="minicart-widgets"
                      className="minicart-widgets"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
