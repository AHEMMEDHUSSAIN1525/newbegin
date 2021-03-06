import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FrstComponent } from './frst/frst.component';
import { StartComponent } from './start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    FrstComponent,
    StartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
