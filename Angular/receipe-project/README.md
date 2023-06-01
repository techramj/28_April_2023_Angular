Step 1:
 Create the project:
 feature of the app:

 shopping list                 Recipe Book


  header
     header.typescprit

 ng g c  recipes 
 ng g c recipes/recipe-list  --skip-tests 
 ng g c recipes/recipe-detail --skip-tests 
 ng g c recipes/recipe-list/recipe-item --skip-tests 

 shoping list
 ---------------
 ng g c shopping-list
 ng g c  shopping-list/shopping-edit --spec false


 model: model is simply the typescript file.

 step  2: create recipe model in recipes

 step 3: add the recipe[] in the reciepe-list

 setp 4: details

 step 5: create the model ingredient inside shared folder app/shared


 ==============================================================================================================================




<!-- App component html -->
<app-header></app-header>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <app-recipes></app-recipes>
            <app-shoping-list></app-shoping-list>
        </div>
    </div>
</div>




<!-- recipes compoenent html -->

<div class="row">
    <div class="col-md-5">
        <app-recipe-list></app-recipe-list>
    </div>
    <div class="col-md-7">
        <app-recipe-detail></app-recipe-detail>
    </div>
</div>


<!-- recipe-list html -->
<app-recipe-item></app-recipe-item>

<!-- shopping list compoenent html -->
<div class="row">
    <div class="col-xs-10">
        <app-shopping-edit ></app-shopping-edit>
        <hr>
        <p>List details</p>
    </div>
</div>


<!-- header html -->
<nav class="navbar navbar-default">
    <div class="container-fluid">
        <div class="navbar-header">
            <a href="#" class="navbar-brand">Recipe Book</a>
        </div>

        <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
                <li><a href="#">Recipes</a></li>
                <li><a href="#">Shopping List</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" role="button">
                        Manage<span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu">
                        <li><a href="#">Save Data</a></li>
                        <li><a href="#">Fetch List</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>


<!-- Creaet the model recipe model-->
export class Recipe{
    public name:string;
    public description:string;
    public  imagepath:string;
  
    constructor(name:string, desc:string, imagePath:string){
      this.name = name;
      this.description = desc;
      this.imagepath = imagePath;
    }
  
  }
<!---------------------------------------------------------------------->
<!--Recipe-detail.component.html-->
<div class="row">
    <div class="col-xs-12">
      <img src="" alt="" class="img-responsive">
    </div>
</div>

<div class="row">
   <div class="col-xs-12">
      <h1>Recipe Name</h1>
   </div>
</div>

<div class="row">
  <div class="col-xs-12">
      <div class="btn-group">
        <button class="btn btn-primary dropdown-toggle">
          Manage Recipe <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
          <li><a href="#">To Shopping List</a></li>
          <li><a href="#">Edit Recipe</a></li>
          <li><a href="#">Delete Reciope</a></li>
        </ul>
      </div>
  </div>
</div>
<div class="row">
  <div class="col-xs-12">
    description
  </div>
</div>
<div class="row">
  <div class="col-xs-12">
    Ingredients:
  </div>
</div>


<!-----------------------shoping list----------------------------------------------->
<!-- HTML-->
<div class="row">
    <div class="col-xs-10">
        <app-shopping-edit ></app-shopping-edit>
        <hr>
        <ul class="list-group">
          <a href="#" class="list-group-item"
          style="cursor: pointer"
          *ngFor="let ingredient of ingredients">
           {{ingredient.name}} ({{ingredient.amount}} {{ingredient.uom}})
        </a>
        </ul>
    </div>
  </div>
  


<!--shopping-list.componenet.ts TS-->



===========================================================================================================
<!--  shopping edit-->

<div class="row">
  <div class="col-xs-12">
    <form>
       <div class="row col-sm-5 form-group">
          <label for="name">Name</label>
          <input type="text" id="name" class="form-control">
       </div>
       <div class="col-sm-2 form-group">
         <label for="amount">Amount</label>
         <input type="number" id="amount" class="form-control">
       </div>
       <div class="col-sm-2 form-group">
        <label for="uom">UOM</label>
        <input type="text" id="amount" class="form-control">
      </div>
      <div class="row">
        <div class="col-xs-12">
          <button class="btn btn-success btn-space" type="submit" >Add</button>
          <button class="btn btn-danger btn-space" type="button">Delete</button>
          <button class="btn btn-primary btn-space" type="button">Clear</button>
        </div>
      </div>
    </form>
  </div>
</div>

<!--shopping-edit.componenet.ts-->


=================================================================================================
step 10: managing the click button in header.html
          refer to example: 01_step1.
          page to refer: header.component
                         app.component


step 11:on the click of recipe load the details => 02_step2
app.component
    app/recipes.component
         <div class="row">
                <app-recipe-list></app-recipe-list>
                <app-recipe-detail></app-recipe-detail>
        </div>

       recipes/recipe-list
              <div *ngFor="let item of recipes">
                <app-recipe-item [recipe]="item"></app-recipe-item>
              </div>

             recipes/recipe-list/recipe-item.compoenent
                <a href="#" class="list-group-item clearfix">
                    <h4>{{recipe.name}}</h4>
                    <p>{{recipe.description}}</p>
                </a>

        recipes/recipe-details

