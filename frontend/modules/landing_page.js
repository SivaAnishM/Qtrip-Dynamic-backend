import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description
  let cities = await fetchCities();

  //Updates the DOM with the cities
  cities.forEach((key) => {
    addCityToDOM(key.id, key.city, key.description, key.image);
  });
}

//Implementation of fetch call
async function fetchCities() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data
    // let response = await fetch('http://15.206.42.12:8082/cities');
    try{ 
    let response = await fetch(`${config.backendEndpoint}/cities`);
    let data = await response.json();
    return data
    }catch(Err){
      return null;
    }
   
}

//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM
  let dataId = document.getElementById("data");
  dataId.innerHTML += `<div class="col-sm-6 col-lg-3 mb-4" >
  <a href="/frontend/pages/adventures/?city=${id}" id="${id}">
    <div class="tile" >
      <div class="tile-text text-center">
        <h5>${city}</h5>
        <p>${description}</p>
      </div>
      <img src=${image} alt="${city} img">
    </div>
  </a>
</div>`
 
}

export { init, fetchCities, addCityToDOM };

// console.log("From init()")
