export const DeleteBlock = () => {
    return (<div className="mp-gdpr-delete-customer-account col-mp mp-12 mp-xs-12">
        <fieldset className="fieldset info mp-gdpr-delete-account">
            <legend className="legend">
                <span>Delete Account</span>
            </legend><br />
            <div className="gdpr-delete-message col-mp mp-12 mp-xs-12">
                Your account will be permanently deleted. Once you delete your account, there is no going back. Please be certain.           </div>

            <div className="actions-toolbar col-mp mp-12 mp-xs-12">
                <div className="primary">
                    <button type="submit" className="action save primary action-delete" role="delete-account" data-address="" title="Delete your account">
                        <span>Delete your account</span>
                    </button>
                </div>
            </div>
        </fieldset>
    </div>)
}

export const DeleteBlockPop = () => {
    return (<div className="modals-wrapper">

        <aside role="dialog" className="modal-popup confirm _show" aria-describedby="modal-content-12" data-role="modal" data-type="popup" style={{ "zIndex": "1" }}>
            <div data-role="focusable-start"></div>
            <div className="modal-inner-wrap" data-role="focusable-scope">
                <header className="modal-header">

                    <button className="action-close" data-role="closeBtn" type="button">
                        <span>Close</span>
                    </button>
                </header>
                <div id="modal-content-12" className="modal-content" data-role="content"><div>Are you sure you want to delete your account?</div></div>

                <footer className="modal-footer">

                    <button className="action-secondary action-dismiss" type="button" data-role="action"><span>Cancel</span></button>

                    <button className="action-primary action-accept" type="button" data-role="action"><span>OK</span></button>

                </footer>

            </div>
            <div data-role="focusable-end"></div>
        </aside><div className="modals-overlay" style={{ "zIndex": "1" }}></div></div>)
}