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


fetch("https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes&q=chicken", {
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
})
.catch(function(error) {
  console.log(error);
});
