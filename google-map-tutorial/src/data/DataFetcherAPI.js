//based off BooksAPI.js from project 6: my reads


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

function handleErrors(response) {
  if (!response.ok) {
      throw Error(response.statusText);
  }
  return response;
}

// FOUR SQUARE API////////////////////////////////////
const api = 'https://api.foursquare.com/v2'

// this gets up to 10 results for locations for our purposes
//note foursquare distance is measured in meters
export const getLocationsAll = () =>
  fetch(`${api}/venues/search?ll=38.7916449,-77.119759&intent=browse&radius=1000&limit=10&client_id=NRGQG3Z25DSMLYUKPTODJY1ZOQTI0NVONSZICDVVOLXTQ1MK&client_secret=J35TCWD20UY10TYUR0RS2V5XQ0MJLFPBT02TJRK33425RVPP&v=20180708`)
  .then(handleErrors)
  .then(res => res.json())
  .then(data => data.response.venues)
  //.catch(error => {console.log('Error While getting All Locations data from FourSquare API', error)})


// To fill in infoWindows with more details
    export const getVenueDetails = (venueId)=> {
      let venueDetailsUrl =[`/venues/${venueId}?`,
                  `client_id=NRGQG3Z25DSMLYUKPTODJY1ZOQTI0NVONSZICDVVOLXTQ1MK`,
                  `&client_secret=J35TCWD20UY10TYUR0RS2V5XQ0MJLFPBT02TJRK33425RVPP&v=20180708`].join("")
      
      return	fetch(`${api}${venueDetailsUrl}`)
          .then(res => res.json())
          .then(data => data.response.venue)
          //.catch(error => {console.log(`Error while Getting Venue Details `, error)})
      }

// GOOGLE MAPS API //////////////////////////////////////////////////
//get placeID based off geocode data
export const getPlaceIdByGeocoding = (latlng) => {
  let geoCodeUrl =[`https://maps.googleapis.com/maps/api/geocode/json?`,
              `latlng=${latlng.lat},${latlng.lng}&language=en&`,
              `KEY=AIzaSyBfB8UMdS7E9dAIHPW3HzKTkkjsMHg2i0I`].join("")
  
   return	fetch(geoCodeUrl)
      .then(res => res.json())
      .then(data => data)
      .catch(error => {
        console.log(error)
      });
  }

  //get place details with place API
export const getPlaceDetails = (placeID) => {

  let placeDetailsUrl = [`https://maps.googleapis.com/maps/api/place/details/json?language=en`,
              `&placeid=${placeID}`,
              `&key=AIzaSyBfB8UMdS7E9dAIHPW3HzKTkkjsMHg2i0I`].join("")
  
  return fetch(proxyurl + placeDetailsUrl)
      .then(res => res.json())
      .then(data => data.result)
      .catch(error => {
        console.log(error)})
    }
  
  /*Get Place Photo using Photo Reference*/
  const proxyurl = "https://sheltered-headland-14246.herokuapp.com/"

  export const getPlacePhoto = (photo_reference) => {
    let photoReferenceUrl = [`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400`,
                `&photoreference=${photo_reference}`,
                `&key=AIzaSyBLEon_hcaY9ZUUNCllybabAzHg7wO7y-s`].join("")
    return fetch(proxyurl+photoReferenceUrl)
        .then(res => res.blob())
        // .then(blobResponse => {
        // 	 blobResponse
        //  	//console.log(data)
        //  })
        .catch(error => {
          console.log('Unable to get place photo', error)
        })
  } // blobs are the image related props
  