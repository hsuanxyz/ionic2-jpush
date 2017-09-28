import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from "ionic-angular";
import { JPushService } from './plugin-jpush.service';
export var IonJPushModule = (function () {
    function IonJPushModule() {
    }
    IonJPushModule.decorators = [
        { type: NgModule, args: [{
                    imports: [IonicModule, CommonModule],
                    providers: [JPushService]
                },] },
    ];
    /** @nocollapse */
    IonJPushModule.ctorParameters = [];
    return IonJPushModule;
}());
//# sourceMappingURL=jpush.module.js.map