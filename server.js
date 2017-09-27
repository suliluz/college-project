const hbs = require('hbs');
const http = require('http');
const express = require('express');
const db = require('mysql');
const port = process.env.PORT || 3000;

var app = express();
app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    hbs.render('home.hbs');
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});