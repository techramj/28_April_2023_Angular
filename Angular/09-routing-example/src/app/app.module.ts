import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServersExampleComponent } from './servers-example/servers-example.component';
import { ButtonBannerComponent } from './button-banner/button-banner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { GreetComponent } from './greet/greet.component';
import { FarewellComponent } from './farewell/farewell.component';
import { QueryparamComponent } from './queryparam/queryparam.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ServersExampleComponent,
    ButtonBannerComponent,
    PageNotFoundComponent,
    HomepageComponent,
    HeaderComponent,
    LoginComponent,
    GreetComponent,
    FarewellComponent,
    QueryparamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
