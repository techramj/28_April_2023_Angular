import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { AccountsComponent } from './accounts/accounts.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { LogService } from './services/LogService';
import { AccountService } from './services/account.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    AccountsComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
