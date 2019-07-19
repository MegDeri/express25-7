const express = require('express');
const app = express();
app.use(express.static('open'));

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', function(req, res){
    res.render('dynamic');
});

app.get('/auth/google', function(req, res){
    res.render('basic');
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});