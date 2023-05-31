# Install node js
	  to verify node js is installed or not, run the below command
	  node -v
	  npm -v

	  Node js installer link: https://nodejs.org/en/download?utm_source=blog

# Install angualar
	  https://angular.io/cli
	  excute the below command
	  npm install -g @angular/cli

	  to check angular is installed or not
	  ng version

# To create the project workspace
	  ng new <project name>
	  ng new 01-my-first-project

# run the project
    cd project_name (before running ng serve, you should be in the project)
  	ng serve

# stop the project
	   go the terminal/cmd
	   ctrl+c

# project structure
	  index.hmtl      => angular app rendered into
	  src             => most of the changes will be done in this project.
	  src/app         => all the componenet will be within this folder
	  assets          => images, properties file
	  environments    => profiling
	  polyfills.ts    => contain packages used for browser compatibility
	  style.css       =>  global style
	  app.component   => this the main componenet which is loaded
	  app-routing.module.ts => we can write the  logic of routing



# add pluging in visual studio code
	  press Ctrl+Shift+X
	  install the below packages
	  Angular essentials
	  Angular Langualge service

	  type: typescript
	  Typescript importer

	  To test emmet is avialable
	  type div.abc and press tab then it will convert as below
	  <div class="abc"></div>


# few command of cmd
	  cd folder_name => go inside the folder
	  cd ..           => move to the parent folder
	  cls             => clear the screen
  

 
# Component
		ng generate component <component-name>
		ng g c <component-name>

		eg: ng g c person

		CREATE src/app/person/person.component.html 
		CREATE src/app/person/person.component.spec.ts
		CREATE src/app/person/person.component.ts
		CREATE src/app/person/person.component.css
		UPDATE src/app/app.module.ts

		# person.component.ts
		@Component({
		selector: 'app-person',
		templateUrl: './person.component.html',
		styleUrls: ['./person.component.css']
		})


# install bootstrap
    step 1:
		npm install --save bootstrap@3
	step 2: add the path in angular.json file
		"styles": [
				"node_modules/bootstrap/dist/css/bootstrap.min.css",
				"src/styles.css"
				],


# Derictive demo  (structural directive)
    *ngIf
	*ngFor
 	refer exp -02

	step 1: create two component
			person
			persons


# Selector
	1. Element Selector
		@Component({
		selector: 'app-selector-a',
		templateUrl: './person.component.html',
		styleUrls: ['./person.component.css']
		})

		<app-selector-a></app-selector-a>

	2. property Selector
		@Component({
		selector: '[app-selector-a]',
		templateUrl: './person.component.html',
		styleUrls: ['./person.component.css']
		})

		<div app-selector-a></div>

		
	
	3. Class Selector
		@Component({
		selector: '.app-selector-a',
		templateUrl: './person.component.html',
		styleUrls: ['./person.component.css']
		})

		<div class='app-selector-a'></div>



Binding: (05-binding-example)
   Data binding means communication

   ts										html(Template)
   person.component.ts						person.comp.html	
								
                    ---------------------->	
					string interpolation {{}}
					property binding  [property]='data'
	
     name = 'Jack';								{{name}}


	                <--------------------------- 
					event binding (event)='expresion'



					<--------------------------------->
					   two way binding
					   [(ngMode)]='data'                  


		step 1: create new project
			ng new 05-binding-example
			cd 05-binding-example

		step 2: install bootstrap
		    npm install --save bootstrap@3
			add the path of boostrap in angular.json



App.component.html
<app-banner [countButtonInBanner]='count'>
  button
<app-button-counter  [counter]='count'>
App.component.ts
count:0

Button-counter
 
   <p>{{Button count}}</p>
ts:
 @Input() counter:1


Banner
<p *ngIf = "count>=10 && count<20">Congratulation!, You clicked button 10 Times. </p>
<p *ngIf = "count>=20 && count<30">Congratulation!, You clicked button 20 Times. </p>
<p *ngIf="count>=30">Congratulation!, You clicked button 30 Times. </p>
ts
 countButtonInBanner










