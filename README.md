# ionic2-JPush

[![Dependency Status](https://david-dm.org/HsuanXyz/ionic2-jpush.svg)](https://david-dm.org/HsuanXyz/ionic2-jpush)
[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][downloads-url] [![MIT License][license-image]][license-url]

为ionic2调用极光插件提供符合angular2及TS的调用方式

说在前面：如果想使用 ionic-native 的调用方式，可以参考https://github.com/zjcboy/ionic2-jpush-demo

### install
先安装官方的cordova插件 https://github.com/jpush/jpush-phonegap-plugin.git

`$ cordova plugin add jpush-phonegap-plugin --variable APP_KEY=your_jpush_appkey`

在安装本库

`$ npm install ionic2-jpush --save`


### Import module

```
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
...
import { IonJPushModule } from 'ionic2-jpush'

@NgModule({
  declarations: [
    MyApp,
    ...
  ],
  imports: [
    IonJPushModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ...
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

```

### Use
```javascript
import 'rxjs';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
...
import { JPushService } from 'ionic2-jpush'

@Component({
  templateUrl: 'plugins-test.html'

})
export class PluginsTestPage {
  constructor(
    private platform: Platform,
    private jPushPlugin: JPushService
  ) {

        platform.ready().then( () =>{
       
             this.jPushPlugin.openNotification()
               .subscribe( res => {
                 console.log('收到推送');
                 console.log(res)
               });
       
             this.jPushPlugin.receiveNotification()
               .subscribe( res => {
                 console.log('收到推送');
                 console.log(res)
               });
       
             this.jPushPlugin.receiveMessage()
               .subscribe( res => {
                 console.log('收到推送');
                 console.log(res)
               });
       
           })

     }

    /**
    * 注册极光
    */
   init() {
    this.jPushPlugin.init()
    .then(res => alert(res))
    .catch(err => alert(err))
    }

    /**
    * 获取ID
    */
    getRegistrationID() {
     this.jPushPlugin.getRegistrationID()
     .then(res => alert(res))
     .catch(err => alert(err))
     }
     
     /**
     * 设置 setBadge
     * 仅限IOS
     * @param number
     */
     setBadge(number) {
        if (this.platform.is('ios')) {
            this.jPushPlugin.setBadge(number)
            .then(res => alert(res))
            .catch(err => alert(err))
        }
     } 
    
  }

```

# API
| 名称          |  参数 | 返回类型   | 描述 |
| ------------- | ------- | ------- | ----------- |
| init          | 无 | Promise | 注册极光   |
| getRegistrationID       | 无 | Promise | 获取ID  |
| stopPush      | 无 | Promise | 停用推送          |
| resumePush    | 无 | Promise | 恢复推送          |
| isPushStopped | 无 | Promise | 推送是否被停用     |
| setTagsWithAlias | tags:Array<any>,alias:string | Promise | 设置tags和alias     |
| setTags | tags:Array<any>| Promise | 设置tags |
| setAlias | alias:string| Promise | 设置alias |
| setBadge | value:number| Promise | 设置badge 仅 ios |
| setApplicationIconBadgeNumber | value:number| Promise | 设置badge 仅 ios |
| reSetBadge | 无| Promise | 移除badge 仅 ios |
| getApplicationIconBadgeNumber | 无| Promise | 获取badge 仅 ios |
| clearNotificationById | id:number| Promise | 清除指定ID通知 仅 android |
| clearAllNotification | id:number| Promise | 清除所有通知 仅 android |
| openNotification | 无| Observable | 点击通知事件 |
| receiveNotification | 无| Observable | 收到通知事件 |
| receiveMessage | 无| Observable | 收到自定义消息事件 |
| backgroundNotification | 无| Observable | 后台收到通知事件 |

[npm-url]: https://www.npmjs.com/package/ionic2-jpush
[npm-image]: https://img.shields.io/npm/v/ionic2-jpush.svg

[downloads-image]: https://img.shields.io/npm/dm/ionic2-jpush.svg
[downloads-url]: http://badge.fury.io/js/ionic2-jpush

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE
