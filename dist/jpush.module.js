import { NgModule } from '@angular/core';
import { JPushService } from './plugin-jpush.service';
export var IonJPushModule = (function () {
    function IonJPushModule() {
    }
    IonJPushModule.decorators = [
        { type: NgModule, args: [{
                    providers: [JPushService],
                },] },
    ];
    /** @nocollapse */
    IonJPushModule.ctorParameters = [];
    return IonJPushModule;
}());
//# sourceMappingURL=jpush.module.js.map