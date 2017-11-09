const path = require('path');

const express = require('express');

console.log('hosting a webserver on http://localhost:8080');

let app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'proto1.html'));
});

app.use(express.static(__dirname));

app.listen(8080);
