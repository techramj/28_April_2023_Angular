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
