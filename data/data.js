const lastfm = require('../config/config') ;
const axios = require('axios');

exports.getArtists = async (country)=>{
     return new Promise( resolve=>{
      lastfm.geoTopArtists( {country: country},async (err, data) => { 
        resolve(data) ;
      })
      
    }
  )};
  exports.getTopTracks = async (artist)=>{
    return new Promise( resolve=>{
     lastfm.artistTopTracks( {name: artist},async (err, data) => { 
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

 

 

 
