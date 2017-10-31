import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { JPushService } from 'ionic2-jpush'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  _log: string;

  get log(): string {
    return this._log || '';
  }

  set log(m: string) {
    if (!this._log) {
      this._log = '';
    }
    this._log += `${new Date().toLocaleString()}: ${m} \n`
  }

  asyncStack:string[] = [];

  _addStack(name: string) {
    this.asyncStack = Array.from(new Set([...this.asyncStack, name]))
  }

  _rmStack(name: string) {
    const index = this.asyncStack.indexOf(name);
    if (index === -1) return;
    this.asyncStack.splice(index, 1);
  }

  _hasInStack(name: string): boolean {
    return  this.asyncStack.indexOf(name) !== -1
  }

  constructor(private platform: Platform, private jPushPlugin: JPushService) {
    this.log = '进入页面';
    platform.ready().then(() => {
      this.log = '设备准备就绪';
    });

    this.jPushPlugin.openNotification()
    .subscribe(res => {
      alert('点击通知内容');
      console.log(res);
      this.log = '点击通知内容 openNotification';
    });

    this.jPushPlugin.receiveNotification()
    .subscribe(res => {
      alert('收到通知推送');
      this.log = '收到通知推送 receiveNotification';
      console.log(res)
    });

    this.jPushPlugin.receiveMessage()
    .subscribe(res => {
      alert('收到定义消息推送');
      this.log = '收到定义消息推送 receiveMessage';
      console.log(res)
    });

  }

  /**
   * 注册极光
   */
  init() {
    this.jPushPlugin.init()
    .then(res => {
      alert(res);
      this.log = '初始化成功'
    })
    .catch(err => {
      alert(err);
      this.log = '初始化失败'
    })
  }

  /**
   * 推送是否停止
   */
  isPushStopped() {
    this.jPushPlugin.isPushStopped()
    .then(res => {
      alert(res);
      this.log = `查看是否停止 ${res}`
    })
    .catch(err => {
      alert(err);
      this.log = `查看是否停止失败`
    })
  }

  /**
   * 获取ID
   */
  getRegistrationID() {
    this.jPushPlugin.getRegistrationID()
    .then(res => {
      alert(res);
      this.log = `获取ID成功 ${res}`
    })
    .catch(err => {
      alert(err);
      this.log = '获取ID失败'
    })
  }

  /**
   * 停止推送
   */
  stopPush() {
    this.jPushPlugin.stopPush()
    .then(res => {
      alert(res);
      this.log = `停止推送服务成功`
    })
    .catch(err => {
      alert(err);
      this.log = '停止推送服务失败'
    })
  }

  /**
   * 恢复推送
   */
  resumePush() {
    this.jPushPlugin.resumePush()
    .then(res => {
      alert(res);
      this.log = `恢复推送服务成功`
    })
    .catch(err => {
      alert(err);
      this.log = '恢复推送务失败'
    })
  }

  /**
   * 设置别名
   */
  setAlias() {
    this._addStack('setAlias');
    this.jPushPlugin.setAlias({
      sequence: Date.now(),
      alias: 'test_alia'
    })
    .then((res:any) => {
      this.log = `设置别名成功 别名：${res.alias}`;
      this._rmStack('setAlias');
    })
    .catch(err => {
      alert(err);
      this.log = '设置别名失败';
      this._rmStack('setAlias');
    })
  }

  /**
   * 删除别名
   */
  deleteAlias() {
    this._addStack('deleteAlias');
    this.jPushPlugin.deleteAlias({
      sequence: Date.now(),
    })
    .then((res:any) => {
      this.log = `删除别名成功`;
      this._rmStack('deleteAlias');
    })
    .catch(err => {
      alert(err);
      this.log = '删除别名失败';
      this._rmStack('deleteAlias');
    })
  }

  /**
   * 获取别名
   */
  getAlias() {
    this._addStack('getAlias');
    this.jPushPlugin.getAlias({
      sequence: Date.now(),
    })
    .then((res:any) => {
      this.log = `获取别名成功: 别名：${res.alias}`;
      this._rmStack('getAlias');
    })
    .catch(err => {
      alert(err);
      this.log = '获取别名失败';
      this._rmStack('getAlias');
    })
  }

  /**
   * 设置标签
   */
  setTags() {
    this._addStack('setTags');
    this.jPushPlugin.setTags({
      sequence: Date.now(),
      tags: ['tag1', 'tag2']
    })
    .then((res:any) => {
      this.log = `设置 Tags 成功：${res.tags.toString()}`;
      this._rmStack('setTags');
    })
    .catch(err => {
      alert(err);
      this.log = '设置 Tags 失败';
      this._rmStack('setTags');
    })
  }

  /**
   * 添加标签
   */
  addTags() {
    this._addStack('addTags');
    this.jPushPlugin.addTags({
      sequence: Date.now(),
      tags: ['tag4', 'tag5']
    })
    .then((res:any) => {
      this.log = `添加 Tags 成功：${res.tags.toString()}`;
      this._rmStack('addTags');
    })
    .catch(err => {
      alert(err);
      this.log = '添加 Tags 失败';
      this._rmStack('addTags');
    })
  }

  /**
   * 清除所有标签
   */
  cleanTags() {
    this._addStack('cleanTags');
    this.jPushPlugin.cleanTags({
      sequence: Date.now(),
    })
    .then((res:any) => {
      this.log = `清除所有 Tags 成功`;
      this._rmStack('cleanTags');
    })
    .catch(err => {
      alert(err);
      this.log = '清除所有 Tags 失败';
      this._rmStack('cleanTags');
    })
  }

  /**
   * 获取当前绑定的所有标签
   */
  getAllTags() {
    this._addStack('getAllTags');
    this.jPushPlugin.getAllTags({
      sequence: Date.now(),
    })
    .then((res:any) => {
      this.log = `获取当前绑定的所有 Tags 成功：${res.tags.toString()}`;
      this._rmStack('getAllTags');
    })
    .catch(err => {
      alert(err);
      this.log = '获取当前绑定的所有 Tags 失败';
      this._rmStack('getAllTags');
    })
  }


}
