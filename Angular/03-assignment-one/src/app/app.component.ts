import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '03-assignment-one';
  age = 10;

  empId:number =1;
  firstName:string = 'Jack';
  salary:number = 5000;

  empOne = {id:2,name:'Ajay',salary:9999};
}
