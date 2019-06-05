import { NgModule } from '@angular/core';

import { OneUserComponent } from './one-user.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    OneUserComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    OneUserComponent
  ]
})
export class OneUserModule { }
