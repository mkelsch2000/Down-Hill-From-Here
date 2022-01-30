var apiUrl = "https://api.tomtom.com/search/2/geocode/Saint+George+UT+94790.sjon?key=AJyORkvIskjy38hOMUwmZeWJdZB2HIEt";

fetch(apiUrl).then(function(response) {
  if (response.ok) {
    response.json().then(function(data) {
      console.log(data);
    })
  }
})






