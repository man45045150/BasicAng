import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `
    <h2>{{ "Title: " + title }}</h2>
    <h2>{{ courses.length }} Courses</h2>
    <img [src]="imageUrl" />
    <ul>
      <li *ngFor="let course of courses">
        {{course}}
      </li>
    </ul>
    <table>
      <tr>
        <td [attr.colspan] = "colspan"></td>
      </tr>
    </table>
    <div (click)="onDivClicked()">
      <button class="btn btn-primary" [class.active]="isActive" (click)="onSave($event)">Submit</button>
    </div>
    <button class="btn btn-primary" [ngClass]="{active:isActive}">Test</button>
    <button [style.background]="isActive ? 'blue':'red'">Hello</button>
    <input #email (keyup.enter)="onKeyUp(email.value)">
    <input [(ngModel)]="address" />
    {{address}}
  `,
  styles: []
})
export class CoursesComponent implements OnInit {

  title = 'List of courses';
  imageUrl = 'http://lorempixel.com/400/200';
  courses;
  colspan = 2;
  // two way binding FormsModule
  address='160 Ladproa34';
  //add DOM Object
  //Class Binding
  isActive = true;
  
  // Logic for calling an HTTP service

  constructor(private service:CoursesService) {
    this.courses = this.service.getCourses();
  }
  //event Bubbing tree
  onDivClicked(){
    console.log('Div was clicked');
  }
  onSave($event){
    $event.stopPropagation();
    console.log("Button was clicked",$event);
  }
  onKeyUp(email){
      console.log("Enter was pressed",email);
  }


  ngOnInit() {
    
  }

}
