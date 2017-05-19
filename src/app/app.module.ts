import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {MaterialModule} from '@angular/material';

import { AppComponent } from './app.component';
import { NavComponent }  from './components/nav.component';
import { BodyComponent }  from './components/body.component';
import { HidraulicoComponent }  from './components/hidraulico.component';
import { FooterComponent }  from './components/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BodyComponent,
    HidraulicoComponent,
    FooterComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
