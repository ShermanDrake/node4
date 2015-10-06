var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(__dirname + '/public'))

var port = 3000
app.listen(port, function(){
	console.log('server is listening on port ' + port)

})