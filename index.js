const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Server is ready')
})

app.get('/api/jokes', (req,res)=>{
    const joke = 
    [ {
        id:1,
        number:"01-Joke",
        content:"first joke"
     },
     {
        id:2,
        number:"02-Joke",
        content:"second joke"
     }, {
        id:3,
        number:"03-Joke",
        content:"third joke"
     },
     {
        id:4,
        number:"04-Joke",
        content:"last joke"
     }]

     res.send(joke);
    
})
app.listen(port);