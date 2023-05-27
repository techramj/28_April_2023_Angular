import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-observable2',
  templateUrl: './observable2.component.html',
  styleUrls: ['./observable2.component.css']
})
export class Observable2Component implements OnInit{

  ngOnInit(): void {
      let observable =new Observable(subscribe=>{
        let num = Math.round(Math.random() * 10);
        console.log("Random number generated=",num);
        setTimeout(() => {
          if(num>=5){
            subscribe.next('subscribed. Num='+num);
          }else{
            subscribe.error('Invalid number. num='+ num);
          }
        }, 3000);
      });

      observable.subscribe(next=>{
        console.log(next);
      },err=>{
        console.log('Error',err);
      });
  }
}
