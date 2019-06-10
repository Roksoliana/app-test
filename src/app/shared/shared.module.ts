import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { InputComponent } from '../user/modal-add-user/input/input.component';
import { FilterPipe } from '../filter.pipe';

@NgModule({
  declarations: [
    InputComponent,
    FilterPipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    InputComponent,
    FilterPipe
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
  ],
})
export class SharedModule { }