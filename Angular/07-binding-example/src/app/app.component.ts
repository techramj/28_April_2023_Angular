import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '07-binding-example';
  count:number = 0;


  buttonClick(){
    console.log('buttonClick called!!!!!!');
    this.title ="Output Decorator example!";
  }


  test2(str:string){
    this.title = str;
  }

  updateCount(){
    this.count++;
  }
}
