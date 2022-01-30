
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
        movieDiv.classList.add("movies", "column", "is-1", "is-mobile");
        movieDiv.innerHTML = "<h2>" + movieName + "</h2><img src='https://image.tmdb.org/t/p/original" + moviePoster + "'/>";
        document.getElementById("carousel-demo").appendChild(movieDiv);
      }
    })
  }
});