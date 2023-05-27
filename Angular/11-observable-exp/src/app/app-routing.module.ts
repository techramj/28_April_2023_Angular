import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Promise1Component } from './promise1/promise1.component';
import { Promise2Component } from './promise2/promise2.component';
import { Promise3Component } from './promise3/promise3.component';
import { Promise4Component } from './promise4/promise4.component';
import { Observable1Component } from './observable1/observable1.component';
import { Observable4Component } from './observable4/observable4.component';
import { Observable3Component } from './observable3/observable3.component';
import { Observable2Component } from './observable2/observable2.component';

const routes: Routes = [
  {path:'promise1', component:Promise1Component},
  {path:'promise2', component:Promise2Component},
  {path:'promise3', component:Promise3Component},
  {path:'promise4', component:Promise4Component},
  {path:'observable1', component:Observable1Component},
  {path:'observable2', component:Observable2Component},
  {path:'observable3', component:Observable3Component},
  {path:'observable4', component:Observable4Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
