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

app.get('/:location', function(req, res){
	res.sendFile(req.params.location + '.html', {root : './public/html'})

})



var port = 3000
app.listen(port, function(){
	console.log('server is listening on port ' + port)

})

