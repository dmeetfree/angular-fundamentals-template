import { Routes } from "@angular/router";
import {
  CourseCardComponent,
  CourseFormComponent,
  LoginFormComponent,
  PageNotFoundComponent,
  RegistrationFormComponent,
} from "@app/shared/components";

export const appRouters: Routes = [
  { path: "login", component: LoginFormComponent },
  { path: "registration", component: RegistrationFormComponent },
  { path: "courses/add", component: CourseFormComponent },
  { path: "courses/:id", component: CourseCardComponent },
  { path: "courses/edit/:id", component: CourseFormComponent },
  { path: "**", component: PageNotFoundComponent },
];
