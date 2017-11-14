/**
 * Created by hsuanlee on 2017/3/5.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from "ionic-angular";
import { JPushService } from './plugin-jpush.service';
var IonJPushModule = /** @class */ (function () {
    function IonJPushModule() {
    }
    IonJPushModule.decorators = [
        { type: NgModule, args: [{
                    imports: [IonicModule, CommonModule],
                    providers: [JPushService]
                },] },
    ];
    /** @nocollapse */
    IonJPushModule.ctorParameters = function () { return []; };
    return IonJPushModule;
}());
export { IonJPushModule };
//# sourceMappingURL=jpush.module.js.map