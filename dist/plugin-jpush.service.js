/**
 * Created by youyou on 16/11/23.
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
var JPushService = /** @class */ (function () {
    function JPushService() {
        this.warnText = '没有找到 jPushPlugin 对象 \n也许你是在浏览器环境下运行或者没有正确安装插件； \n如果没有在Platform 的 ready 方法中调用，也会出现这样的情况。\n了解：http://ionicframework.com/docs/v2/api/platform/Platform/';
        this.initJPushPlugin();
    }
    JPushService.prototype.wrapEventObservable = function (event) {
        return new Observable(function (observer) {
            document.addEventListener(event, observer.next.bind(observer), false);
            return function () { return document.removeEventListener(event, observer.next.bind(observer), false); };
        });
    };
    JPushService.prototype.initJPushPlugin = function () {
        if (window.plugins && window.plugins.jPushPlugin) {
            this.jPushPlugin = window.plugins.jPushPlugin;
        }
        else if (window.JPush) {
            this.jPushPlugin = window.JPush;
        }
        else {
            this.jPushPlugin = null;
        }
    };
    JPushService.prototype.setDebugMode = function (debug) {
        var _this = this;
        this.initJPushPlugin();
        return new Promise(function (resolve, reject) {
            if (_this.jPushPlugin) {
                _this.jPushPlugin.setDebugMode(debug);
                resolve('ok');
            }
            else {
                console.warn(_this.warnText);
                reject('没有找到 jPushPlugin');
            }
        });
    };
    JPushService.prototype.startJPushSDK = function () {
        var _this = this;
        this.initJPushPlugin();
        return new Promise(function (resolve, reject) {
            if (_this.jPushPlugin) {
                _this.jPushPlugin.startJPushSDK();
                resolve('ok');
            }
            else {
                console.warn(_this.warnText);
                reject('没有找到 jPushPlugin');
            }
        });
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
    JPushService.prototype.getUserNotificationSettings = function () {
        var _this = this;
        this.initJPushPlugin();
        return new Promise(function (resolve, reject) {
            if (_this.jPushPlugin) {
                _this.jPushPlugin.getUserNotificationSettings(function (result) {
                    if (result === 0) {
                        reject(result);
                    }
                    else {
                        resolve(result);
                    }
                });
            }
            else {
                console.warn(_this.warnText);
                reject('没有找到 jPushPlugin');
            }
        });
    };
    JPushService.prototype.setLatestNotificationNum = function (num) {
        var _this = this;
        if (num === void 0) { num = 5; }
        this.initJPushPlugin();
        return new Promise(function (resolve, reject) {
            if (_this.jPushPlugin) {
                _this.jPushPlugin.setLatestNotificationNum(num);
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
                    resolve(result);
                });
            }
            else {
                console.warn(_this.warnText);
                reject('没有找到 jPushPlugin');
            }
        });
    };
    /**
     *
     * @param tags
     * @param alias
     * @returns {Promise<T>}
     */
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
    /**
     *
     * @param data
     * @returns {Promise<T>}
     */
    JPushService.prototype.setTags = function (data) {
        var _this = this;
        this.initJPushPlugin();
        if (Array.isArray(data)) {
            return new Promise(function (resolve, reject) {
                if (_this.jPushPlugin) {
                    _this.jPushPlugin.setTags(data);
                    resolve('ok');
                }
                else {
                    console.warn(_this.warnText);
                    reject('没有找到 jPushPlugin');
                }
            });
        }
        else if (typeof data === 'object') {
            return new Promise(function (resolve, reject) {
                if (_this.jPushPlugin) {
                    _this.jPushPlugin.setTags(data, function (res) { return resolve(res); }, function (error) { return reject(error); });
                }
                else {
                    console.warn(_this.warnText);
                    reject('没有找到 jPushPlugin');
                }
            });
        }
    };
    JPushService.prototype.addTags = function (data) {
        var _this = this;
        this.initJPushPlugin();
        return new Promise(function (resolve, reject) {
            if (_this.jPushPlugin) {
                _this.jPushPlugin.addTags(data, function (res) { return resolve(res); }, function (error) { return reject(error); });
            }
            else {
                console.warn(_this.warnText);
                reject('没有找到 jPushPlugin');
            }
        });
    };
    JPushService.prototype.deleteTags = function (data) {
        var _this = this;
        this.initJPushPlugin();
        return new Promise(function (resolve, reject) {
            if (_this.jPushPlugin) {
                _this.jPushPlugin.deleteTags(data, function (res) { return resolve(res); }, function (error) { return reject(error); });
            }
            else {
                console.warn(_this.warnText);
                reject('没有找到 jPushPlugin');
            }
        });
    };
    JPushService.prototype.cleanTags = function (data) {
        var _this = this;
        this.initJPushPlugin();
        return new Promise(function (resolve, reject) {
            if (_this.jPushPlugin) {
                _this.jPushPlugin.cleanTags(data, function (res) { return resolve(res); }, function (error) { return reject(error); });
            }
            else {
                console.warn(_this.warnText);
                reject('没有找到 jPushPlugin');
            }
        });
    };
    JPushService.prototype.getAllTags = function (data) {
        var _this = this;
        this.initJPushPlugin();
        return new Promise(function (resolve, reject) {
            if (_this.jPushPlugin) {
                _this.jPushPlugin.getAllTags(data, function (res) { return resolve(res); }, function (error) { return reject(error); });
            }
            else {
                console.warn(_this.warnText);
                reject('没有找到 jPushPlugin');
            }
        });
    };
    JPushService.prototype.checkTagBindState = function (data) {
        var _this = this;
        this.initJPushPlugin();
        return new Promise(function (resolve, reject) {
            if (_this.jPushPlugin) {
                _this.jPushPlugin.checkTagBindState(data, function (res) { return resolve(res); }, function (error) { return reject(error); });
            }
            else {
                console.warn(_this.warnText);
                reject('没有找到 jPushPlugin');
            }
        });
    };
    /**
     *
     * @param alias
     * @returns {Promise<T>}
     */
    JPushService.prototype.setAlias = function (alias) {
        var _this = this;
        this.initJPushPlugin();
        if (typeof alias === 'string') {
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
        }
        else if (typeof alias === 'object') {
            return new Promise(function (resolve, reject) {
                if (_this.jPushPlugin) {
                    _this.jPushPlugin.setAlias(alias, function (res) { return resolve(res); }, function (error) { return reject(error); });
                }
                else {
                    console.warn(_this.warnText);
                    reject('没有找到 jPushPlugin');
                }
            });
        }
    };
    JPushService.prototype.deleteAlias = function (data) {
        var _this = this;
        this.initJPushPlugin();
        return new Promise(function (resolve, reject) {
            if (_this.jPushPlugin) {
                _this.jPushPlugin.deleteAlias(data, function (res) { return resolve(res); }, function (error) { return reject(error); });
            }
            else {
                console.warn(_this.warnText);
                reject('没有找到 jPushPlugin');
            }
        });
    };
    JPushService.prototype.getAlias = function (data) {
        var _this = this;
        this.initJPushPlugin();
        return new Promise(function (resolve, reject) {
            if (_this.jPushPlugin) {
                _this.jPushPlugin.getAlias(data, function (res) { return resolve(res); }, function (error) { return reject(error); });
            }
            else {
                console.warn(_this.warnText);
                reject('没有找到 jPushPlugin');
            }
        });
    };
    /**
     *
     * @param value
     * @returns {Promise<T>}
     */
    JPushService.prototype.setBadge = function (value) {
        var _this = this;
        this.initJPushPlugin();
        return new Promise(function (resolve, reject) {
            if (_this.jPushPlugin) {
                _this.jPushPlugin.setBadge(value);
                resolve('ok');
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
                _this.jPushPlugin.reSetBadge();
                resolve('ok');
            }
            else {
                console.warn(_this.warnText);
                reject('没有找到 jPushPlugin');
            }
        });
    };
    JPushService.prototype.clearAllLocalNotifications = function () {
        var _this = this;
        this.initJPushPlugin();
        return new Promise(function (resolve, reject) {
            if (_this.jPushPlugin) {
                _this.jPushPlugin.clearAllLocalNotifications();
                resolve('ok');
            }
            else {
                console.warn(_this.warnText);
                reject('没有找到 jPushPlugin');
            }
        });
    };
    /**
     *
     * @param value
     * @returns {Promise<T>}
     */
    JPushService.prototype.setApplicationIconBadgeNumber = function (value) {
        var _this = this;
        this.initJPushPlugin();
        return new Promise(function (resolve, reject) {
            if (_this.jPushPlugin) {
                _this.jPushPlugin.setApplicationIconBadgeNumber(value);
                resolve('ok');
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
                _this.jPushPlugin.getApplicationIconBadgeNumber(function (num) {
                    resolve(num);
                });
            }
            else {
                console.warn(_this.warnText);
                reject('没有找到 jPushPlugin');
            }
        });
    };
    JPushService.prototype.setPushTime = function (days, startHour, endHour) {
        var _this = this;
        this.initJPushPlugin();
        return new Promise(function (resolve, reject) {
            if (_this.jPushPlugin) {
                _this.jPushPlugin.setPushTime(days, startHour, endHour);
                resolve('ok');
            }
            else {
                console.warn(_this.warnText);
                reject('没有找到 jPushPlugin');
            }
        });
    };
    JPushService.prototype.setSilenceTime = function (startHour, startMinute, endHour, endMinute) {
        var _this = this;
        this.initJPushPlugin();
        return new Promise(function (resolve, reject) {
            if (_this.jPushPlugin) {
                _this.jPushPlugin.setSilenceTime(startHour, startMinute, endHour, endMinute);
                resolve('ok');
            }
            else {
                console.warn(_this.warnText);
                reject('没有找到 jPushPlugin');
            }
        });
    };
    /**
     *
     * @param id
     * @returns {Promise<T>}
     */
    JPushService.prototype.clearNotificationById = function (id) {
        var _this = this;
        this.initJPushPlugin();
        return new Promise(function (resolve, reject) {
            if (_this.jPushPlugin) {
                _this.jPushPlugin.clearNotificationById(id);
                resolve('ok');
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
                _this.jPushPlugin.clearAllNotification();
                resolve('ok');
            }
            else {
                console.warn(_this.warnText);
                reject('没有找到 jPushPlugin');
            }
        });
    };
    /**
     *
     * @returns {Observable<any>}
     */
    JPushService.prototype.openNotification = function () {
        return this.wrapEventObservable('jpush.openNotification');
    };
    /**
     *
     * @returns {Observable<any>}
     */
    JPushService.prototype.receiveNotification = function () {
        return this.wrapEventObservable('jpush.receiveNotification');
    };
    /**
     *
     * @returns {Observable<any>}
     */
    JPushService.prototype.receiveMessage = function () {
        return this.wrapEventObservable('jpush.receiveMessage');
    };
    JPushService.prototype.backgroundNotification = function () {
        return this.wrapEventObservable('jpush.backgroundNotification');
    };
    JPushService.prototype.receiveRegistrationId = function () {
        return this.wrapEventObservable('jpush.receiveRegistrationId');
    };
    JPushService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    JPushService.ctorParameters = function () { return []; };
    return JPushService;
}());
export { JPushService };
//# sourceMappingURL=plugin-jpush.service.js.map