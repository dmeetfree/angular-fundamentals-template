import { Component } from "@angular/core";
import {
  ButtonComponent,
  CourseFormComponent,
  HeaderComponent,
  InfoComponent,
  RegistrationFormComponent,
  SearchComponent,
} from "./shared/components";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NotAuthorizedGuard } from "./auth/guards/not-authorized.guard";
import { CoursesService } from "./services/courses.service";
import { CoursesStoreService } from "./services/courses-store.service";
import { AuthorizedGuard } from "./auth/guards/authorized.guard";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthComponent } from "./features/auth/auth.component";
import { RouterOutlet, RouterLinkActive, RouterLink } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    HeaderComponent,
    ButtonComponent,
    InfoComponent,
    CommonModule,
    AuthComponent,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RegistrationFormComponent,
    CourseFormComponent,
    SearchComponent,
    AuthComponent,
    RouterOutlet,
    RouterLinkActive,
    RouterLink
  ],
  providers: [
    AuthorizedGuard,
    NotAuthorizedGuard,
    CoursesService,
    CoursesStoreService,
  ],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "courses-app";

  onOpenLogin() {
    
  }
}
