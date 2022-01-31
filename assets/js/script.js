

// fetch movie data
fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=8c898a456ab85fa46fb53684097389dc&language=en-US&region=US")

.then(function(response) {
  if (response.ok) {
    response.json().then(function(data) {
      const list = data.results
      console.log(data.results);

      for (var i = 0; i < list.length; i++) {
        const movieName = list[i].title;
        const moviePoster = list[i].poster_path
        const movieDiv = document.createElement("div");
        movieDiv.classList.add("movies", "column", "is-1", "is-mobile", "content");
        movieDiv.innerHTML = "<img src='https://image.tmdb.org/t/p/original" + moviePoster + "'/><h2>" + movieName + "</h2>";
        document.getElementById("movie-card").appendChild(movieDiv);
      }
    })
  }
});

// Initialize all div with carousel class
var carousels = bulmaCarousel.attach('.carousel');

// Loop on each carousel initialized
for(var i = 0; i < carousels.length; i++) {
	// Add listener to  event
	carousels[i].on('before:show', state => {
		console.log(state);
	});
}

// Access to bulmaCarousel instance of an element
var element = document.querySelector('#my-element');
if (element && element.bulmaCarousel) {
	// bulmaCarousel instance is available as element.bulmaCarousel
	element.bulmaCarousel.on('before-show', function(state) {
		console.log(state);
	});
}

