$(document).ready(function () {

    // activate search button for zip code
    $(".btn").on("click", function () {

        //set local storage or save zip code to local storage
        var zip = $(this).parent().attr("id");
        var text = $(this).siblings(".form-input").val();

        localStorage.setItem(zip, text)
    })
});


// var urlSearch = "https://api.themoviedb.org/3/movie/now_playing?api_key=8c898a456ab85fa46fb53684097389dc&language=en-US&region=US"

// fetch(urlSearch).then(function(response) {
//   if (response.ok) {
//     response.json().then(function(data) {
//       console.log(data);
//     //   console.log(results.title);
//     })
//   }
// });

// fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=8c898a456ab85fa46fb53684097389dc&language=en-US&region=US")
// // .then(function (response) {
// //     if (response.ok) {
// //         return response.json();
// //     }
// // })
// .then(response => response.json())
// .then(data => {
//     const list = data.results;

//     list.map((item) => {
//         console.log(item)
//         const name = item.title;
//         const poster = item.poster_path.imageUrl;
//         const movie = '<li><img src="${poster}"> <h2>${name}</h2> </li>'
//         document.querySelector('.movies').innerHTML += movie
//     })
// })

// Initial Value
const url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=8c898a456ab85fa46fb53684097389dc&language=en-US&region=US';
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

// Selectors for DOM
const searchBtn = document.querySelector('#search');
const movieResults = document.querySelector('#movieResults');

/*
 <div class="movie">
    <section class="section">
        <img src="" alt="" data-movie-id="">
         <img src="" alt="" data-movie-id="">
         </section>
    <div class="content">
         <p id="content-close">X</p>
    /div>
 </div>
*/
function movieSection(movies) {
    return movies.map((movie) => {
        return `
            <img scr=${IMAGE_URL + movie.poster_path} data-movie-id=${movie.id}/>
        `;
    })
}

function createMovieContainer(movies) {
    const movieElement = document.createElement('div');
    movieElement.setAttribute('class', 'movie');

    const movieTemplate = `
    <section class="section">
        ${movieSection(movies)}
    </section>
    <div clas="content">
    <p id="content-close">X</p>
    </div>
`;

    movieElement.innerHTML = movieTemplate;
    return movieElement

}


searchBtn.onclick = function (event) {
    console.log("Hello World")


    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            // data.results
            const movies = data.results;
            const movieBlock = createMovieContainer(movies);
            movieResults.appendChild(movieBlock);
            console.log('Data: ', data);
        })
}

