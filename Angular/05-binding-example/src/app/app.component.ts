import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [
    {name:'dbserver', status:'online'},
    {name:'Frontend Server', status:'online'},
    {name:'Backend Server', status:'offline'},
   ];

}
