const routes = require('./routes/routes');
const express = require('express');
const app = express();

const LastFM = require('last-fm')
const lastfm = new LastFM('fd88c46c00f820169c8d37a53f2bccb2', { userAgent: 'MyApp/1.0.0 (http://example.com)' });

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(express.json());
app.use('/api/', routes);


const port = process.env.PORT || 3462;
app.listen(port, () => console.log(`Listening on port ${port}...`));