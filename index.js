const express = require('express');
const app = express();
app.use(express.json());
const LastFM = require('last-fm')
const lastfm = new LastFM('fd88c46c00f820169c8d37a53f2bccb2', { userAgent: 'MyApp/1.0.0 (http://example.com)' })
const axios = require('axios');

axios.get('https://api.printful.com/countries')
    .then(response => {
        console.log(response.data.result[0]);
        
       
    })
    .catch(error => {
        console.log(error);
    });


/* lastfm.geoTopArtists( {country: 'India'}, (err, data) => { 
    if (err) console.error(err)
    else console.log(data)
});
 
lastfm.artistTopTracks({name:'Arjit'}, (err, data) => {
    if (err) console.error(err)
    else console.log(data)
}); */



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));