import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-observable1',
  templateUrl: './observable1.component.html',
  styleUrls: ['./observable1.component.css']
})
export class Observable1Component implements OnInit {
  ngOnInit(): void {

    const observable = new Observable(sub=>{
      console.log('Inside Observable!');
      setTimeout(() => {
        sub.next('subscibed!!!!');
        sub.next('subscibed again!!!!');
      }, 3000);
    });

    observable.subscribe(data=>{
      console.log(data);
    })
  }

}
