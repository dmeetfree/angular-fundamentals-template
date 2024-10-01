import { Directive } from "@angular/core";
import {
  NG_VALIDATORS,
  Validator,
} from "@angular/forms";
import { emailValidator } from "./email.validators";

@Directive({
  selector: "[emailValidator]",
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidatorDirective,
      multi: true,
    },
  ],
})
export class EmailValidatorDirective implements Validator {
  validate = emailValidator;
}
