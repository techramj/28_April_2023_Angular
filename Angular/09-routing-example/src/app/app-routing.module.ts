import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServersExampleComponent } from './servers-example/servers-example.component';
import { ButtonBannerComponent } from './button-banner/button-banner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { GreetComponent } from './greet/greet.component';
import { FarewellComponent } from './farewell/farewell.component';
import { QueryparamComponent } from './queryparam/queryparam.component';

const routes: Routes = [
  {path:'servers', component: ServersExampleComponent},
  {path:'button-banner', component: ButtonBannerComponent},
  {path:'home', component:HomepageComponent},
  {path:'login', component:LoginComponent},
  {path:'greet/:name', component:GreetComponent},
  {path:'bye', component:FarewellComponent},
  {path:'query-example', component: QueryparamComponent},
  {path:'', redirectTo:'login',  pathMatch:'full'},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
