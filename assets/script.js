// Global Variables
var buttonEl = document.querySelector("#joke");
var recipeEl = document.querySelector("#recipes");
var jokeArea = document.querySelector(".joke-area");
var recipeArea = document.querySelector(".recipe-area");
var ingreClear = document.querySelector("#ingre-clear");
var saveIngre = document.querySelector("#save-ingredient");
var ingredient = document.querySelector("#ingredient-list");
var input = document.querySelector(".input");

// Humor API - joke shows on button click
buttonEl.addEventListener("click", function(){

  fetch('https://api.humorapi.com/jokes/random/?api-key=18cc987c5ed94f4d9d01dfbbec17b43a&include-tags=food&max-length=140')
  .then(function(response) {
    return response.json()
})
.then(function(JSONResponse) {
  console.log(JSONResponse);
  jokeArea.innerHTML= "";
  var jokeEl = document.createElement("p");
  jokeEl.textContent = JSONResponse.joke;
  jokeArea.appendChild(jokeEl);
})
.catch(function(error) {
  console.log(error);
});

})

//ingreClear.addEventListener("click", localStorage.clear);


//var createTaskHandler = function() {
// var listItemEl = document.createElement ("li");
//   listItemEl.className = "input";
//   listItemEl.textContent = "";
//   ingredient.appendChild(listItemEl);
//   console.log(value)



// }


console.log("js is running");


function addItem(){
    var ing;
    var counter = 0;
    counter ++;

    //Takes userinput and send it to addToList function.
    ing = document.getElementById('ingredient').value;
    addToList(ing, counter)
    console.log(ing)
    // save data
    window.localStorage.setItem('ingredient', JSON.stringify(ing));
    // retrieve
    var retrievedData = window.localStorage.getItem('ingredient');
    var ing2 = JSON.parse(retrievedData);
    console.log(ing2);
    //Return False to not reload page
    return false;




}

function addToList(item, counter){
    //Create variables for id of list item.
    var liName = "item" + counter;
    var delBtnName = "delBtn" + counter;

    //create delete button
    var delBtn = document.createElement("button");
    delBtn.type = "submit";
    delBtn.id = delBtnName;
    delBtn.onclick=removeFromList(item);
    delBtn.classList.add(item);
    delBtn.innerHTML= "Remove"

    //create list item
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.id =liName;
    li.classList.add(item);
    li.appendChild(document.createTextNode(item));
    li.appendChild(delBtn);
    ul.appendChild(li);


    fetch(`https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=${input.value}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "tasty.p.rapidapi.com",
		"x-rapidapi-key": "0cd388e86emsh38cba0e720e1220p1e0b48jsn82e9770dc6c0"
	}
})
.then(response => {
	console.log(response);
  return response.json()
}).then(data => {
  console.log(data);
})

.then(function(JSONResponse) {
  console.log(JSONResponse);
  recipeArea.innerHTML="";
  var recipeEl = document.createElement("li");
  recipeEl.textContent.JSONResponse.recipes;
  recipeArea.appendChild(recipeEl);

})
.catch(function(error) {
  console.log(error);
});
}

function removeFromList(className){
    // alert("this works")
    return false;
};
