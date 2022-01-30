// Initialize all div with carousel class
var carousels = bulmaCarousel.attach('.carousel', options);

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
//         // console.log(item)
//         const name = item.title
//         const poster = item.poster_path.imageUrl;
//         const movie = '<li> <img src="${poster}"> <h2>${name}</h2> </li>'
//         document.querySelector('.movies').innerHTML += movie;
//     })
// })