import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent  {

  empList =[
    {id:1, name:'Sam', salary:1000},
    {id:2, name:'Sameer', salary:11000},
    {id:3, name:'Sanju', salary:12000},
    {id:4, name:'Max', salary:13000},
    {id:5, name:'Ajay', salary:14000}
  ];

  addEmployee(){

    let x = Math.random();
    console.log('x=',x);
    let salary = Math.round( x*5000 );
    let i = this.empList.length +1;
    let name = 'Elizabeth-'+i;
    this.empList.push({id:i, name:name,salary:salary});
  }

  removeEmployee(){
    this.empList.pop();
  }

}
