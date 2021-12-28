const express = require ('express')
const mongoose = require ('mongoose')
const authRouter = require ('./authRouter')
const PORT = process.env.PORT || 9899
const app = express()
const http = require('xmlhttprequest')

//encoding
app.use(express.json())
app.use(express.json({extended: true}))
app.use(express.urlencoded())
app.set('view engine', 'pug')
app.use(express(__dirname + '/views'))

app.use("/auth", authRouter)

//routing
  app.get('/', function(req,res){
    return res.redirect('/formget');
    
  });

  app.get('/formget', function(req,res){
   return res.render('formget')

  })
  
  app.post('/api', function(req,res){
      const formData  = JSON.stringify( req.body);
      console.log(data);
      var http = new XMLHttpRequest();
      var url = "http://localhost:9899/auth/registration"
      var method = "POST";
      var data = formData

      http.open(method, url,);
      http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      http.onreadystatechange = function(){
        if (http.readyState === XMLHttpRequest.DONE && http.status === 201){
          console.log(JSON.parse(http.responseText));
        } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 201){
          console.log('Error');
        }
      }

      http.send(data);



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