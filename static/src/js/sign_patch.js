/** @odoo-module **/

import { patch } from "@web/core/utils/patch";
import { SignNameAndSignatureDialog } from "@sign/dialogs/sign_name_and_signature_dialog";

patch(SignNameAndSignatureDialog.prototype, {
    setup() {
        super.setup();
        console.log("✅ Patch aplicado: modificando dialogProps");

        this.dialogProps = {
            ...this.dialogProps,
            title: "Firma Electrónica Legal",
        };
    },
});
