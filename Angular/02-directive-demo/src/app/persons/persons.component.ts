import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent{
  people:{name:string, age:string, nationality:string}[] = [
    {name:'jack', age:'23', nationality:'UK'},
    {name:'jackie', age:'', nationality:'US'},
    {name:'jackson', age:'23', nationality:'EU'},
    {name:'jessica', age:'23', nationality:''},
    {name:'sam', age:'', nationality:'US'}
  ];

}
