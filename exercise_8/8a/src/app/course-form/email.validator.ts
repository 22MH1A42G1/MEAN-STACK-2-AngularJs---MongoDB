import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator, ValidationErrors } from '@angular/forms';
@Directive({
    selector: '[validateEmail]', 
    providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => EmailValidator), multi: true },
    ],
})
export class EmailValidator implements Validator { 
    validate(control: AbstractControl): ValidationErrors | null {
        const value = control && control.value ? String(control.value) : '';
        const emailRegexp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        if (!emailRegexp.test(value)) {
            return { emailInvalid: 'Email is invalid' };
        }
        return null;
    }
}