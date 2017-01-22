# ionic2-JPush
为ionic2调用极光插件提供符合angular2及TS的调用方式

### install
先安装官方的cordova插件

`$ cordova plugin add jpush-phonegap-plugin --variable APP_KEY=your_jpush_appkey`

在安装本库

`$ npm install ionic2-jpush --save`

### use

```javascript
import 'rxjs';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
...
import { JPushService } from 'ionic2-jpush/dist'

@Component({
  templateUrl: 'plugins-test.html',
  providers  : [JPushService]

})
export class PluginsTestPage {
  constructor(
    private platform: Platform,
    private jPushPlugin: JPushService
  ) {
       let openNotification = this.jPushPlugin.openNotification()
         .subscribe( res => {
           console.log(res);
           console.log('收到点击通知事件')
         })


       let receiveNotification = this.jPushPlugin.receiveNotification()
         .subscribe( res => {
           console.log(res)
           console.log('收到通知')
         })

       let receiveMessage = this.jPushPlugin.receiveMessage()
         .subscribe( res => {
           console.log(res)
           console.log('收到自定义消息')
         })

       let backgroundNotification = this.jPushPlugin.backgroundNotification()
         .subscribe( res => {
           console.log(res)
           console.log('收到后台通知')
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
# Environment
```
Cordova CLI: 6.4.0
Ionic Framework Version: 2.0.0-rc.5
Ionic CLI Version: 2.1.18
Ionic App Lib Version: 2.1.9
Ionic App Scripts Version: 1.0.0
OS: macOS Sierra
Node Version: v6.9.2
Xcode version: Xcode 8.2.1 Build version 8C1002
```
