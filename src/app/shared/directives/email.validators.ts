import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { EMAIL_VALIDATOR_REGEXP } from "./email.models";

export function emailValidatorFactory(emailRegexp: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null =>
      emailRegexp.test(control.value) ? control.value : { email: "Bad email" };
  }
  
export const emailValidator: ValidatorFn = emailValidatorFactory(EMAIL_VALIDATOR_REGEXP);  