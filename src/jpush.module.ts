/**
 * Created by hsuanlee on 2017/3/5.
 */
import { NgModule }           from '@angular/core';

import { JPushService } from './plugin-jpush.service'

@NgModule({
    providers:    [ JPushService ],
})
export class IonJPushModule { }