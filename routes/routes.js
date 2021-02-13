const express = require('express');
const router = express.Router();
const data =   require('../data/data');
router.get('/Artists',async(req,res)=>{
    let artists =  await data.getArtists();
    res.status(200).json(artists);
    }
);
router.get('/TopTracks',async(req,res)=>{
    let toptracks =  await data.gettopTracks();
    res.status(200).json(toptracks);
    }
);
router.get('/getCountries',async(req,res)=>{
    let countries =  await data.getCountries();
    res.status(200).json(countries);
    }
);


module.exports = router;