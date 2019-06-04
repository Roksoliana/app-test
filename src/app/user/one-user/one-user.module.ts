import { NgModule } from '@angular/core';
import { OneUserComponent } from './one-user.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    OneUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    OneUserComponent
  ]
})
export class OneUserModule { }
