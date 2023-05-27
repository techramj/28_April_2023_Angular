import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import {filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-observable4',
  templateUrl: './observable4.component.html',
  styleUrls: ['./observable4.component.css']
})
export class Observable4Component implements OnInit, OnDestroy {
  subscribtion: Subscription = new Subscription();
  ngOnInit(): void {

    let observable = new Observable<number>(subscribe=>{
      let count = 0;
      setInterval(()=>{
        subscribe.next(count++);
      },1000);
    });

    this.subscribtion = observable.subscribe(data=>console.log(data));

  }

  ngOnDestroy(): void {
      console.log('Destroy method called!!!!');
      this.subscribtion.unsubscribe();
  }




}
