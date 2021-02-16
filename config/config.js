const LastFM = require('last-fm')

const lastfm = new LastFM('fd88c46c00f820169c8d37a53f2bccb2', { userAgent: 'MyApp/1.0.0 (http://example.com)' });
module.exports = lastfm;