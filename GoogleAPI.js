// //Below URL is a Text Searcg that returns address, name, open_now, photos, placeID, pricelevel, rating, and type such as restaurant, bar, cafe
// https://maps.googleapis.com/maps/api/place/textsearch/json?query=dog+friendly+restaurants+boulder&key=AIzaSyC9G5N9yXiqKofp4G21tb-D_QN8bAvgXDI
const apiKey = 'AIzaSyC9G5N9yXiqKofp4G21tb-D_QN8bAvgXDI'
document.addEventListener('DOMContentLoaded', (event) => {
  //Step 0: Ensure event listener works

  //Step 1: fetch some data from a server.
  let location = 'boulder'
  let url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=dog+friendly+restaurants+${location}&key=AIzaSyC9G5N9yXiqKofp4G21tb-D_QN8bAvgXDI`
  axios.get(url)
    .then((response) => {
  //Step 2: Log Data and see what you are getting back as a response
      //Loops through results and finds the names of the restaurants
      console.log(response.data.results);
      response.data.results.forEach(createResultCard)

      function createResultCard(result) {
        let photoReference = result.photos[0]['photo_reference']
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
        image.src = `https://maps.googleapis.com/maps/api/place/photo?maxheight=700&photoreference=${photoReference}&key=${apiKey}`
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
        resultLink.innerText = result.formatted_address
        cardContent.appendChild(resultLink)

        //Create card-reveal div and append to cardContainer
        let cardReveal = document.createElement('div')
        cardReveal.className = 'card-reveal'
        cardContainer.appendChild(cardReveal)
        //PENDING: Create span and append to cardReveal
        let revealSpan = document.createElement('span')
        revealSpan.className = 'card-title activator grey-text text-darken-4'
        revealSpan.innerText = 'Card Title'
        cardReveal.appendChild(revealSpan)
        let iReveal = document.createElement('i')
        iReveal.className = "material-icons right"
        iReveal.innerText = 'close'
        revealSpan.appendChild(iReveal)
        //Create P element and append to cardReveal
        let revealContent = document.createElement('p')
        revealContent.innerText = 'Here is some more information about this product that is only revealed once clicked on.'
        cardReveal.appendChild(revealContent)
      }
    })
})

//https://maps.googleapis.com/maps/api/place/photo?maxheight=1000&photoreference=CmRaAAAAwduffRfO922yJkTuX-hrZEOWkSDUkh9qM7kjaHEjl_s_Yah7fH9tC-2SRaCr8bSkQ39HOfRxYSbHMQotJsjpArEo6nN5kIo3kqpSJ6HRfFTSxOaZeLBX5sNQg8uwKL1MEhCVYpYzz6MiiM07V4O4Ue1KGhTHG2gbTSgY2L_rNbiESVN9k02w4g&key=AIzaSyC9G5N9yXiqKofp4G21tb-D_QN8bAvgXDI
