import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent {

 @Input() emp:{id:number,name:string,salary:number} = {id:0, name:'', salary:0};


 updateSalary(num:number){
  console.log(num);
  this.emp.salary = num;
 }

}
