const lastfm = require('../config/config') ;
const axios = require('axios');

exports.getArtists = async ()=>{
     return new Promise( resolve=>{
      lastfm.geoTopArtists( {country: 'India'},async (err, data) => { 
        resolve(data) ;
      })
    }
  )};
  exports.gettopTracks = async ()=>{
    return new Promise( resolve=>{
     lastfm.artistTopTracks( {name: 'Arjit'},async (err, data) => { 
       console.log(data);
       resolve(data) ;
     })
   }
 )};

 exports.getCountries = async () =>{
   console.log ('in data');
   return new Promise( resolve =>{
    axios.get('https://api.printful.com/countries')
    .then(response => {
       console.log(response);
       resolve (response.data);
      })
    .catch(error => {
        console.log(error);
    })
   }
    
   );
 }

 

 

 
