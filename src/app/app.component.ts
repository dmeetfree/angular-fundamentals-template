import { Component } from '@angular/core';
import { ButtonComponent, HeaderComponent, InfoComponent } from './shared/components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotAuthorizedGuard } from './auth/guards/not-authorized.guard';
import { CoursesService } from './services/courses.service';
import { CoursesStoreService } from './services/courses-store.service';
import { AuthorizedGuard } from './auth/guards/authorized.guard';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    ButtonComponent,
    InfoComponent,
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule, 
    FontAwesomeModule
  ],
  providers: [
    AuthorizedGuard, 
    NotAuthorizedGuard, 
    CoursesService, 
    CoursesStoreService
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'courses-app';
}
