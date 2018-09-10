import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { YellowComponent } from './yellow/yellow.component';
import { PulldownComponent } from './shared/pulldown/pulldown.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    YellowComponent,
    PulldownComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
