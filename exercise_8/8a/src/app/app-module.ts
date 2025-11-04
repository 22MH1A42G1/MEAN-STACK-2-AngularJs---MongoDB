import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { EmailValidator } from './course-form/email.validator'; 
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CourseForm } from './course-form/course-form';

@NgModule({
  declarations: [
    App,
    CourseForm,
  ],
  imports: [
    BrowserModule,
    FormsModule
    ,
    EmailValidator
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
