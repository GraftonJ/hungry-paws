// //Below URL is a Text Searcg that returns address, name, open_now, photos, placeID, pricelevel, rating, and type such as restaurant, bar, cafe
// https://maps.googleapis.com/maps/api/place/textsearch/json?query=dog+friendly+restaurants+boulder&key=AIzaSyC9G5N9yXiqKofp4G21tb-D_QN8bAvgXDI
const apiKey = 'AIzaSyC9G5N9yXiqKofp4G21tb-D_QN8bAvgXDI'
document.addEventListener('DOMContentLoaded', (event) => {
  //Find the price level of the restaurant
  let price = ''
  function priceLevel(location) {
    switch (location.price_level) {
      case undefined:
        price = 'no price info';
        break;
      case 0:
        price = 'Free';
        break;
      case 1:
        price = 'Inexpensive';
        break;
      case 2:
        price = 'Moderate';
        break;
      case 3:
        price = 'Expensive';
        break;
      case 4:
        price = 'Very Expensive';
        break;
    }
    console.log(price)
  }
//Determine if business is open or closed at time of Search
let openNow = ''

function openClosed(location) {
  if (location.opening_hours.open_now === true) {
    openNow = 'Open Now'
  } else {
    openNow = 'Currently Closed'
  }
}
//Initializes Materialize Javascript effects
M.AutoInit();
//Step 1: fetch some data from a server when the user clicks submit
let button = document.getElementById('submit')
button.addEventListener('click', function(event) {
  event.preventDefault()
  let location = document.getElementById('location').value
  let placeType = document.getElementById('placeType').value
  let url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=dog+friendly+${placeType}+${location}&key=AIzaSyC9G5N9yXiqKofp4G21tb-D_QN8bAvgXDI`
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

      function createResultCard(result) {
        priceLevel(result)
        //Determine if business is open or closed at the moment
        openClosed(result)
        //Determine Price of the restuarant
        //Set reference to pull in a photo of the business
        let photoReference = result.photos[0]['photo_reference']
        //Create responsive card divider. Append to card area
        let responsiveDiv = document.createElement('div')
        responsiveDiv.className = 'col s12 m4 l4'
        let cardArea = document.getElementById('cardArea')
        cardArea.appendChild(responsiveDiv)
        //Create top-level card div
        let cardContainer = document.createElement('div')
        cardContainer.className = "card medium"
        //Append the card div to the responsiveDiv
        responsiveDiv.appendChild(cardContainer)
        //Create card image div
        let cardImage = document.createElement('div')
        cardImage.className = "card-image waves-effect waves-block waves-light"
        //Append the card image to the card divider
        cardContainer.appendChild(cardImage)
        //Create image tag with class and source
        let image = document.createElement('img')
        image.className = 'activator responsive-img'
        image.src = `https://maps.googleapis.com/maps/api/place/photo?maxheight=1000&maxwidth=1000&photoreference=${photoReference}&key=${apiKey}`
        //Append the image to the cardImage
        cardImage.appendChild(image)
        //create card-content div
        let cardContent = document.createElement('div')
        cardContent.className = 'card-content'
        //Append card-content div to cardContainer div
        cardContainer.appendChild(cardContent)
        //Create Span and append to the card-content div. Create i tag and append to contentSpan
        let contentSpan = document.createElement('span')
        contentSpan.className = 'card-title activator grey-text text-darken-4'
        contentSpan.innerText = result.name
        cardContent.appendChild(contentSpan)
        let iContent = document.createElement('i')
        iContent.className = "material-icons right"
        iContent.innerText = 'more_vert'
        contentSpan.appendChild(iContent)
        // //create p tag with link and append to card-content divider
        let resultLink = document.createElement('p')
        resultLink.class = "truncate"
        resultLink.innerText = result.formatted_address
        cardContent.appendChild(resultLink)

        //Create card-reveal div and append to cardContainer
        let cardReveal = document.createElement('div')
        cardReveal.className = 'card-reveal'
        cardContainer.appendChild(cardReveal)
        //Create span and append to cardReveal
        let revealSpan = document.createElement('span')
        revealSpan.className = 'card-title activator grey-text text-darken-4'
        revealSpan.innerText = 'More Info'
        cardReveal.appendChild(revealSpan)
        let iReveal = document.createElement('i')
        iReveal.className = "material-icons right"
        iReveal.innerText = 'close'
        revealSpan.appendChild(iReveal)
        //Create P element and append to cardReveal
        let revealContent = document.createElement('p')
        revealContent.innerHTML = `${openNow} <br> Rating : ${result.rating} <br> Price: $$ <br> Address: ${result.formatted_address}`
        cardReveal.appendChild(revealContent)
      }
    })
})
})
