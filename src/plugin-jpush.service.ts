/**
 * Created by youyou on 16/11/23.
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

declare var plugins: any;
declare var document: any;

@Injectable()
export class JPushService {

    private jPushPlugin: any;
    warnText: string = '没有找到 jPushPlugin 对象 \n也许你是在浏览器环境下运行或者没有正确安装插件； \n如果没有在Platform 的 ready 方法中调用，也会出现这样的情况。\n了解：http://ionicframework.com/docs/v2/api/platform/Platform/';

    constructor() {
        this.initJPushPlugin()
    }

    wrapEventObservable(event: string): Observable<any> {
        return new Observable((observer: any) => {
            document.addEventListener(event, observer.next.bind(observer), false);
            return () => document.removeEventListener(event, observer.next.bind(observer), false);
        });
    }

    initJPushPlugin() {
        if ((<any>window).plugins && (<any>window).plugins.jPushPlugin) {
            this.jPushPlugin = (<any>window).plugins.jPushPlugin
        } else if ((<any>window).JPush) {
            this.jPushPlugin = (<any>window).JPush
        } else {
            this.jPushPlugin = null
        }
    }

    setDebugMode(isOpen: boolean) {
        this.initJPushPlugin();
        return new Promise((resolve, reject) => {

            if (this.jPushPlugin) {
                this.jPushPlugin.setDebugMode(isOpen);
                resolve('ok')
            } else {
                console.warn(this.warnText);
                reject('没有找到 jPushPlugin');
            }
        })
    }

    startJPushSDK() {
        this.initJPushPlugin();
        return new Promise((resolve, reject) => {

            if (this.jPushPlugin) {
                this.jPushPlugin.startJPushSDK();
                resolve('ok')
            } else {
                console.warn(this.warnText);
                reject('没有找到 jPushPlugin');
            }
        })
    }

    init() {
        this.initJPushPlugin();
        return new Promise((resolve, reject) => {

            if (this.jPushPlugin) {
                this.jPushPlugin.init();
                resolve('ok')
            } else {
                console.warn(this.warnText);
                reject('没有找到 jPushPlugin');
            }
        })
    }

    stopPush() {
        this.initJPushPlugin();

        return new Promise((resolve, reject) => {

            if (this.jPushPlugin) {
                this.jPushPlugin.stopPush();
                resolve('ok')
            } else {
                console.warn(this.warnText);
                reject('没有找到 jPushPlugin');
            }
        })
    }

    resumePush() {
        this.initJPushPlugin();
        return new Promise((resolve, reject) => {
            if (this.jPushPlugin) {
                this.jPushPlugin.resumePush();

                resolve('ok')
            } else {
                console.warn(this.warnText);
                reject('没有找到 jPushPlugin');
            }
        })
    }

    getRegistrationID() {
        this.initJPushPlugin();

        return new Promise((resolve, reject) => {

            if (this.jPushPlugin) {
                this.jPushPlugin.getRegistrationID((id: any) => {
                    if (id) {
                        resolve(id)
                    } else {
                        reject('获取ID失败')
                    }
                })
            } else {
                console.warn(this.warnText);
                reject('没有找到 jPushPlugin');
            }


        })
    }

    getUserNotificationSettings() {
        this.initJPushPlugin();
        return new Promise((resolve, reject) => {
            if (this.jPushPlugin) {
                this.jPushPlugin.getUserNotificationSettings((result: any) => {
                    if (result === 0) {
                        reject(result)
                    } else {
                        resolve(result)
                    }
                })
            } else {
                console.warn(this.warnText);
                reject('没有找到 jPushPlugin');
            }
        })
    }

    setLatestNotificationNum(num = 5) {
        this.initJPushPlugin();
        return new Promise((resolve, reject) => {

            if (this.jPushPlugin) {
                this.jPushPlugin.setLatestNotificationNum(num);
                resolve('ok')
            } else {
                console.warn(this.warnText);
                reject('没有找到 jPushPlugin');
            }
        })
    }


    isPushStopped() {
        this.initJPushPlugin();
        return new Promise((resolve, reject) => {

            if (this.jPushPlugin) {
                this.jPushPlugin.isPushStopped((result: any) => {
                    if (result === 0) {
                        resolve(true)
                    } else {
                        reject(false)
                    }
                })
            } else {
                console.warn(this.warnText);
                reject('没有找到 jPushPlugin');
            }


        })
    }

    /**
     *
     * @param tags
     * @param alias
     * @returns {Promise<T>}
     */
    setTagsWithAlias(tags: Array<any>, alias: string) {
        this.initJPushPlugin();
        return new Promise((resolve, reject) => {
            if (this.jPushPlugin) {
                this.jPushPlugin.setTagsWithAlias(tags, alias);
                resolve('ok')
            } else {
                console.warn(this.warnText);
                reject('没有找到 jPushPlugin');
            }
        })
    }

    /**
     *
     * @param data
     * @returns {Promise<T>}
     */
    setTags(data: string[] | { sequence: number; tags: string[] }) {
        this.initJPushPlugin();

        if (Array.isArray(data)) {
            return new Promise((resolve, reject) => {
                if (this.jPushPlugin) {
                    this.jPushPlugin.setTags(data);
                    resolve('ok')
                } else {
                    console.warn(this.warnText);
                    reject('没有找到 jPushPlugin');
                }
            })
        } else if (typeof data === 'object') {
            return new Promise((resolve, reject) => {
                if (this.jPushPlugin) {
                    this.jPushPlugin.setTags(
                        data,
                        (res: any) => resolve(res),
                        (error: any) => reject(error)
                    );
                } else {
                    console.warn(this.warnText);
                    reject('没有找到 jPushPlugin');
                }
            })
        }
    }

    addTags(data: { sequence: number; tags: string[] }) {
        this.initJPushPlugin();

        return new Promise((resolve, reject) => {
            if (this.jPushPlugin) {
                this.jPushPlugin.addTags(
                    data,
                    (res: any) => resolve(res),
                    (error: any) => reject(error)
                );
            } else {
                console.warn(this.warnText);
                reject('没有找到 jPushPlugin');
            }
        })
    }

    deleteTags(data: { sequence: number; tags: string[] }) {
        this.initJPushPlugin();

        return new Promise((resolve, reject) => {
            if (this.jPushPlugin) {
                this.jPushPlugin.deleteTags(
                    data,
                    (res: any) => resolve(res),
                    (error: any) => reject(error)
                );
            } else {
                console.warn(this.warnText);
                reject('没有找到 jPushPlugin');
            }
        })
    }

    cleanTags(data: { sequence: number }) {
        this.initJPushPlugin();

        return new Promise((resolve, reject) => {
            if (this.jPushPlugin) {
                this.jPushPlugin.cleanTags(
                    data,
                    (res: any) => resolve(res),
                    (error: any) => reject(error)
                );
            } else {
                console.warn(this.warnText);
                reject('没有找到 jPushPlugin');
            }
        })
    }

    getAllTags(data: { sequence: number }) {
        this.initJPushPlugin();

        return new Promise((resolve, reject) => {
            if (this.jPushPlugin) {
                this.jPushPlugin.getAllTags(
                    data,
                    (res: any) => resolve(res),
                    (error: any) => reject(error)
                );
            } else {
                console.warn(this.warnText);
                reject('没有找到 jPushPlugin');
            }
        })
    }

    checkTagBindState(data: { sequence: number, tag: string }) {
        this.initJPushPlugin();

        return new Promise((resolve, reject) => {
            if (this.jPushPlugin) {
                this.jPushPlugin.checkTagBindState(
                    data,
                    (res: any) => resolve(res),
                    (error: any) => reject(error)
                );
            } else {
                console.warn(this.warnText);
                reject('没有找到 jPushPlugin');
            }
        })
    }

    /**
     *
     * @param alias
     * @returns {Promise<T>}
     */
    setAlias(alias: string | { sequence: number; alias: string }) {
        this.initJPushPlugin();
        if (typeof alias === 'string') {
            return new Promise((resolve, reject) => {
                if (this.jPushPlugin) {
                    this.jPushPlugin.setAlias(alias);
                    resolve('ok')
                } else {
                    console.warn(this.warnText);
                    reject('没有找到 jPushPlugin');
                }
            })
        } else if (typeof alias === 'object') {
            return new Promise((resolve, reject) => {
                if (this.jPushPlugin) {
                    this.jPushPlugin.setAlias(
                        alias,
                        (res: any) => resolve(res),
                        (error: any) => reject(error)
                    );
                } else {
                    console.warn(this.warnText);
                    reject('没有找到 jPushPlugin');
                }
            })
        }

    }

    deleteAlias(data: { sequence: number }) {
        this.initJPushPlugin();
        return new Promise((resolve, reject) => {
            if (this.jPushPlugin) {
                this.jPushPlugin.deleteAlias(
                    data,
                    (res: any) => resolve(res),
                    (error: any) => reject(error)
                );
            } else {
                console.warn(this.warnText);
                reject('没有找到 jPushPlugin');
            }
        })
    }

    getAlias(data: { sequence: number }) {
        this.initJPushPlugin();
        return new Promise((resolve, reject) => {
            if (this.jPushPlugin) {
                this.jPushPlugin.getAlias(
                    data,
                    (res: any) => resolve(res),
                    (error: any) => reject(error)
                );
            } else {
                console.warn(this.warnText);
                reject('没有找到 jPushPlugin');
            }
        })
    }

    /**
     *
     * @param value
     * @returns {Promise<T>}
     */
    setBadge(value: number) {
        this.initJPushPlugin();
        return new Promise((resolve, reject) => {
            if (this.jPushPlugin) {
                this.jPushPlugin.setBadge(value);
                resolve('ok')
            } else {
                console.warn(this.warnText);
                reject('没有找到 jPushPlugin');
            }
        })

    }

    reSetBadge() {
        this.initJPushPlugin();

        return new Promise((resolve, reject) => {
            if (this.jPushPlugin) {
                this.jPushPlugin.reSetBadge();
                resolve('ok')
            } else {
                console.warn(this.warnText);
                reject('没有找到 jPushPlugin');
            }
        })

    }

    /**
     *
     * @param value
     * @returns {Promise<T>}
     */
    setApplicationIconBadgeNumber(value: number) {
        this.initJPushPlugin();
        return new Promise((resolve, reject) => {
            if (this.jPushPlugin) {
                this.jPushPlugin.setApplicationIconBadgeNumber(value);
                resolve('ok')

            } else {
                console.warn(this.warnText);
                reject('没有找到 jPushPlugin');
            }
        })
    }

    getApplicationIconBadgeNumber() {
        this.initJPushPlugin();

        return new Promise((resolve, reject) => {

            if (this.jPushPlugin) {
                this.jPushPlugin.getApplicationIconBadgeNumber((num: any) => {
                    resolve(num)
                })
            } else {
                console.warn(this.warnText);
                reject('没有找到 jPushPlugin');
            }


        })
    }

    setPushTime(days: number | null[], startHour: number, endHour: number) {
        this.initJPushPlugin();
        return new Promise((resolve, reject) => {
            if (this.jPushPlugin) {
                this.jPushPlugin.setPushTime(days, startHour, endHour);
                resolve('ok')
            } else {
                console.warn(this.warnText);
                reject('没有找到 jPushPlugin');
            }
        })
    }

    setSilenceTime(startHour: number, startMinute: number, endHour: number, endMinute: number) {
        this.initJPushPlugin();
        return new Promise((resolve, reject) => {
            if (this.jPushPlugin) {
                this.jPushPlugin.setSilenceTime(startHour, startMinute, endHour, endMinute);
                resolve('ok')
            } else {
                console.warn(this.warnText);
                reject('没有找到 jPushPlugin');
            }
        })
    }

    /**
     *
     * @param id
     * @returns {Promise<T>}
     */
    clearNotificationById(id: number) {
        this.initJPushPlugin();
        return new Promise((resolve, reject) => {
            if (this.jPushPlugin) {
                this.jPushPlugin.clearNotificationById(id);
                resolve('ok')
            } else {
                console.warn(this.warnText);
                reject('没有找到 jPushPlugin');
            }
        })

    }

    clearAllNotification() {
        this.initJPushPlugin();

        return new Promise((resolve, reject) => {
            if (this.jPushPlugin) {
                this.jPushPlugin.clearAllNotification();
                resolve('ok')
            } else {
                console.warn(this.warnText);
                reject('没有找到 jPushPlugin');
            }
        })

    }

    /**
     *
     * @returns {Observable<any>}
     */
    openNotification() {
        return this.wrapEventObservable('jpush.openNotification');
    }

    /**
     *
     * @returns {Observable<any>}
     */
    receiveNotification() {
        return this.wrapEventObservable('jpush.receiveNotification');
    }

    /**
     *
     * @returns {Observable<any>}
     */
    receiveMessage() {
        return this.wrapEventObservable('jpush.receiveMessage');
    }

    backgroundNotification() {
        return this.wrapEventObservable('jpush.backgroundNotification');
    }

    receiveRegistrationId() {
        return this.wrapEventObservable('jpush.receiveRegistrationId');
    }
}
