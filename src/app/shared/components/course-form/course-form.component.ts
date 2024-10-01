import { Component } from "@angular/core";
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import {
  FaIconLibrary,
  FontAwesomeModule,
} from "@fortawesome/angular-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: "app-course-form",
  standalone: true,
  imports: [ButtonComponent, FontAwesomeModule, ReactiveFormsModule],
  templateUrl: "./course-form.component.html",
  styleUrls: ["./course-form.component.scss"],
})
export class CourseFormComponent {
  constructor(
    public fb: FormBuilder,
    public library: FaIconLibrary
  ) {
    library.addIconPacks(fas);
  }
  courseForm: FormGroup = this.fb.group({
    title: ["", [Validators.required]],
    description: ["", [Validators.required]],
    duration: [0, [Validators.required]],
    author: [""],
    authors: this.fb.array([this.fb.control("Author 1")]),
    courseAuthors: this.fb.array([this.fb.control("Author 2")]),
  });

  get title(): FormControl<string> {
    return this.courseForm.get("title") as FormControl<string>;
  }

  get description(): FormControl<string> {
    return this.courseForm.get("description") as FormControl<string>;
  }

  get duration(): FormControl<number> {
    return this.courseForm.get("duration") as FormControl<number>;
  }

  get authors(): FormArray<AbstractControl<string>> {
    return this.courseForm.get("authors") as FormArray;
  }

  get courseAuthors(): FormArray<AbstractControl<string>> {
    return this.courseForm.get("courseAuthors") as FormArray;
  }

  onSubmitClick(): void {

  }
  onCreateAuthorClick(): void {

  }
  onAddAuthorClick(authorName: string): void {
    const index = this.authors.controls.findIndex(control => control.value === authorName);

    if (index !== -1) {
      this.authors.removeAt(index);
    }

    this.courseAuthors.push(this.fb.control(authorName) as AbstractControl<string>);
  }
  
  onRemoveAuthorClick(authorName: string): void {
    const index = this.courseAuthors.controls.findIndex(control => control.value === authorName);

    if (index !== -1) {
      this.courseAuthors.removeAt(index);
    }

    this.authors.push(this.fb.control(authorName) as AbstractControl<string>);
  }
}
