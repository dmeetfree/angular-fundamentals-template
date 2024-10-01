import { Component, Input } from "@angular/core";
import {
  LoginFormComponent,
  RegistrationFormComponent,
} from "@app/shared/components";

@Component({
  selector: "app-auth",
  standalone: true,
  imports: [LoginFormComponent, RegistrationFormComponent],
  templateUrl: "./auth.component.html",
  styleUrl: "./auth.component.css",
})
export class AuthComponent {
  isLogin: boolean = true;

  registrationHandler(): void {
    this.isLogin = false;
  }

  signInHandler(): void {
    this.isLogin = true;
  }
}
