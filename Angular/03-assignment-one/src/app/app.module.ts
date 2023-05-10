import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { EmployeesComponent } from './employees/employees.component';
import { SampleComponent } from './sample/sample.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpComponent } from './emp/emp.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    EmployeesComponent,
    SampleComponent,
    EmployeeComponent,
    EmpListComponent,
    EmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
