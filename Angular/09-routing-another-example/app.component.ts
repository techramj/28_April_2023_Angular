import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message:string = 'Bye';


  changeMsg(){
    console.log('changeMsg called');
    this.message ="Good night";
  }
}
