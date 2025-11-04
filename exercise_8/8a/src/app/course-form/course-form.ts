import { Component } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-form',
  standalone: false,
  templateUrl: './course-form.html',
  styleUrl: './course-form.css',
})
export class CourseForm {
  course: Course = new Course(1, 'Angular 2', '4 days', 'james@gmail.com'); 
  submitted = false;
  onSubmit() { this.submitted = true; }

}
