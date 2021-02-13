const data =   require('../data/data');

exports.getArtists = async(country) => {
 return await data.getArtists(country);
}
exports.getTopTracks = async(artist) => {
 return await data.getTopTracks(artist);
}

exports.getCountries = async() => {
 return await data.getCountries();
}