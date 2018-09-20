const apiKey = 'AIzaSyC9G5N9yXiqKofp4G21tb-D_QN8bAvgXDI'

//Function to create materialze cards based on API data and search
function createResultCard(result) {
  //Determine if business is open or closed at the moment
  let checkOpen = openClosed(result.opening_hours.open_now)
  //Determine Price of the restuarant
  let price = priceLevel(result.price_level)
  //Set reference to pull in a photo of the business
  let photoReference = result.photos[0]['photo_reference']
  document.getElementById('cardArea').innerHTML += `
  <div class="col s12 m4 l4">
    <div class="card medium">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator responsive-img" src="https://maps.googleapis.com/maps/api/place/photo?maxheight=1000&maxwidth=1000&photoreference=${photoReference}&key=${apiKey}">
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">${result.name}<i class="material-icons right">more_vert</i></span>
        <p>Price: ${price}<br>Rating: ${result.rating}<br>${checkOpen}</p>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">More Info<i class="material-icons right">close</i></span>
        <p>${checkOpen} <br> Rating : ${result.rating} <br> Price: ${price} <br> Address: <a href="https://www.google.com/maps/search/?api=1&query=${result.name}+${result.formatted_address}" target="_blank">${result.formatted_address}</a></p>
      </div>
    </div>
  </div>`

}

//Find the price level of the restaurant

function priceLevel(price) {
  switch (price) {
    case undefined:
      return 'No price info';
      break;
    case 0:
      return 'Free';
      break;
    case 1:
      return '$';
      break;
    case 2:
      return '$$';
      break;
    case 3:
      return '$$$';
      break;
    case 4:
      return '$$$$';
      break;
  }
}

//Determine if business is open or closed at time of Search
function openClosed(open) {
    if (open) {
      return 'Open Now'
    } else {
      return 'Currently Closed'
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
  //Initializes Materialize Javascript effects
  M.AutoInit();
  //Use Local storage to set the search location to the last search
  document.getElementById('location').value = localStorage.getItem('location') || ''
  //Step 1: fetch some data from a server when the user clicks submit
  let button = document.getElementById('submit')

  //Button Click Event
  button.addEventListener('click', function(event) {
    event.preventDefault()
    //Set local storage of search location
    localStorage.setItem('location', document.getElementById('location').value)
    let location = document.getElementById('location').value
    //Set local storage of place type
    let placeType = document.getElementById('placeType').value
      url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=dog+friendly+${placeType}+${location}&key=${apiKey}`

    axios.get(url)
      .then((response) => {
        //clear the results cards if there are any
        document.getElementById('cardArea').innerHTML = ''
        //If zero results. append picture and say no results found
        if (response.data.status === 'ZERO_RESULTS') {
          let noResultText = document.createElement('h2')
          noResultText.innerText = "No Results Found. Sad Puppy"
          noResultText.className = 'center-align'
          document.getElementById('cardArea').appendChild(noResultText)
          let noResultImage = document.createElement('img')
          noResultImage.className = 'hoverable responsive-img col s12 m6 l6 offset-l3 offset-m3'
          noResultImage.src = 'https://images.unsplash.com/photo-1511028897949-27b3f9f7924d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=733f5aebb3875c354a9df219e1fcb944&auto=format&fit=crop&w=724&q=80'
          document.getElementById('cardArea').appendChild(noResultImage)
        }

        //Loop through results and find the names of the restaurants, pictures, and address and create a materialize card for each one
        response.data.results.forEach(createResultCard)
        //Call the create result card function to make a materialze card for each place in the api
        createResultCard()
      })
  })
})
