"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var ionic_angular_1 = require("ionic-angular");
var JPushService = (function () {
    function JPushService(platform) {
        this.platform = platform;
        this.jPushPlugin = window.plugins ? window.plugins.jPushPlugin || null : null;
    }
    JPushService.prototype.wrapEventObservable = function (event) {
        return new Rx_1.Observable(function (observer) {
            document.addEventListener(event, observer.next.bind(observer), false);
            return function () { return document.removeEventListener(event, observer.next.bind(observer), false); };
        });
    };
    JPushService.prototype.init = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.jPushPlugin) {
                _this.jPushPlugin.init();
                resolve('ok');
            }
            else {
                reject('没有找到 jPushPlugin.init');
            }
        });
    };
    JPushService.prototype.getRegistrationID = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.jPushPlugin) {
                _this.jPushPlugin.getRegistrationID(function (id) {
                    if (id !== 0) {
                        resolve(id);
                    }
                    else {
                        reject('失败');
                    }
                });
            }
            else {
                reject('没有找到 jPushPlugin');
            }
        });
    };
    JPushService.prototype.stopPush = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.jPushPlugin) {
                _this.jPushPlugin.stopPush();
                resolve('ok');
            }
            else {
                reject('没有找到 jPushPlugin');
            }
        });
    };
    JPushService.prototype.resumePush = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.jPushPlugin) {
                _this.jPushPlugin.resumePush();
                resolve('ok');
            }
            else {
                reject('没有找到 jPushPlugin');
            }
        });
    };
    JPushService.prototype.isPushStopped = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.jPushPlugin) {
                _this.jPushPlugin.isPushStopped(function (result) {
                    if (result === 0) {
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                });
            }
            else {
                reject('没有找到 jPushPlugin');
            }
        });
    };
    JPushService.prototype.setTagsWithAlias = function (tags, alias) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.jPushPlugin) {
                _this.jPushPlugin.prototype.setTagsWithAlias(tags, alias);
                resolve('ok');
            }
            else {
                reject('没有找到 jPushPlugin');
            }
        });
    };
    JPushService.prototype.setTags = function (tags) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.jPushPlugin) {
                _this.jPushPlugin.prototype.setTags(tags);
                resolve('ok');
            }
            else {
                reject('没有找到 jPushPlugin');
            }
        });
    };
    JPushService.prototype.setAlias = function (alias) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.jPushPlugin) {
                _this.jPushPlugin.prototype.setAlias(alias);
                resolve('ok');
            }
            else {
                reject('没有找到 jPushPlugin');
            }
        });
    };
    JPushService.prototype.setBadge = function (value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.jPushPlugin) {
                if (_this.platform.is('ios')) {
                    _this.jPushPlugin.prototype.setBadge(value);
                    resolve('ok');
                }
                else {
                    reject('setBadge 方法只支持ios平台');
                }
            }
            else {
                reject('没有找到 jPushPlugin');
            }
        });
    };
    JPushService.prototype.reSetBadge = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.jPushPlugin) {
                if (_this.platform.is('ios')) {
                    _this.jPushPlugin.prototype.reSetBadge();
                    resolve('ok');
                }
                else {
                    reject('reSetBadge 方法只支持ios平台');
                }
            }
            else {
                reject('没有找到 jPushPlugin');
            }
        });
    };
    JPushService.prototype.setApplicationIconBadgeNumber = function (value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.jPushPlugin) {
                if (_this.platform.is('ios')) {
                    _this.jPushPlugin.prototype.setApplicationIconBadgeNumber(value);
                    resolve('ok');
                }
                else {
                    reject('setApplicationIconBadgeNumber 方法只支持ios平台');
                }
            }
            else {
                reject('没有找到 jPushPlugin');
            }
        });
    };
    JPushService.prototype.getApplicationIconBadgeNumber = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.jPushPlugin) {
                if (_this.platform.is('ios')) {
                    _this.jPushPlugin.prototype.getApplicationIconBadgeNumber(function (num) {
                        resolve(num);
                    });
                }
                else {
                    reject('setBadge 方法只支持ios平台');
                }
            }
            else {
                reject('没有找到 jPushPlugin');
            }
        });
    };
    JPushService.prototype.clearNotificationById = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.jPushPlugin) {
                if (_this.platform.is('android')) {
                    _this.jPushPlugin.clearNotificationById(id);
                    resolve('ok');
                }
                else {
                    reject('clearNotificationById 方法只支持android平台');
                }
            }
            else {
                reject('没有找到 jPushPlugin');
            }
        });
    };
    JPushService.prototype.clearAllNotification = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.jPushPlugin) {
                if (_this.platform.is('android')) {
                    _this.jPushPlugin.clearAllNotification();
                    resolve('ok');
                }
                else {
                    reject('clearAllNotification 方法只支持android平台');
                }
            }
            else {
                reject('没有找到 jPushPlugin');
            }
        });
    };
    JPushService.prototype.openNotification = function () {
        return this.wrapEventObservable('jpush.openNotification');
    };
    JPushService.prototype.receiveNotification = function () {
        return this.wrapEventObservable('jpush.receiveNotification');
    };
    JPushService.prototype.receiveMessage = function () {
        return this.wrapEventObservable('jpush.receiveMessage');
    };
    JPushService.prototype.backgroundNotification = function () {
        return this.wrapEventObservable('jpush.backgroundNotification');
    };
    return JPushService;
}());
JPushService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof ionic_angular_1.Platform !== "undefined" && ionic_angular_1.Platform) === "function" && _a || Object])
], JPushService);
exports.JPushService = JPushService;
var _a;
//# sourceMappingURL=plugin-jpush.service.js.map