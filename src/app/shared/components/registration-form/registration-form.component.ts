import { Component, output } from "@angular/core";
import { FormGroup, FormControl, ReactiveFormsModule, Validators, AbstractControl } from "@angular/forms";
import { ButtonComponent } from "../button/button.component";
import { Registration, Login } from "@app/services/login/login";
import { emailValidator } from "@app/shared/directives/email.validators";

@Component({
  selector: "app-registration-form",
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule],
  templateUrl: "./registration-form.component.html",
  styleUrls: ["./registration-form.component.scss"],
})
export class RegistrationFormComponent {
  //@Input
  registration: Registration = new Registration("", new Login("", ""));

  onSignIn = output<void>();

  onCreateAnAccount = output<Registration>();

  isSubmitted = false;

  registrationForm: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(6)]),
    email: new FormControl("", [Validators.required, emailValidator]),
    password: new FormControl("", [Validators.required]),
  });

  nameControl = this.registrationForm.get('name') as AbstractControl<string>;

  emailControl = this.registrationForm.get('email') as AbstractControl<string>;

  passwordControl = this.registrationForm.get('password') as AbstractControl<string>;

  onSignInClick(): void {
    // Option we could use route navigation
    this.onSignIn.emit(); 
  }

  onSubmitClick() {
    this.isSubmitted = true;

    if (this.registrationForm.invalid) return;

    const formValue = this.registrationForm.value;

    this.registration = new Registration(
      formValue.name,
      new Login(formValue.email, formValue.password)
    );

    this.onCreateAnAccount.emit(this.registration);

    console.log(this.registration);
  }
}
