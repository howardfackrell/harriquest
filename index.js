const express = require('express')

const app = express()

app.get('/:name([a-z]*[0-9])', function(req, response) {
  let name = req.params['name']
  response.send(`Hello ${name}`)
})

app.get('/harrison', function(req, response) {
  response.send("Hello Harrison!!")
})

app.listen(3000, function() {
  console.log("Listening on port 3000")
})
