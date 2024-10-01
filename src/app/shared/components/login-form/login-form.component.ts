import { Component, ViewChild, output } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { ButtonComponent } from "../button/button.component";
import { CommonModule } from "@angular/common";
import { Login } from "@app/services/login/login";
import { EmailValidatorDirective } from "@app/shared/directives/email.directive";

@Component({
  selector: "app-login-form",
  standalone: true,
  imports: [
    ButtonComponent,
    EmailValidatorDirective,
    CommonModule,
    FormsModule,
  ],
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
})
export class LoginFormComponent {
  @ViewChild("loginForm") public loginForm!: NgForm;

  onRegistration = output<void>();

  onLogin = output<Login>();

  isSubmitted = false;

  login = new Login("", "");

  onSubmitClick(): void {
    this.isSubmitted = true;

    if (this.loginForm.valid) {
      this.onLogin.emit(this.login);
    }
  }

  onRegistrationClick(): void {
    this.onRegistration.emit();
  }
}
