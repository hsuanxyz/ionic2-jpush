/**
 * Created by hsuanlee on 2017/3/5.
 */
import { NgModule }           from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from "ionic-angular";

import { JPushService } from './plugin-jpush.service'

@NgModule({
    imports:      [  IonicModule, CommonModule ],
    providers:    [ JPushService ]
})
export class IonJPushModule { }