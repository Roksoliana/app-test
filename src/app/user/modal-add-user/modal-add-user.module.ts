import { NgModule } from '@angular/core';
import { ModalAddUserComponent } from './modal-add-user.component';
import { modalAction, modalActionConfig } from './action/action.constants';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ModalAddUserComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ModalAddUserComponent
  ],
  providers: [{ provide: modalAction, useValue: modalActionConfig }],
})
export class ModalAddUserModule { }
