import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DurationPipe } from "./pipes/duration.pipe";
import { CustomDatePipe } from "./pipes/custom-date.pipe";
import { EmailValidatorDirective } from "@shared/directives/email.directive";

const components = [DurationPipe, CustomDatePipe, EmailValidatorDirective];

@NgModule({
  declarations: [components],
  imports: [CommonModule, FontAwesomeModule, FormsModule, ReactiveFormsModule],
  exports: [components],
})
export class SharedModule {}
