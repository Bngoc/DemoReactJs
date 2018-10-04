const express = require('express');
const config = require('config');
const app = express();


app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.listen((process.env.PORT || config.get('port')), () => {
    console.info(`Running info ${config.get('port')}`);
});