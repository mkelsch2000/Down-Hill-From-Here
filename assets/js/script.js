var userSearchEl =document.querySelector("#user-search");

var formSubmitHandler = function(event) {
	event.preventDefault();
	console.log(event);
  };

var userSearchEl.addEventListener("click", formSubmitHandler);

var urlSearch = "https://api.themoviedb.org/3/movie/now_playing?api_key=8c898a456ab85fa46fb53684097389dc&language=en-US&region=US"

fetch(urlSearch).then(function(response) {
  if (response.ok) {
	response.json().then(function(data) {
	  console.log(data);
	})
  }
});

		