var apiUrl = "https://api.tomtom.com/search/2/geocode/Saint+George.sjon?key=AJyORkvIskjy38hOMUwmZeWJdZB2HIEt&entityTypeSet=Municipality,PostalCodeArea";

fetch(apiUrl).then(function(response) {
  if (response.ok) {
    response.json().then(function(data) {
      console.log(data);
    })
  }
})

