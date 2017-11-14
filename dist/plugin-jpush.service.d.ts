import { Observable } from 'rxjs/Rx';
export declare class JPushService {
    private jPushPlugin;
    warnText: string;
    constructor();
    wrapEventObservable(event: string): Observable<any>;
    initJPushPlugin(): void;
    setDebugMode(debug: boolean): Promise<{}>;
    startJPushSDK(): Promise<{}>;
    init(): Promise<{}>;
    stopPush(): Promise<{}>;
    resumePush(): Promise<{}>;
    getRegistrationID(): Promise<{}>;
    getUserNotificationSettings(): Promise<{}>;
    setLatestNotificationNum(num?: number): Promise<{}>;
    isPushStopped(): Promise<{}>;
    /**
     *
     * @param tags
     * @param alias
     * @returns {Promise<T>}
     */
    setTagsWithAlias(tags: Array<any>, alias: string): Promise<{}>;
    /**
     *
     * @param data
     * @returns {Promise<T>}
     */
    setTags(data: string[] | {
        sequence: number;
        tags: string[];
    }): Promise<{}>;
    addTags(data: {
        sequence: number;
        tags: string[];
    }): Promise<{}>;
    deleteTags(data: {
        sequence: number;
        tags: string[];
    }): Promise<{}>;
    cleanTags(data: {
        sequence: number;
    }): Promise<{}>;
    getAllTags(data: {
        sequence: number;
    }): Promise<{}>;
    checkTagBindState(data: {
        sequence: number;
        tag: string;
    }): Promise<{}>;
    /**
     *
     * @param alias
     * @returns {Promise<T>}
     */
    setAlias(alias: string | {
        sequence: number;
        alias: string;
    }): Promise<{}>;
    deleteAlias(data: {
        sequence: number;
    }): Promise<{}>;
    getAlias(data: {
        sequence: number;
    }): Promise<{}>;
    /**
     *
     * @param value
     * @returns {Promise<T>}
     */
    setBadge(value: number): Promise<{}>;
    reSetBadge(): Promise<{}>;
    clearAllLocalNotifications(): Promise<{}>;
    /**
     *
     * @param value
     * @returns {Promise<T>}
     */
    setApplicationIconBadgeNumber(value: number): Promise<{}>;
    getApplicationIconBadgeNumber(): Promise<{}>;
    setPushTime(days: number | null[], startHour: number, endHour: number): Promise<{}>;
    setSilenceTime(startHour: number, startMinute: number, endHour: number, endMinute: number): Promise<{}>;
    /**
     *
     * @param id
     * @returns {Promise<T>}
     */
    clearNotificationById(id: number): Promise<{}>;
    clearAllNotification(): Promise<{}>;
    /**
     *
     * @returns {Observable<any>}
     */
    openNotification(): Observable<any>;
    /**
     *
     * @returns {Observable<any>}
     */
    receiveNotification(): Observable<any>;
    /**
     *
     * @returns {Observable<any>}
     */
    receiveMessage(): Observable<any>;
    backgroundNotification(): Observable<any>;
    receiveRegistrationId(): Observable<any>;
}
