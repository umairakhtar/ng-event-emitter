import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppchildComponent } from './appchild/appchild.component';
import { Appchild2Component } from './appchild2/appchild2.component';


@NgModule({
  declarations: [
    AppComponent,
    AppchildComponent,
    Appchild2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
