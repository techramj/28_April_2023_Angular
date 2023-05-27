import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise2',
  templateUrl: './promise2.component.html',
  styleUrls: ['./promise2.component.css']
})
export class Promise2Component implements OnInit {


  ngOnInit(): void {
     const promise = new Promise((resolve, error)=>{
       let num = Math.round(Math.random()*10);
       console.log('Random number generated ='+num);
       setTimeout(() => {
        if(num>=5){
          resolve('Promise completed. Num= '+num);
        }else{
         //throw exception
         error('Invalid number: '+num);
        }
       }, 3000);

     });

     promise.then(data=>{
      console.log('data',data);
     }).catch(err=>{
      console.log('error',err);
     });
  }
}
