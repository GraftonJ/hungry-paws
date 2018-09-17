// //Below URL is a Text Searcg that returns address, name, open_now, photos, placeID, pricelevel, rating, and type such as restaurant, bar, cafe
// https://maps.googleapis.com/maps/api/place/textsearch/json?query=dog+friendly+restaurants+boulder&key=AIzaSyC9G5N9yXiqKofp4G21tb-D_QN8bAvgXDI


document.addEventListener('DOMContentLoaded', (event) => {
  //Step 0: Ensure event listener works
  console.log('here')

  //Step 1: fetch some data from a server. axios? OMDBAPI
  let location = 'lakeland'
  let url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=dog+friendly+restaurants+${location}&key=AIzaSyC9G5N9yXiqKofp4G21tb-D_QN8bAvgXDI`
  axios.get(url)
    .then((response) => {
      //Step 2: Log Data and see what you are getting back as a response
      console.log(response.status)
      console.log(response.data.results.length);
      //Loops through results and finds the names of the restaurants
      for (i = 0; i < response.data.results.length; i++) {
        console.log(response.data.results[i].name)
      }
    })
  //
  //   let movies = response.data.Search
})
