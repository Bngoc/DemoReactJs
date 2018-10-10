const express = require('express');
const config = require('config');
const app = express();
import serverRender from './serverRender';

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const initialContent = serverRender();
    res.render('index', {initialContent});
});

app.listen((process.env.PORT || config.get('port')), () => {
    console.info(`Running info ${config.get('port')}....`);
});