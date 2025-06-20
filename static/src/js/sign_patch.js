/** @odoo-module **/

import { patch } from "@web/core/utils/patch";
import { xml } from "@odoo/owl";
import { SignNameAndSignatureDialog } from "@sign/dialogs/sign_name_and_signature_dialog";

patch(SignNameAndSignatureDialog, {
    template: xml`
        <Dialog t-props="dialogProps">
            <SignNameAndSignature t-props="nameAndSignatureProps"/>
            <div class="mt16 small">
                By clicking Adopt &amp; Sign, I agree that the chosen signature/initials will be a valid electronic representation of my hand-written signature/initials for all purposes when it is used on documents, including legally binding contracts.
            </div>
            <t t-set-slot="footer">
                <button class="btn btn-primary"
                        t-if="props.onConfirmAll"
                        t-on-click="props.onConfirmAll"
                        t-att-disabled="footerState.signAllButtonsDisabled">
                    Sign all
                </button>
                <button class="btn btn-secondary"
                        t-on-click="props.onConfirm"
                        t-att-disabled="footerState.signButtonDisabled">
                    Sign
                </button>
                <button class="btn btn-secondary"
                        t-on-click="props.close">
                    Cancel
                </button>
                <button class="btn btn-primary">
                    Nuevo boton
                </button>
            </t>
        </Dialog>
    `,
});
