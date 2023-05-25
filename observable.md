# Example1
    import { Component, VERSION, OnInit } from '@angular/core';
    import { typeSourceSpan } from '@angular/compiler';

    @Component({
      selector: 'my-app',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css']
    })
    export class AppComponent implements OnInit{
      name = 'Angular ' + VERSION.full;

      ngOnInit() : void{
        this.functionExample2();
      }

      functionExample2(){
        console.log('functionExample2 start');
        setTimeout(()=>{
           console.log('timeout completed!!!!')
           this.name = 'Jack';
        }, 5000);
        console.log('functionExample2 end....');
      }

      functionExample1(){
        console.log('functionExample1 start');
        this.sleep(3);
        this.name = 'Jack';
        console.log('functionExample1 end....');
      }

      sleep(timeInSecond:number){
        let date = Date.now();
        let currentDate = null;
        do{
          currentDate = Date.now();
        }while(currentDate-date < timeInSecond *1000);
      }

      //promise or Obserable
    }

    //ng g c promise-example1
    //ng g c promise-example2
    //ng g c promise-example3
    //ng g c promise-example4


    //ng g c obserable-example1
    //ng g c obserable-example2
    //ng g c obserable-example3
    //ng g c obserable-example4

    //app-routing.module.ts
    /*

    {path:'promise1', componenet:},
    {path:'promise2', componenet:}
    {path:'promise3', componenet:}
    {path:'promise4', componenet:}

    {path:'obserable1', componenet:}
    {path:'obserable2', componenet:}
    {path:'obserable3', componenet:}
    {path:'obserable4', componenet:}



    */
# Example (promise example 1)
        import { Component, OnInit } from '@angular/core';

        @Component({
          selector: 'my-app',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        })
        export class AppComponent implements OnInit {
          name = 'Angular ';

          ngOnInit(){
            this.name = 'Jack';
            console.log('init method called!!!!');
            const promise1 = new Promise(resolve=>{
              setTimeout(()=>{
                resolve('promised called!!!');
                this.name = 'Sam';
              }, 5000);
            });

            console.log('promise object created!!!!');
            promise1.then(res=>{
              console.log('res= ',res);
            });

            console.log('init method end!!!!');

          }

        }

