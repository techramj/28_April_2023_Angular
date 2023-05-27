import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Promise1Component } from './promise1/promise1.component';
import { Promise2Component } from './promise2/promise2.component';
import { Promise3Component } from './promise3/promise3.component';
import { Promise4Component } from './promise4/promise4.component';
import { Observable1Component } from './observable1/observable1.component';
import { Observable2Component } from './observable2/observable2.component';
import { Observable3Component } from './observable3/observable3.component';
import { Observable4Component } from './observable4/observable4.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    Promise1Component,
    Promise2Component,
    Promise3Component,
    Promise4Component,
    Observable1Component,
    Observable2Component,
    Observable3Component,
    Observable4Component,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
