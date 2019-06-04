import { NgModule } from '@angular/core';
import { ModalAddUserComponent } from './modal-add-user.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { modalAction, modalActionConfig } from './action/action.constants';

@NgModule({
  declarations: [
    ModalAddUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
  ],
  exports: [
    ModalAddUserComponent
  ],
  providers: [{ provide: modalAction, useValue: modalActionConfig }],
})
export class ModalAddUserModule { }
