export const MagentoProductMedia = () => {
  return (<div className="product media"><a id="gallery-prev-area" ></a>
    <div className="action-skip-wrapper"><a className="action skip gallery-next-area" href="#gallery-next-area">
      <span>
        Skip to the end of the images gallery    </span>
    </a>
    </div>

    <div className="gallery-placeholder" data-gallery-role="gallery-placeholder">


      <div className="fotorama--hidden"></div><style></style><div className="fotorama-item fotorama fotorama1669775368949" data-gallery-role="gallery">
        <div data-gallery-role="fotorama__focusable-start"></div>
        <div className="fotorama__wrap fotorama__wrap--css3 fotorama__wrap--slide fotorama__wrap--toggle-arrows" style={{ "minWidth": "0px", "maxWidth": "100%" }}>
          <div className="fotorama__stage" data-fotorama-stage="fotorama__stage" style={{ "height": "1280px", "width": "1280px" }}><div className="fotorama__fullscreen-icon" data-gallery-role="fotorama__fullscreen-icon" aria-label="Exit fullscreen" role="button"></div>
            <div className="fotorama__arr fotorama__arr--prev fotorama__arr--disabled" role="button" aria-label="Previous" data-gallery-role="arrow" style={{ "display": "none" }}>
              <div className="fotorama__arr__arr"></div>
            </div>
            <div className="fotorama__stage__shaft" data-gallery-role="stage-shaft" style={{ "transitionDuration": "0ms", "transform": "translate3d(0px, 0px, 0px)", "marginLeft": "0px", "width": "1280px" }}>
              <div className="fotorama__stage__frame fotorama__active fotorama_vertical_ratio fotorama__loaded fotorama__loaded--img" aria-hidden="false" data-active="true"><img src="http://tommylee.hannstar.com/media/catalog/product\cache\5aa048f4d7f2c2880c0cb3512ddf77d4\/m/b/mb01-blue-0.jpg" alt="Image" className="fotorama__img" aria-hidden="false" /></div></div>
            <div className="fotorama__arr fotorama__arr--next fotorama__arr--disabled" role="button" aria-label="Next" data-gallery-role="arrow" style={{ "display": "none" }}>
              <div className="fotorama__arr__arr"></div>
            </div>
            <div className="fotorama__video-close"></div>
            <div className="fotorama__zoom-in zoom-in-loaded" data-gallery-role="fotorama__zoom-in" aria-label="Zoom in" role="button" ></div>
            <div className="fotorama__zoom-out zoom-out-loaded" data-gallery-role="fotorama__zoom-out" aria-label="Zoom out" role="button" ></div>
            <div className="fotorama__spinner"></div>
          </div>
          <div className="fotorama__nav-wrap" data-gallery-role="nav-wrap" style={{ "display": "none" }}>
            <div className="fotorama__nav" style={{ "height": "114px" }}>

              <div className="fotorama__thumb__arr fotorama__thumb__arr--left fotorama__arr--disabled" role="button" aria-label="Previous" data-gallery-role="arrow">
                <div className="fotorama__thumb--icon"></div>
              </div>
              <div className="fotorama__nav__shaft fotorama__grab">
                <div className="fotorama__thumb-border"></div>
              </div>
              <div className="fotorama__thumb__arr fotorama__thumb__arr--right" role="button" aria-label="Next" data-gallery-role="arrow">
                <div className="fotorama__thumb--icon"></div>
              </div>
            </div>
          </div>
        </div>
        <div data-gallery-role="fotorama__focusable-end" ></div>
      </div>
      <div className="magnifier-preview magnify-hidden" data-gallery-role="magnifier" id="preview" style={{ "display": "none" }}></div>
    </div>


    <div className="action-skip-wrapper"><a className="action skip gallery-prev-area" href="#gallery-prev-area">
      <span>
        Skip to the beginning of the images gallery    </span>
    </a>
    </div><a id="gallery-next-area" ></a>
  </div>)
};