app.component.ts
    test1(){
	  this.title ="Output Decorator example!";
	}
	
	
	test2(str:string){
		this.title = str;
	}




app.compoenent.html
		<app-event-example 
			(event1)="test1()"
		></app-event-example>
		
		<app-another-event-example
			(event2)="test2($event)"
		></another-event-example>





		comp1: event-example
			<button class="btn btn-primary" (click)="onButtonClick()">Event Example</button>
		
		 event-example.ts
		 @Output() event1:EventEmmiter<any> = new EventEmmiter<>();
		 
		 onButtonClick(){
			this.event1.emit();
		 }
		
		
		
		
		comp2: another-event-example
		 <button class="btn btn-primary" (click)="onButtonClick()">Another Event Example</button>
		 
		 
		 another-event-example.ts
		  title:string ="Another event example ";
		  @Output() event2:EventEmmiter<string> = new EventEmmiter<string>();
		  
		  onButtonClick(){
			this.event2.emit(this.title);
		 }


# Routing: 

    Routing in angualar allows users to create the SPA with multiple views and allow to navigate between them. 

	Users can switch between the views without losing the application state and properties.

	

step 1: go to app-routing.module.ts

  server-example  /servers
  button-banner  /button-banner

step 2: add the path mapped with component in Routes array

		const routes: Routes = [
			{path:'servers', component: ServersExampleComponent},
			{path:'button-banner', component: ButtonBannerComponent}
		];

step 3: for the wrong url, if you want display specific page then add the below mapping in Routes array
    {path:'**', component:PageNotFoundComponent}

step 4: If you want the base url to redirect to homepage then add the below mapping in Routes array

usecase: pathvaraible
  /greet/:name


usercase:navigate to another page programitically
refer to example 08/greet component




# Lifecycle
  1.  ngOnChanges => called after a bound input property changes.
   
		app.componenet.ts
			name = 'abc';
		app.componenet.html
			<app-server [servername]='name'  ></app-server>

		server.html
		    <a routerLink="/button-banner>
		server.ts
			@Input() servername:string = '';

			 ngOnChanges(changes: SimpleChanges): void {
				console.log('ngOnChanges called ',changes);
			}

 2. ngOnInit
      app-routing.module.ts
	  {"path","/server", componenet: }
	  {"path","/button-banner", componenet: }

	  app.component.html
	    <a href="/server">Server Example</a>
		<a routerLink="/server">Server Example</a>

	ng g c page1
	ng g c page2





# create the dummy database
		step 1: create the folder eg. 13_emp_db_server
		        mkdir 13_emp_db_server
		step 2: open the command prompt (path will be the folder path)
		        cd 13_emp_db_server
		step 3: execute the below command
		        npm init -y
		step 4: create the json file(eg emp.json)
		step 5: add arrays of an object employees
		        eg:
				{
				"employees": [
						{
							"id":1,
							"name": "Tony",
							"email" : "tony@gmail.com",
							"salary" : 5000
						},
						{
							"id":2,
							"name": "Sam",
							"email" : "sam@gmail.com",
							"salary" : 8000
						}
					]
				} 


		step 6: npm install -g json-server
		step 7: add the below line in package.json scripts object
		        "start" : "npx json-server --watch emp.json",n

		step 8: excute below command
		        npm start


		step 9: open postman
		fetch all data:
			url: http://localhost:3000/employees
			method: get
		
		fetch particular data
		    url: http://localhost:3000/employees/:id
			method: get

		add one record
		     url: http://localhost:3000/employees
			 method: post
			 body: (raw(json))
			 {
				"name": "Priyanka",
				"email": "priyanka@gmail.com",
				"salary": 17000
			 }

		delete record
		    url: http://localhost:3000/employees/:id
			method: delete

	    update record
		    url: http://localhost:3000/employees/:id
			method: put
			body: update data in json format
			{
				"id": 3,
				"name": "John",
				"email": "john@gmail.com",
				"salary": 7000
			}



# Forms
		step 1: import FormsModule in app.module.ts 
		step 2: register using ngModel
		
							



