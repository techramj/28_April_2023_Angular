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


#