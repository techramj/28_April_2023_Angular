import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-observable3',
  templateUrl: './observable3.component.html',
  styleUrls: ['./observable3.component.css']
})
export class Observable3Component  implements OnInit{

  ngOnInit(): void {
    let observable = new Observable<string>(subscribe=>{
      subscribe.next('one');
      subscribe.next('ten');
      subscribe.next('twenty one');
      subscribe.next('fifty five');
      subscribe.next('one hundred');
    });

    /*observable.subscribe(next=>{
      console.log(next);
    });*/

    observable
    .pipe<string>(filter((data)=> data.includes('one')))
    .pipe<string>(map((data)=>data+"!"))
    .subscribe(data=> console.log(data));
  }
}

