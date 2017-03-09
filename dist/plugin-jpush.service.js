var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
export var JPushService = (function () {
    function JPushService(platform) {
        this.platform = platform;
        this.jPushPlugin = window.plugins ? window.plugins.jPushPlugin || null : null;
        this.warnText = '没有找到 jPushPlugin 对象 \n也许你是在浏览器环境下运行或者没有正确安装插件； \n如果没有在Platform 的 ready 方法中调用，也会出现这样的情况。\n了解：http://ionicframework.com/docs/v2/api/platform/Platform/';
    }
    JPushService.prototype.wrapEventObservable = function (event) {
        return new Observable(function (observer) {
            document.addEventListener(event, observer.next.bind(observer), false);
            return function () { return document.removeEventListener(event, observer.next.bind(observer), false); };
        });
    };
    JPushService.prototype.initJPushPlugin = function () {
        this.jPushPlugin = window.plugins ? window.plugins.jPushPlugin || null : null;
    };
    JPushService.prototype.init = function () {
        var _this = this;
        this.initJPushPlugin();
        return new Promise(function (resolve, reject) {
            if (_this.jPushPlugin) {
                _this.jPushPlugin.init();
                resolve('ok');
            }
            else {
                console.warn(_this.warnText);
                reject('没有找到 jPushPlugin');
            }
        });
    };
    JPushService.prototype.getRegistrationID = function () {
        var _this = this;
        this.initJPushPlugin();
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
                console.warn(_this.warnText);
                reject('没有找到 jPushPlugin');
            }
        });
    };
    JPushService.prototype.stopPush = function () {
        var _this = this;
        this.initJPushPlugin();
        return new Promise(function (resolve, reject) {
            if (_this.jPushPlugin) {
                _this.jPushPlugin.stopPush();
                resolve('ok');
            }
            else {
                console.warn(_this.warnText);
                reject('没有找到 jPushPlugin');
            }
        });
    };
    JPushService.prototype.resumePush = function () {
        var _this = this;
        this.initJPushPlugin();
        return new Promise(function (resolve, reject) {
            if (_this.jPushPlugin) {
                _this.jPushPlugin.resumePush();
                resolve('ok');
            }
            else {
                console.warn(_this.warnText);
                reject('没有找到 jPushPlugin');
            }
        });
    };
    JPushService.prototype.isPushStopped = function () {
        var _this = this;
        this.initJPushPlugin();
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
                console.warn(_this.warnText);
                reject('没有找到 jPushPlugin');
            }
        });
    };
    JPushService.prototype.setTagsWithAlias = function (tags, alias) {
        var _this = this;
        this.initJPushPlugin();
        return new Promise(function (resolve, reject) {
            if (_this.jPushPlugin) {
                _this.jPushPlugin.setTagsWithAlias(tags, alias);
                resolve('ok');
            }
            else {
                console.warn(_this.warnText);
                reject('没有找到 jPushPlugin');
            }
        });
    };
    JPushService.prototype.setTags = function (tags) {
        var _this = this;
        this.initJPushPlugin();
        return new Promise(function (resolve, reject) {
            if (_this.jPushPlugin) {
                _this.jPushPlugin.setTags(tags);
                resolve('ok');
            }
            else {
                console.warn(_this.warnText);
                reject('没有找到 jPushPlugin');
            }
        });
    };
    JPushService.prototype.setAlias = function (alias) {
        var _this = this;
        this.initJPushPlugin();
        return new Promise(function (resolve, reject) {
            if (_this.jPushPlugin) {
                _this.jPushPlugin.setAlias(alias);
                resolve('ok');
            }
            else {
                console.warn(_this.warnText);
                reject('没有找到 jPushPlugin');
            }
        });
    };
    JPushService.prototype.setBadge = function (value) {
        var _this = this;
        this.initJPushPlugin();
        return new Promise(function (resolve, reject) {
            if (_this.jPushPlugin) {
                if (_this.platform.is('ios')) {
                    _this.jPushPlugin.setBadge(value);
                    resolve('ok');
                }
                else {
                    console.warn('setBadge 方法只支持ios平台');
                    reject('setBadge 方法只支持ios平台');
                }
            }
            else {
                console.warn(_this.warnText);
                reject('没有找到 jPushPlugin');
            }
        });
    };
    JPushService.prototype.reSetBadge = function () {
        var _this = this;
        this.initJPushPlugin();
        return new Promise(function (resolve, reject) {
            if (_this.jPushPlugin) {
                if (_this.platform.is('ios')) {
                    _this.jPushPlugin.reSetBadge();
                    resolve('ok');
                }
                else {
                    console.warn('setBadge 方法只支持ios平台');
                    reject('reSetBadge 方法只支持ios平台');
                }
            }
            else {
                console.warn(_this.warnText);
                reject('没有找到 jPushPlugin');
            }
        });
    };
    JPushService.prototype.setApplicationIconBadgeNumber = function (value) {
        var _this = this;
        this.initJPushPlugin();
        return new Promise(function (resolve, reject) {
            if (_this.jPushPlugin) {
                if (_this.platform.is('ios')) {
                    _this.jPushPlugin.setApplicationIconBadgeNumber(value);
                    resolve('ok');
                }
                else {
                    console.warn('setApplicationIconBadgeNumber 方法只支持ios平台');
                    reject('setApplicationIconBadgeNumber 方法只支持ios平台');
                }
            }
            else {
                console.warn(_this.warnText);
                reject('没有找到 jPushPlugin');
            }
        });
    };
    JPushService.prototype.getApplicationIconBadgeNumber = function () {
        var _this = this;
        this.initJPushPlugin();
        return new Promise(function (resolve, reject) {
            if (_this.jPushPlugin) {
                if (_this.platform.is('ios')) {
                    _this.jPushPlugin.getApplicationIconBadgeNumber(function (num) {
                        resolve(num);
                    });
                }
                else {
                    console.warn('setBadge 方法只支持ios平台');
                    reject('setBadge 方法只支持ios平台');
                }
            }
            else {
                console.warn(_this.warnText);
                reject('没有找到 jPushPlugin');
            }
        });
    };
    JPushService.prototype.clearNotificationById = function (id) {
        var _this = this;
        this.initJPushPlugin();
        return new Promise(function (resolve, reject) {
            if (_this.jPushPlugin) {
                if (_this.platform.is('android')) {
                    _this.jPushPlugin.clearNotificationById(id);
                    resolve('ok');
                }
                else {
                    console.warn('clearNotificationById 方法只支持android平台');
                    reject('clearNotificationById 方法只支持android平台');
                }
            }
            else {
                console.warn(_this.warnText);
                reject('没有找到 jPushPlugin');
            }
        });
    };
    JPushService.prototype.clearAllNotification = function () {
        var _this = this;
        this.initJPushPlugin();
        return new Promise(function (resolve, reject) {
            if (_this.jPushPlugin) {
                if (_this.platform.is('android')) {
                    _this.jPushPlugin.clearAllNotification();
                    resolve('ok');
                }
                else {
                    console.warn('clearAllNotification 方法只支持android平台');
                    reject('clearAllNotification 方法只支持android平台');
                }
            }
            else {
                console.warn(_this.warnText);
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
    JPushService = __decorate([
        Injectable()
    ], JPushService);
    return JPushService;
}());
//# sourceMappingURL=plugin-jpush.service.js.map