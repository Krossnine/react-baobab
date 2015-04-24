require('node-jsx').install({
	extension: '.jsx'
});

var express = require('express');
var app = express();

app.use(express.static('dist'));
app.use('/', require('./src/routes/ServerRouter.jsx'));

app.listen(3000);
