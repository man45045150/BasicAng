import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  template: `
    <br/>
    {{ course.title | uppercase | lowercase }}<br/>
    {{ course.students | number }}<br/>
    {{ course.rating | number:'2.2-2' }}<br/>
    {{ course.price | currency:'THB ':true:'4.2-2' }}<br/>
    {{ course.releaseDate | date:'shortDate' }}<br/>
    <br/>
    {{ text | summary : 10 }}
  `,
  styles: []
})
export class PipeComponent implements OnInit {

  course = {
    title :'The Complete Angular Course',
    rating : 4.9745,
    students : 30123,
    price : 1190.95,
    //Datepipe use commonModule
    releaseDate: new Date(2016,3,1) 
  }
  text ='Lorem Ipsum is simply dummy ';
  constructor() { }

  ngOnInit() {
  }

}
