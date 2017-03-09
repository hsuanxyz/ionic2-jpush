/**
 * Created by youyou on 16/11/23.
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Platform } from "ionic-angular";

declare var plugins:any;
declare var document:any;

@Injectable()
export class JPushService {

  private jPushPlugin = (<any>window).plugins ? (<any>window).plugins.jPushPlugin || null : null;
  warnText:string = '没有找到 jPushPlugin 对象 \n也许你是在浏览器环境下运行或者没有正确安装插件； \n如果没有在Platform 的 ready 方法中调用，也会出现这样的情况。\n了解：http://ionicframework.com/docs/v2/api/platform/Platform/';
  constructor (    private platform: Platform,) {

  }

  wrapEventObservable(event: string): Observable<any> {
    return new Observable( (observer:any) => {
      document.addEventListener(event, observer.next.bind(observer), false);
      return () => document.removeEventListener(event, observer.next.bind(observer), false);
    });
  }

  initJPushPlugin() {
    this.jPushPlugin = (<any>window).plugins ? (<any>window).plugins.jPushPlugin || null : null;
  }

  init() {
    this.initJPushPlugin();
    return new Promise((resolve,reject) =>{

      if(this.jPushPlugin){
        this.jPushPlugin.init();
        resolve('ok')
      }else {
        console.warn(this.warnText);
        reject('没有找到 jPushPlugin');
      }
    })
  }

  getRegistrationID(){
    this.initJPushPlugin();

    return new Promise((resolve,reject) =>{

      if(this.jPushPlugin){
        this.jPushPlugin.getRegistrationID( (id:any) => {
          if(id){
            resolve(id)
          }else{
            reject('获取ID失败')
          }
        } )
      }else {
        console.warn(this.warnText);
        reject('没有找到 jPushPlugin');
      }


    })
  }

  stopPush(){
    this.initJPushPlugin();

    return new Promise((resolve,reject) =>{

      if(this.jPushPlugin){
        this.jPushPlugin.stopPush()
        resolve('ok')
      }else {
        console.warn(this.warnText);
        reject('没有找到 jPushPlugin');
      }
    })
  }

  resumePush(){
    this.initJPushPlugin();

    return new Promise((resolve,reject) =>{
      if(this.jPushPlugin){
        this.jPushPlugin.resumePush();

        resolve('ok')
      }else {
        console.warn(this.warnText);
        reject('没有找到 jPushPlugin');
      }
    })
  }

  isPushStopped(){
    this.initJPushPlugin();

    return new Promise((resolve,reject) =>{

      if(this.jPushPlugin){
        this.jPushPlugin.isPushStopped( (result:any) => {
          if(result === 0 ){
            resolve(true)
          }else{
            reject(false)
          }
        } )
      }else {
        console.warn(this.warnText);
        reject('没有找到 jPushPlugin');
      }


    })
  }

  setTagsWithAlias(tags:Array<any>,alias:string){
    this.initJPushPlugin();

    return new Promise((resolve,reject) =>{
      if(this.jPushPlugin){
        this.jPushPlugin.setTagsWithAlias(tags,alias);
        resolve('ok')
      }else {
        console.warn(this.warnText);
        reject('没有找到 jPushPlugin');
      }
    })
  }

  setTags(tags:Array<any>){
    this.initJPushPlugin();

    return new Promise((resolve,reject) =>{
      if(this.jPushPlugin){
        this.jPushPlugin.setTags(tags);
        resolve('ok')
      }else {
        console.warn(this.warnText);
        reject('没有找到 jPushPlugin');
      }
    })
  }

  setAlias(alias:string){
    this.initJPushPlugin();

    return new Promise((resolve,reject) =>{
      if(this.jPushPlugin){
        this.jPushPlugin.setAlias(alias);
        resolve('ok')
      }else {
        console.warn(this.warnText);
        reject('没有找到 jPushPlugin');
      }
    })
  }

  setBadge(value:number){
    this.initJPushPlugin();

    return new Promise((resolve,reject) =>{
      if(this.jPushPlugin){
        if(this.platform.is('ios')){
          this.jPushPlugin.setBadge(value);
          resolve('ok')
        }else {
          console.warn('setBadge 方法只支持ios平台');
          reject('setBadge 方法只支持ios平台');
        }
      }else {
        console.warn(this.warnText);
        reject('没有找到 jPushPlugin');
      }
    })

  }

  reSetBadge(){
    this.initJPushPlugin();

  return new Promise((resolve,reject) =>{
    if(this.jPushPlugin){
      if(this.platform.is('ios')){
        this.jPushPlugin.reSetBadge();
        resolve('ok')
      }else {
        console.warn('setBadge 方法只支持ios平台');
        reject('reSetBadge 方法只支持ios平台');
      }
    }else {
      console.warn(this.warnText);
      reject('没有找到 jPushPlugin');
    }
  })

}

  setApplicationIconBadgeNumber(value:number) {
    this.initJPushPlugin();

    return new Promise((resolve, reject) => {
      if (this.jPushPlugin) {
        if (this.platform.is('ios')) {
          this.jPushPlugin.setApplicationIconBadgeNumber(value);
          resolve('ok')
        } else {
          console.warn('setApplicationIconBadgeNumber 方法只支持ios平台');
          reject('setApplicationIconBadgeNumber 方法只支持ios平台');
        }
      } else {
        console.warn(this.warnText);
        reject('没有找到 jPushPlugin');
      }
    })
  }

  getApplicationIconBadgeNumber() {
    this.initJPushPlugin();

    return new Promise((resolve,reject) =>{

      if(this.jPushPlugin){
        if(this.platform.is('ios')){
          this.jPushPlugin.getApplicationIconBadgeNumber( (num:any) => {
            resolve(num)
          } )
        }else {
          console.warn('setBadge 方法只支持ios平台');
          reject('setBadge 方法只支持ios平台');
        }

      }else {
        console.warn(this.warnText);
        reject('没有找到 jPushPlugin');
      }


    })
  }

  clearNotificationById(id:number){
    this.initJPushPlugin();

    return new Promise((resolve,reject) =>{
      if(this.jPushPlugin){
        if(this.platform.is('android')){
          this.jPushPlugin.clearNotificationById(id);
          resolve('ok')
        }else {
          console.warn('clearNotificationById 方法只支持android平台');
          reject('clearNotificationById 方法只支持android平台');
        }
      }else {
        console.warn(this.warnText);
        reject('没有找到 jPushPlugin');
      }
    })

  }

  clearAllNotification(){
    this.initJPushPlugin();

    return new Promise((resolve,reject) =>{
      if(this.jPushPlugin){
        if(this.platform.is('android')){
          this.jPushPlugin.clearAllNotification();
          resolve('ok')
        }else {
          console.warn('clearAllNotification 方法只支持android平台');
          reject('clearAllNotification 方法只支持android平台');
        }
      }else {
        console.warn(this.warnText);
        reject('没有找到 jPushPlugin');
      }
    })

  }

  openNotification(){
    return this.wrapEventObservable('jpush.openNotification');
  }

  receiveNotification(){
    return this.wrapEventObservable('jpush.receiveNotification');
  }

  receiveMessage(){
    return this.wrapEventObservable('jpush.receiveMessage');
  }

  backgroundNotification(){
    return this.wrapEventObservable('jpush.backgroundNotification');
  }
}
