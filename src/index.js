// le fetch en lui-meme
const results = document.querySelector("#results");
const searchMovie = (keyword) => {
const apiUrl = `http://omdbapi.com/?s=${keyword}&apikey=adf1f2d7`;
fetch(apiUrl)
  .then(response => response.json())
  .then((data) => {
      data.Search.forEach((movie) => {
          console.log(movie);
          results.insertAdjacentHTML("beforeend", 
                          `<li>
          <img scr="${movie.Poster}" />
          <p>${movie.Title}<p>
          </li>`);
      });
  });
}

// le user-input et sa récuperation
  document.querySelector("#search-movie")
  .addEventListener("submit", (event) => {
    results.innerHTML = "";
    event.preventDefault();
    const keyword = document.querySelector("#keyword").value;
    console.log(keyword);
    searchMovie(keyword);
  })


// le fetch en lui-meme
const countryResults = document.querySelector("#country-results");
const searchCountry = (keyword2) => {
const countryUrl = `https://restcountries.eu/rest/v2/capital/${keyword2}`;
fetch(countryUrl)
  .then(response => response.json())
  .then((data2) => {
    console.log(data2[0].name);
    console.log(data2[0].region);
    console.log(data2[0].currencies[0].name);
    countryResults.insertAdjacentHTML("beforeend", 
      `<li> Est la capitale de : ${data2[0].name} </li>, <li> Se situe en : ${data2[0].region}</li>, <li> et sa monnaie est : ${data2[0].currencies[0].name} </li>` 
    );
  });
}

// le user-input et sa récuperation
document.querySelector("#search-country")
  .addEventListener("submit", (event) => {
      countryResults.innerHTML = "";
      event.preventDefault();
      const keyword2 = document.querySelector("#keyword2").value;
    console.log(keyword2);
    searchCountry(keyword2)
})

// le fetch en lui-meme


