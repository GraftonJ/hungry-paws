// //Below URL is a Text Searcg that returns address, name, open_now, photos, placeID, pricelevel, rating, and type such as restaurant, bar, cafe
// https://maps.googleapis.com/maps/api/place/textsearch/json?query=dog+friendly+restaurants+boulder&key=AIzaSyC9G5N9yXiqKofp4G21tb-D_QN8bAvgXDI
const cardContainer = document.createElement('div')
cardContainer.className = "card"
const cardImage = document.createElement('div')
cardImage.className = "card-image waves-effect waves-block waves-light"
const test = document.createElement('p')
test.innerText = 'Hello'

document.addEventListener('DOMContentLoaded', (event) => {
  //Step 0: Ensure event listener works
  console.log('here')

  //Step 1: fetch some data from a server. axios? OMDBAPI
  let location = 'lakeland'
  let url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=dog+friendly+restaurants+${location}&key=AIzaSyC9G5N9yXiqKofp4G21tb-D_QN8bAvgXDI`
  axios.get(url)
    .then((response) => {
      //Step 2: Log Data and see what you are getting back as a response
      //Loops through results and finds the names of the restaurants
      for (i = 0; i < response.data.results.length; i++) {
        createResultCard()
      }
    })
  function createResultCard() {
    document.getElementById('cardArea').appendChild(test)
    // document.getElementById('cardArea').appendChild(cardContainer)
    //Find the newly created Card div and append the card-image div
    //document.getElementsByClassName('card').appendChild(cardImage)
  }
})

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
