var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res){
		// res.send('hello')

res.sendFile('Seville.html', {root : './public/html'})


})

app.get('/next', function(req, res, next){

	res.json(req.query) 


})

app.get('/:location', function(req, res, next){

	var pagelocation = ['capeVerde', 'straitOfMagellan', 'philippines', 'Seville', 'canaryIslands', 'Guam' ]

		if (pagelocation.indexOf(req.params.location) != -1) {

			res.sendFile(req.params.location + '.html', {root : './public/html'})
		}
		else {
			// next(new Error(req.params.location + 'Is Not Found'))
			next()
		}









	// res.sendFile(req.params.location + '.html', {root : './public/html'})

	  // if ( req.params.location === 'error' ) {
   //      next(new Error('my custom error'))
   //  }
   //  else {
   //  	console.log(req.params.location)
   //      res.sendFile(req.params.location + '.html', {root : './public/html'})
   //  }


})

app.use(function(req, res) {

  res.send('ERROR! ERROR! PAGE NOT FOUND!')

})





var port = 3000
app.listen(port, function(){
	console.log('server is listening on port ' + port)

})

