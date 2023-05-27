import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise1',
  templateUrl: './promise1.component.html',
  styleUrls: ['./promise1.component.css']
})
export class Promise1Component implements OnInit{

  ngOnInit(): void {

    //declare
    const promise = new Promise(resolve=>{
      console.log('Inside promise');
      setTimeout(() => {
        resolve('Promise resolved!!!');
      }, 3000);
    });

    //calling
    promise.then(res => {
      console.log(res);
      //res+"!"
    });

  }

}
