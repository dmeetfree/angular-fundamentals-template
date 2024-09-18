import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent {
  registrationForm!: FormGroup;
  // Use the names `name`, `email`, `password` for the form controls.
}
