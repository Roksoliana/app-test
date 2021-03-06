import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator  } from '@angular/forms';

@Directive({
  selector: '[appMinNumber]',
  providers: [{provide: NG_VALIDATORS, useExisting:
             MinNumberValidatorDirective, multi: true}]
})
export class MinNumberValidatorDirective {
  @Input() appMinNumber: string;
  validate(control: AbstractControl): {[key: string]: any} {
    if (Number(control.value) < Number(this.appMinNumber)) {
        return {minNumber: control.value};
    }
    return null;
  }
}
