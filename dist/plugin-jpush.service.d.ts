import { Observable } from 'rxjs/Rx';
import { Platform } from "ionic-angular";
export declare class JPushService {
    private platform;
    private jPushPlugin;
    constructor(platform: Platform);
    wrapEventObservable(event: string): Observable<any>;
    init(): any;
    getRegistrationID(): any;
    stopPush(): any;
    resumePush(): any;
    isPushStopped(): any;
    setTagsWithAlias(tags: Array<any>, alias: string): any;
    setTags(tags: Array<any>): any;
    setAlias(alias: string): any;
    setBadge(value: number): any;
    reSetBadge(): any;
    setApplicationIconBadgeNumber(value: number): any;
    getApplicationIconBadgeNumber(): any;
    clearNotificationById(id: number): any;
    clearAllNotification(): any;
    openNotification(): any;
    receiveNotification(): any;
    receiveMessage(): any;
    backgroundNotification(): any;
}
