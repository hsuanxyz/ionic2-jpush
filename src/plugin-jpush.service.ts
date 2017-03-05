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

  constructor (    private platform: Platform,) {
  }

  wrapEventObservable(event: string): Observable<any> {
    return new Observable( (observer:any) => {
      document.addEventListener(event, observer.next.bind(observer), false);
      return () => document.removeEventListener(event, observer.next.bind(observer), false);
    });
  }

  init() {

    return new Promise((resolve,reject) =>{

      if(this.jPushPlugin){
        this.jPushPlugin.init();
        resolve('ok')
      }else {
        reject('没有找到 jPushPlugin.init');
      }
    })
  }

  getRegistrationID(){

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
        reject('没有找到 jPushPlugin');
      }


    })
  }

  stopPush(){

    return new Promise((resolve,reject) =>{

      if(this.jPushPlugin){
        this.jPushPlugin.stopPush()
        resolve('ok')
      }else {
        reject('没有找到 jPushPlugin');
      }
    })
  }

  resumePush(){
    return new Promise((resolve,reject) =>{
      if(this.jPushPlugin){
        this.jPushPlugin.resumePush();

        resolve('ok')
      }else {
        reject('没有找到 jPushPlugin');
      }
    })
  }

  isPushStopped(){

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
        reject('没有找到 jPushPlugin');
      }


    })
  }

  setTagsWithAlias(tags:Array<any>,alias:string){
    return new Promise((resolve,reject) =>{
      if(this.jPushPlugin){
        this.jPushPlugin.setTagsWithAlias(tags,alias);
        resolve('ok')
      }else {
        reject('没有找到 jPushPlugin');
      }
    })
  }

  setTags(tags:Array<any>){
    return new Promise((resolve,reject) =>{
      if(this.jPushPlugin){
        this.jPushPlugin.setTags(tags);
        resolve('ok')
      }else {
        reject('没有找到 jPushPlugin');
      }
    })
  }

  setAlias(alias:string){
    return new Promise((resolve,reject) =>{
      if(this.jPushPlugin){
        this.jPushPlugin.setAlias(alias);
        resolve('ok')
      }else {
        reject('没有找到 jPushPlugin');
      }
    })
  }

  setBadge(value:number){

    return new Promise((resolve,reject) =>{
      if(this.jPushPlugin){
        if(this.platform.is('ios')){
          this.jPushPlugin.setBadge(value);
          resolve('ok')
        }else {
          reject('setBadge 方法只支持ios平台');
        }
      }else {
        reject('没有找到 jPushPlugin');
      }
    })

  }

  reSetBadge(){

  return new Promise((resolve,reject) =>{
    if(this.jPushPlugin){
      if(this.platform.is('ios')){
        this.jPushPlugin.reSetBadge();
        resolve('ok')
      }else {
        reject('reSetBadge 方法只支持ios平台');
      }
    }else {
      reject('没有找到 jPushPlugin');
    }
  })

}

  setApplicationIconBadgeNumber(value:number) {

    return new Promise((resolve, reject) => {
      if (this.jPushPlugin) {
        if (this.platform.is('ios')) {
          this.jPushPlugin.setApplicationIconBadgeNumber(value);
          resolve('ok')
        } else {
          reject('setApplicationIconBadgeNumber 方法只支持ios平台');
        }
      } else {
        reject('没有找到 jPushPlugin');
      }
    })
  }

  getApplicationIconBadgeNumber() {

    return new Promise((resolve,reject) =>{

      if(this.jPushPlugin){
        if(this.platform.is('ios')){
          this.jPushPlugin.getApplicationIconBadgeNumber( (num:any) => {
            resolve(num)
          } )
        }else {
          reject('setBadge 方法只支持ios平台');
        }

      }else {
        reject('没有找到 jPushPlugin');
      }


    })
  }

  clearNotificationById(id:number){

    return new Promise((resolve,reject) =>{
      if(this.jPushPlugin){
        if(this.platform.is('android')){
          this.jPushPlugin.clearNotificationById(id);
          resolve('ok')
        }else {
          reject('clearNotificationById 方法只支持android平台');
        }
      }else {
        reject('没有找到 jPushPlugin');
      }
    })

  }

  clearAllNotification(){

    return new Promise((resolve,reject) =>{
      if(this.jPushPlugin){
        if(this.platform.is('android')){
          this.jPushPlugin.clearAllNotification();
          resolve('ok')
        }else {
          reject('clearAllNotification 方法只支持android平台');
        }
      }else {
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
