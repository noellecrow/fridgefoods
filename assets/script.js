fetch('https://api.humorapi.com/jokes/search?api-key=18cc987c5ed94f4d9d01dfbbec17b43a&include-tags=food')
.then(function(response) {
    return response.json()
})
.then(function(JSONResponse) {
  console.log(JSONResponse);
})
.catch(function(error) {
  console.log(error);
});


// fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes&q=chicken')


fetch("https://tasty.p.rapidapi.com/recipes/list?from=0&size=20", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "tasty.p.rapidapi.com",
		"x-rapidapi-key": "0cd388e86emsh38cba0e720e1220p1e0b48jsn82e9770dc6c0"
	}
})
.then(function(response) {
    return response.json()
})
.then(function(JSONResponse) {
  console.log(JSONResponse);
  var printThis = JSON.parse(JSONResponse);
  console.log(printThis);
})
.catch(function(error) {
  console.log(error);
});


console.log("js is running");


function addItem(){
    var ing;
    var counter = 0;
    counter ++;

    //Takes userinput and send it to addToList function.
    ing = document.getElementById('ingredient').value;
    addToList(ing, counter)
    console.log(ing)
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
}

function removeFromList(className){
    // alert("this works")
    return false;
}

