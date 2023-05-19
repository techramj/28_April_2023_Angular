# One
        Create two component Person and Employee.
        In person component create property person as object
        person{name,age,nationality}
        display the detail

        In the employee component, add three properties
        id,name,salary
        display the details of 3 different employees

        Hint:
        <app-employee id="1" name="Jay"></app-employee>

        ng new assignement-one
        cd assignement-one
        ng g c person
        ng g c employee

        install the bootstrap

           
# Two
  create the project assignment-02
  create 3 componenet 
  comp-a as element selector
  comp-b as property selector
  comp-c as class selector

  call this component on selector-example component.

  call selector-example component in app component.


  create person and people component.
  
  call app-people in app-component.

  call app-person in people.html

  solution:
  step 1: 
    ng new <project-name>
    cd <project-name>

   step 2: add bootstrap
    npm install --save bootstrap@3

    add the path of bootstrap in angular.json in style properties
    "node_modules/bootstrap/dist/css/bootstrap.min.css"

   step 3: add componenet
   ng g c comp-a
   ng g c comp-b
   ng g c comp-c

  

# Three
 create  two component
 component1: servers
   list of servers
   call the server component from the servers

   add two button Add Server and Delete Server


 componenet 2: server
   serverName
   serverStatus


# Four
  component: ButtonCounter
  Button=> Click ME
  <p>You clicked <click count> times.</p>


  component: Banner
  <p>Congratulation!, You clicked button 10 Times. Eligible for Silver Batch</p>
  <p>Congratulation!, You clicked button 20 Times. Eligible for Golden Batch</p>
  <p>Congratulation!, You clicked button 30 Times. Eligible for Platinum Batch</p>


  app.component
  <app-banner>
  <app-button-counter>
______________________________________________________________________________________
output:

  Congratulation!, You clicked button 19 Times. Eligible for Silver Batch.
  BUTTON
  You clicked 19 times.

  ----------------------------------------------------------------------------

  Congratulation!, You clicked button 20 Times. Eligible for Golden Batch.
  BUTTON
  You clicked 20 times.

  App.comp.html
    <button>Click Me</button>
     <app-banner></>
     <app-button-counter></>


    ButtonCounter.html

    ButtonCounter.ts
       buttonCounter;


    Banner.html

    Banner.ts
     

# Five

      Button-counter

      Banner

      Button-Banner
        <app-banner>
        <app-button-counter>
        
        
      app-compoenent
        <app-button-banner></app-button-banner>


# Six
    servers
      servers=[];
      Add Server(button)

      for{
        <app-server> </app-server>
      }

    server
       Name
       status


    servers-example-component
    servers = [
      {name:'', status:'online'}
    ];

    <app-servers>


# Seven
  
  /server-example

  /button-banner

  /wrong-url => call page_not_found component
                <button>GO To Home Page</button>

                create the link and redirect to home page

  add the navbar and create link for homepage,server-example,button-banner


  QueryParam example  