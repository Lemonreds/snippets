var express = require('express')
var path = require('path')
var app = express()
var cors = require('cors')

app.use(cors())
 
app.use(express.static(path.join(__dirname, 'static')))
app.listen(3000);
