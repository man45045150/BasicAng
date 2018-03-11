import { CoursesService } from './courses/courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { PipeComponent } from './pipe/pipe.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    PipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  //providers is Singleton concept
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
