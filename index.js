// basic node express template
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const myObj = {
  name: 'GonPhalan',
  age: 30,
  hobbies: ['music', 'tim hecker', 'hecker tim XD'],
}

app.get('/objdata', (req, res) => {
  if (myObj) {
    return res.send(myObj)  
  }
  return res.send('data not found')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
