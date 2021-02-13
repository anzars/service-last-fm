const express = require('express');
const router = express.Router();
const models =   require('../models/models');
router.get('/Artists',async(req,res)=>{
    let artists = await models.getArtists(req.query.country);
    res.status(200).json(artists);
    }
);
router.get('/TopTracks',async(req,res)=>{
    let toptracks = await models.getTopTracks(req.query.artist);
    res.status(200).json(toptracks);
    }
);

router.get('/getCountries',async(req,res)=>{
    let countries = await models.getCountries();
    res.status(200).json(countries);
    }
);


module.exports = router;