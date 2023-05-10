import { Component } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent  {

   people = [
    {firstName:'Jay', age:''},
    {firstName:'Jaya', age:''},
    {firstName:'Jayant', age:60},
    {firstName:'Jatayu', age:1000},
   ]


}
