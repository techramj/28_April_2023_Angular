import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpCreateComponent } from './emp-create/emp-create.component';
import { EmpEditComponent } from './emp-edit/emp-edit.component';

const routes: Routes = [
  {path:"emp", component:EmpListComponent},
  {path:"add-emp",component:EmpCreateComponent},
  {path:"edit-emp/:id", component:EmpEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
