// //Below URL is a Text Searcg that returns address, name, open_now, photos, placeID, pricelevel, rating, and type such as restaurant, bar, cafe
// https://maps.googleapis.com/maps/api/place/textsearch/json?query=dog+friendly+restaurants+boulder&key=AIzaSyC9G5N9yXiqKofp4G21tb-D_QN8bAvgXDI

document.addEventListener('DOMContentLoaded', (event) => {
  //Step 0: Ensure event listener works

  //Step 1: fetch some data from a server. axios? OMDBAPI
  let location = 'lakeland'
  let url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=dog+friendly+restaurants+${location}&key=AIzaSyC9G5N9yXiqKofp4G21tb-D_QN8bAvgXDI`
  axios.get(url)
    .then((response) => {
      //Step 2: Log Data and see what you are getting back as a response
      //Loops through results and finds the names of the restaurants
      response.data.results.forEach(createResultCard)
    })
})

function createResultCard(result) {
  //Create top-level card div
  let cardContainer = document.createElement('div')
  cardContainer.className = "card"
  //Append the card div to the cardArea
  let cardArea = document.getElementById('cardArea')
  cardArea.appendChild(cardContainer)
  //Create card image div
  let cardImage = document.createElement('div')
  cardImage.className = "card-image waves-effect waves-block waves-light"
  //Append the card image to the card divider
  cardContainer.appendChild(cardImage)
  //Create image tag with class and source
  let image = document.createElement('img')
  image.className = 'activator'
  image.src = 'https://images.unsplash.com/photo-1516755594799-4e41b3066883?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a2b5482b62d0693252e21032b56fc326&auto=format&fit=crop&w=1050&q=80'
  //Append the image to the cardImage
  cardImage.appendChild(image)
  //create card-content div
  let cardContent = document.createElement('div')
  cardContent.className = 'card-content'
  //Append card-content div to cardContainer div
  cardContainer.appendChild(cardContent)
  //Create Span and append to the card-content div. Trouble with inserting the Name and the i tag within the span
  let contentSpan = document.createElement('span')
  contentSpan.className = 'card-title activator grey-text text-darken-4'
  cardContent.appendChild(contentSpan)
  // //create p tag with link and append to card-content divider
  let resultLink = document.createElement('p')
  resultLink.innerText = 'Link to Website here'
  cardContent.appendChild(resultLink)

  //Create card-reveal div and append to cardContainer
  let cardReveal = document.createElement('div')
  cardReveal.className = 'card-reveal'
  cardContainer.appendChild(cardReveal)
  //Create span and append to cardReveal
  let revealSpan = document.createElement('span')
  revealSpan.className = 'card-title activator grey-text text-darken-4'
  cardReveal.appendChild(revealSpan)
  //Create P element and append to cardReveal
  let revealContent = document.createElement('p')
  revealContent.innerText = 'Here is some more information about this product that is only revealed once clicked on.'
  cardReveal.appendChild(revealContent)
}

//   <div class="card">
//     <div class="card-image waves-effect waves-block waves-light">
//       <img class="activator" src="">
//     </div>
//     <div class="card-content">
//       <span class="card-title activator grey-text text-darken-4">Restaurant Name<i class="material-icons right">more_vert</i></span>
//       <p><a href="#">www.restaurant.com</a></p>
//     </div>
//     <div class="card-reveal">
//       <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
//       <p>Here is some more information about this product that is only revealed once clicked on.</p>
//     </div>
//   </div>
// </div>
