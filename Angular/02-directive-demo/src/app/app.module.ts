import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PersonsComponent } from './persons/persons.component';
import { SelectorAComponent } from './selector-a/selector-a.component';
import { SelectorBComponent } from './selector-b/selector-b.component';
import { SelectorCComponent } from './selector-c/selector-c.component';
import { SampleComponent } from './sample/sample.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonsComponent,
    SelectorAComponent,
    SelectorBComponent,
    SelectorCComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
