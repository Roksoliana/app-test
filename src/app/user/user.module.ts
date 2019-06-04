import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';

import { OneUserModule } from './one-user/one-user.module';
import { ModalAddUserModule } from '../modal-add-user/modal-add-user.module';
import { modalAction, modalActionConfig } from '../modal-add-user/action/action.constants';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    OneUserModule,
    ModalAddUserModule
  ],
  exports: [
    UserComponent
  ],
  providers: [{ provide: modalAction, useValue: modalActionConfig }],
})
export class UserModule { }
