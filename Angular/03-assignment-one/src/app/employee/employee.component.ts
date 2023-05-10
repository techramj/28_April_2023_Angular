import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent  {
   @Input() id:number = 0;
   @Input()name:string='';
   @Input()salary:number = 0;






}
