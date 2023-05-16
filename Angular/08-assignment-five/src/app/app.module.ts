import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonCounterComponent } from './button-counter/button-counter.component';
import { BannerComponent } from './banner/banner.component';
import { ButtonBannerComponent } from './button-banner/button-banner.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { ServersExampleComponent } from './servers-example/servers-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonCounterComponent,
    BannerComponent,
    ButtonBannerComponent,
    ServerComponent,
    ServersComponent,
    ServersExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
