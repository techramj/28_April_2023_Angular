import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventExampleComponent } from './event-example/event-example.component';
import { EventAnotherExampleComponent } from './event-another-example/event-another-example.component';
import { ButtonCounterComponent } from './button-counter/button-counter.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    EventExampleComponent,
    EventAnotherExampleComponent,
    ButtonCounterComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
