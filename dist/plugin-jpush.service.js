import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Platform } from "ionic-angular";
export var JPushService = (function () {
    function JPushService(platform) {
        this.platform = platform;
        this.jPushPlugin = window.plugins ? window.plugins.jPushPlugin || null : null;
    }
    JPushService.prototype.wrapEventObservable = function (event) {
        return new Observable(function (observer) {
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
                    if (id) {
                        resolve(id);
                    }
                    else {
                        reject('获取ID失败');
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
                _this.jPushPlugin.setTagsWithAlias(tags, alias);
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
                _this.jPushPlugin.setTags(tags);
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
                _this.jPushPlugin.setAlias(alias);
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
                    _this.jPushPlugin.setBadge(value);
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
                    _this.jPushPlugin.reSetBadge();
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
                    _this.jPushPlugin.setApplicationIconBadgeNumber(value);
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
                    _this.jPushPlugin.getApplicationIconBadgeNumber(function (num) {
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
    JPushService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    JPushService.ctorParameters = [
        { type: Platform, },
    ];
    return JPushService;
}());
//# sourceMappingURL=plugin-jpush.service.js.map