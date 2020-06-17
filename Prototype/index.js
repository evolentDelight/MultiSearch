var express = require('express')
var path = require('path')
var main = express()

//Load router modules
var store1 = require('./store1')

main.use(express.static(path.join(__dirname, 'ms-prototype/build')))

//Attach corresponding API calls to stores OR attach main API router that handles API calls
//This is here as template
main.use('/api/store1', store1)


//Catchall handler to reference to main page
main.get('*', (req, res) =>{
  res.sendFile(path.join(__dirname+'/ms-prototype/build/index.html'))
})

const port = process.env.PORT || 3000;

main.listen(port);