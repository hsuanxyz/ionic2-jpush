import { Observable } from 'rxjs/Rx';
import { Platform } from "ionic-angular";
export declare class JPushService {
    private platform;
    private jPushPlugin;
    warnText: string;
    constructor(platform: Platform);
    wrapEventObservable(event: string): Observable<any>;
    initJPushPlugin(): void;
    init(): Promise<{}>;
    getRegistrationID(): Promise<{}>;
    stopPush(): Promise<{}>;
    resumePush(): Promise<{}>;
    isPushStopped(): Promise<{}>;
    setTagsWithAlias(tags: Array<any>, alias: string): Promise<{}>;
    setTags(tags: Array<any>): Promise<{}>;
    setAlias(alias: string): Promise<{}>;
    setBadge(value: number): Promise<{}>;
    reSetBadge(): Promise<{}>;
    setApplicationIconBadgeNumber(value: number): Promise<{}>;
    getApplicationIconBadgeNumber(): Promise<{}>;
    clearNotificationById(id: number): Promise<{}>;
    clearAllNotification(): Promise<{}>;
    openNotification(): Observable<any>;
    receiveNotification(): Observable<any>;
    receiveMessage(): Observable<any>;
    backgroundNotification(): Observable<any>;
}
