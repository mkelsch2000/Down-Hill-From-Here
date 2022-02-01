
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
  document.getElementById("search-Btn").addEventListener("click", getRequestedData);

// fetch movie data
fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=8c898a456ab85fa46fb53684097389dc&language=en-US&region=US")

  .then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        const list = data.results
        console.log(data.results);

        for (var i = 0; i < list.length; i++) {
          const movieName = list[i].title;
          const moviePoster = list[i].poster_path
          const movieDate = list[i].release_date
          const movieDiv = document.createElement("div");


          var card = document.createElement("div")
          var cardFig = document.createElement("figure")
          var cardImg = document.createElement("img")
          var cardCont = document.createElement("div")
          var cardInfo = document.createElement("div")
          var cardTitle = document.createElement("p")
          var cardDate = document.createElement("p")
          var movieDateFormat = moment(movieDate, "YYYY-MM-DD").format("MMMM DD, YYYY")

          card.setAttribute("class", "card-image")
          card.setAttribute("id", "poster")
          cardFig.setAttribute("class", "image")
          cardCont.setAttribute("class", "card-content")
          cardInfo.setAttribute("class", "content")
          cardTitle.setAttribute("class", "title is-4")
          cardTitle.setAttribute("id", "title")
          cardDate.setAttribute("class", "subtitle is-6")
          cardDate.setAttribute("id", "release-date")

          cardImg.setAttribute("src", "https://image.tmdb.org/t/p/original" + moviePoster)
          cardTitle.innerHTML = movieName
          cardDate.innerHTML = "<b>Release Date:</b> " + movieDateFormat

          document.getElementById("movie-card-" + i).appendChild(card);
          card.append(cardFig)
          cardFig.append(cardImg)
          document.getElementById("movie-card-" + i).appendChild(cardCont);
          cardCont.append(cardInfo)
          cardInfo.append(cardTitle)
          cardInfo.append(cardDate)
        }
      })
    }
  });


// Initialize all div with carousel class
var carousels = bulmaCarousel.attach('.carousel');

// Loop on each carousel initialized
for (var i = 0; i < carousels.length; i++) {
  // Add listener to  event
  carousels[i].on('before:show', state => {
    console.log(state);
  });
}

// Access to bulmaCarousel instance of an element
var element = document.querySelector('#my-element');
if (element && element.bulmaCarousel) {
  // bulmaCarousel instance is available as element.bulmaCarousel
  element.bulmaCarousel.on('before-show', function (state) {
    console.log(state);
  });
}

$(document).ready(function () {
  $(".btn").on("click", function () {
    var zip = $(this).parent().attr("id");
    var text = $(this).siblings(".form-input").val();
    localStorage.setItem(zip, text)
  })
});

