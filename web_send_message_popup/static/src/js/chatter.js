/** @odoo-module **/

import { registerPatch } from "@mail/model/model_core";

registerPatch({
    name: "Chatter",
    recordMethods: {
        onClickSendMessage(ev) {
            this._super(ev);
            if (this.composerView && this.composerView.composer && !this.composerView.composer.isLog) {
                this.composerView.openFullComposer();
            };
        },
    },
});