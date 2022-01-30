// fetch data from input field
var getRequestedData = function(event) {
  // prevent reload when submitting
  event.preventDefault()

  // store data in variables
  const zipEl = document.getElementById("zipInput").value;
  const mapContainer = document.getElementById("map-box");

  mapContainer.innerHTML = "";
  mapContainer.innerHTML = "<iframe class='google-map mx-auto' width='400' height='600' style='border:0' loading='lazy' allowfullscreen src='https://www.google.com/maps/embed/v1/search?q=movie+theater+near+" + zipEl + "&key=AIzaSyAnFqpH_kWqpIqDBT_nOesR9gTnPS9mIxg' title='description'></iframe>"
};


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
        movieDiv.classList.add("movies","movieTitle", "column", "is-1", "is-mobile");
        movieDiv.innerHTML = "<h2>" + movieName + "</h2><img src='https://image.tmdb.org/t/p/original" + moviePoster + "'/>";
        document.getElementById("carousel-demo").appendChild(movieDiv);
      }
    })
  }
});

// Initialize all div with carousel class
// var carousels = bulmaCarousel.attach('.carousel', options);

// Loop on each carousel initialized
// for(var i = 0; i < carousels.length; i++) {
// 	// Add listener to  event
// 	carousels[i].on('before:show', state => {
// 		console.log(state);
// 	});
// }

// Access to bulmaCarousel instance of an element
// var element = document.querySelector('#my-element');
// if (element && element.bulmaCarousel) {
// 	// bulmaCarousel instance is available as element.bulmaCarousel
// 	element.bulmaCarousel.on('before-show', function(state) {
// 		console.log(state);
// 	});
// }

document.getElementById("search-Btn").addEventListener("click", getRequestedData);

