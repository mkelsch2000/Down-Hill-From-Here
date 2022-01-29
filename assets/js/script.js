$(document).ready(function () {

    // activate search button for zip code
    $(".btn").on("click", function () {

        //set local storage or save zip code to local storage
        var zip = $(this).parent().attr("id");
        var text = $(this).siblings(".form-input").val();

        localStorage.setItem(zip, text)
    })
});


    var urlSearch = "https://api.themoviedb.org/3/movie/now_playing?api_key=8c898a456ab85fa46fb53684097389dc&language=en-US&region=US"

    fetch(urlSearch).then(function(response) {
      if (response.ok) {
        response.json().then(function(data) {
          console.log(data);
        })
      }
    });

    
