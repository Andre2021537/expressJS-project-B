const express = require('express'); // Express framework
const request = require('request'); // Express framework
const bodyParser = require('body-parser');
const url = require('url');
const querystring = require('querystring');

const app = express();
let session = require('express-session');
// Set up session with express
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
//S et up bodyParser with express
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

let path = require('path');



//Set up web folders

app.listen(3001, function() {
	console.log('Listening on port ' + 3001 + '.');
});

require('dns').lookup(require('os').hostname(), function (err, add, fam) {
  console.log('addr: '+add);
})



//Set up view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static("public"));







/*
██       ██████   ██████  ██ ███    ██
██      ██    ██ ██       ██ ████   ██
██      ██    ██ ██   ███ ██ ██ ██  ██
██      ██    ██ ██    ██ ██ ██  ██ ██
███████  ██████   ██████  ██ ██   ████
*/



app.get('/', function(request, response) {
	response.status(200).render('index', {
	});
});
