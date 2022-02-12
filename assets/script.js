var ingredientArray;
var list = document.getElementById("list");
var retrieveObject = JSON.parse(localStorage.getItem("ingredients"));
function previousSearch() {
  ingredientArray = retrieveObject
  if (!retrieveObject) {
    return;
  }
  // var cutRetrieveObject = retrieveObject.split(",");
  // console.log("previousSearch function", retrieveObject);
  // for (var i=0; i< cutRetrieveObject.length; i++) {
  //   addToList(cutRetrieveObject[i], i)
  // }

}
previousSearch()
list.innerHTML = retrieveObject;
function printRecipes(item) {
  fetch(`https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=${item}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "tasty.p.rapidapi.com",
      "x-rapidapi-key": "50bab637e1mshea689b3a138589cp145372jsndf2a531743e8",
    },
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      //if this is not the fist ingredient,delete the recipe list from last ingredient
      var lastRecipeInnerContainer = document.getElementById(
        "recipeInnerContainer"
      );
      if (lastRecipeInnerContainer) {
        lastRecipeInnerContainer.remove();
      }
      //create a new recipe list
      $("#recipeContainer").append(`<div id="recipeInnerContainer"></div>`);

      var numOfRecipes = Object.keys(data.results).length;
      for (var i = 0; i < numOfRecipes; i++) {
        var currentRecipe = data.results[i].display;
        createRecipeBox(currentRecipe);
      }
    })
    .catch(function (error) {
      console.log(error);
    });

}

//add single receipe to list one by one
function createRecipeBox(currentRecipe) {
  $("#recipeInnerContainer").append(
    `<div id="${currentRecipe}" class="singleRecipe veryBigText">${currentRecipe}</div>`
  );
}

//var counter = ingredientArray.length;
//var counter = 0;
function addItem() {

  var ing = document.getElementById("ingredient").value;
  //counter = counter + 1;
  //console.log(counter);
  console.log(retrieveObject);
  //Takes userinput and send it to addToList function.
  addToList(ing);

  if (!ingredientArray) {
    ingredientArray = [];
    ingredientArray.push(ing);
    localStorage.setItem("ingredients", JSON.stringify(ingredientArray))
  } else {
    ingredientArray = retrieveObject;
    ingredientArray.push(ing);
    localStorage.setItem("ingredients", JSON.stringify(ingredientArray))
  }

  printRecipes(ing);

  //Return False to not reload page
  return false;
}

//function adds item to list
function addToList(item) {
  //Create variables for id of list item.
  var liName = "item";
  var delBtnName = "delBtn";

  //create delete button
  var delBtn = document.createElement("button");
  delBtn.type = "submit";
  delBtn.id = delBtnName;
  delBtn.onclick = removeFromList(item);
  delBtn.classList.add(item);
  delBtn.innerHTML = "Remove";
delBtn.onclick=function(){
  removeFromList(this.classList);
};


  //create list item
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  li.id = liName;
  li.classList.add(item, "ingredients");
  li.appendChild(document.createTextNode(item));
  li.appendChild(delBtn);
  ul.appendChild(li);


}

function removeFromList(className) {
const elements = document.getElementsByClassName(className);
while(elements.length > 0){
    elements[0].parentNode.removeChild(elements[0]);
}
return false;
}


////////////joke API ////////////////
var buttonEl = document.querySelector("#joke");
var jokeArea = document.querySelector(".joke-area");

buttonEl.addEventListener("click", function(){

  fetch('https://api.humorapi.com/jokes/random/?api-key=6aa49cab3762443aae735d51f06ba01f&include-tags=food&max-length=140')
  .then(function(response) {
    return response.json()
})
.then(function(JSONResponse) {
  console.log(JSONResponse);
  jokeArea.innerHTML= "";
  var jokeEl = document.createElement("p");
  jokeEl.textContent = JSONResponse.joke;
  // jokeEl.textContent = "here is the joke";
  jokeArea.appendChild(jokeEl);

})
.catch(function(error) {
  console.log(error);
});

})
