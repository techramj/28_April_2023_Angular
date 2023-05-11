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
