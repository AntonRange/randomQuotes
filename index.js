function fetchQueotes() {
fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });
}

module.export = { fetchQueotes }