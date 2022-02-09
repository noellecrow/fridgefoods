function printRecipes(item) {
  fetch(`https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=${item}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "tasty.p.rapidapi.com",
      "x-rapidapi-key": "0cd388e86emsh38cba0e720e1220p1e0b48jsn82e9770dc6c0",
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

var counter = 0;
function addItem() {
  var ing;
  counter++;

  //Takes userinput and send it to addToList function.
  ing = document.getElementById("ingredient").value;
  addToList(ing, counter);
  //Return False to not reload page
  return false;
}

//function adds item to list
function addToList(item, counter) {
  //Create variables for id of list item.
  var liName = "item" + counter;
  var delBtnName = "delBtn" + counter;

  //create delete button
  var delBtn = document.createElement("button");
  delBtn.type = "submit";
  delBtn.id = delBtnName;
  delBtn.onclick = removeFromList(item);
  delBtn.classList.add(item);
  delBtn.innerHTML = "Remove";
/////////////////here//////////
delBtn.onclick=function(){
  removeFromList(this.classList);
};
/////////////////here//////////


  //create list item
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  li.id = liName;
  li.classList.add(item, "ingredients");
  li.appendChild(document.createTextNode(item));
  li.appendChild(delBtn);
  ul.appendChild(li);

  printRecipes(item);
}

function removeFromList(className) {
/////////////////here//////////
const elements = document.getElementsByClassName(className);
while(elements.length > 0){
    elements[0].parentNode.removeChild(elements[0]);
}
/////////////////here//////////
return false;
}
