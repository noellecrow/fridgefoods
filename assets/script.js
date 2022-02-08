var buttonEl = document.querySelector("#joke");
var jokeArea = document.querySelector(".joke-area");
var ingreClear = document.querySelector("#ingre-clear");
var saveIngre = document.querySelector("#save-ingredient");
var ingredient = document.querySelector("#ingredient-list");
var input = document.querySelector(".input")
// buttonEl.addEventListener("click", function(){

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



//ingreClear.addEventListener("click", localStorage.clear);

// list of ingredients created
//push and convert data from array to string prototype join
var createTaskHandler = function() {
var listItemEl = document.createElement ("li");
  listItemEl.className = "ingredient-item";
  listItemEl.textContent = "";
  ingredient.appendChild(listItemEl);
  console.log(input.value)


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
.catch(err => {
	console.error(err);
});

 };

saveIngre.addEventListener("click", createTaskHandler);
