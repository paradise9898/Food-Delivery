const express = require ('express')
const mongoose = require ('mongoose')
const authRouter = require ('./authRouter')
const PORT = process.env.PORT || 9899
const app = express()

//encoding
app.use(express.json())
app.use(express.json({extended: true}))
app.use(express.urlencoded())
app.use("/auth", authRouter)
app.set('view engine', 'pug')
app.use(express(__dirname + '/views'))

//routing
  app.get('/', function(req,res){
    return res.redirect('/formget');
    
  });

  app.get('/formget', function(req,res){
   return res.render('formget')

  })
  
  app.post('/api', function(req,res){
      const v = req.body
      console.log(v);

      async function postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
      }

      
      postData('', v)
        .then(data => {
          console.log(data); // JSON data parsed by `data.json()` call
        });
      
  })






const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://freefood:qwerty123456@freefood.q67co.mongodb.net/freefood?retryWrites=true&w=majority`)
        app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start();