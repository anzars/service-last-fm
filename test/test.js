const expect = require('chai').expect;
const nock = require('nock');

const data = require('../data/data');


describe('Get Countries tests', () => {
  beforeEach(() => {
    process.env.NODE_ENV='production';
    process.env.lastfm_apikey='fd88c46c00f820169c8d37a53f2bccb2';
   /*  nock('https://api.printful.com')
      .get('/countries')
      .reply(200, response); */
  });

  it('Get a country by countryname', () => {
   
    return data.getCountries()
      .then(response => {
        //expect an object back
        expect(typeof response).to.equal('object');

        
        expect(response[0].name).to.equal('Andorra');
      
      });
  });

  it('Get Artists by countryname', () => {
   
    return data.getArtists('India')
      .then(response => {
        //expect an object back
        expect(typeof response).to.equal('object');

        
        expect(response.artist[0].name).to.equal('Coldplay');
      
      });
  });

  it('Get Toptracks by artist name', () => {
   
    return data.getTopTracks('Arjit')
      .then(response => {
        //expect an object back
        expect(typeof response).to.equal('object');

        
        expect(response.result[0].type).to.equal('track');
      
      });
  });
});