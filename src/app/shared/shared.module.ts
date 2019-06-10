import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { InputComponent } from '../user/modal-add-user/input/input.component';
import { FilterPipe } from '../filter.pipe';
import { MinNumberValidatorDirective } from '../min-number-validator.directive';

@NgModule({
  declarations: [
    InputComponent,
    FilterPipe,
    MinNumberValidatorDirective
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    InputComponent,
    FilterPipe,
    MinNumberValidatorDirective
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
  ],
})
export class SharedModule { }