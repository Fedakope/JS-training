// console.log('Hello la famille !!');


// const cityResults = document.querySelector("#city-results");
// const searchCity = (keyword3) => {
//   const cityUrl = `https://geo.api.gouv.fr/communes/${keyword3}`;
//   fetch(cityUrl)
//     .then(response => response.json())
//     .then((data3) => {
//       console.log(data3.codeDepartement);
//       console.log(data3.population);
//       cityResults.insertAdjacentHTML("beforeend", `C'est dans le ${data3.codeDepartement} et y'a ${data3.population} habitants`);
//     });
// }


// //ask for user input 
// document.querySelector("#search-city")
//   .addEventListener("submit", (event) => {
//     cityResults.innerHTML = "";
//     event.preventDefault();
//     const keyword3 = document.querySelector("#keyword3").value;
//     console.log(keyword3);
//     searchCity(keyword3)
//   })

// le fetch en lui-meme
const cityResults = document.querySelector("#city-results");
const searchCity = (keyword3) => {
const cityUrl = `https://geo.api.gouv.fr/communes/${keyword3}`;
fetch(cityUrl)
  .then(response => response.json())
  .then((data3) => {
console.log(data3.codeDepartement);
console.log(data3.population);
    cityResults.insertAdjacentHTML("beforeend", 
      `<li> Est la capitale de : ${data3.codeDepartement} </li>, <li> Se situe en : ${data3.population}</li>` 
    );
  });
}

// le user-input et sa récuperation
document.querySelector("#search-city")
  .addEventListener("submit", (event) => {
      cityResults.innerHTML = "";
      event.preventDefault();
      const keyword3 = document.querySelector("#keyword3").value;
    console.log(keyword3);
    searchCity(keyword3)
})