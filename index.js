const express = require ('express')
const mongoose = require ('mongoose')
const authRouter = require ('./scripts/controllers/authRouter')
const path = require('path')
const PORT = process.env.PORT || 9899
const app = express()
const  XMLHttpRequest = require('xhr2');

//encoding
app.use(express.json())
app.use(express.json({extended: true}))
app.use(express.urlencoded())
app.set('view engine', 'pug')
app.use("/public", express.static(path.join(__dirname, 'public')));
app.use(express(__dirname + '/views'))

app.use("/auth", authRouter)

//routing
  app.get('/', function(req,res){
    return res.redirect('/landing');
    
  });

  app.get('/landing', function(req,res){
   return res.render('landing')

  })
  
  app.get('/auth', function(req,res){
    return res.render('auth')
 
   })


  //MongoDB sepicifying users
  app.post('/api', function(req,res){
    
    const formData  = JSON.stringify( req.body);
    console.log(formData);
    const  http = new XMLHttpRequest();
    const  url = "https://freefood9.herokuapp.com/auth/registration"
    const  method = "POST";
    const  data = formData

    http.open(method, url,);
    http.setRequestHeader('Content-Type', 'application/json');
    http.onreadystatechange = function(){
      if (http.readyState === XMLHttpRequest.DONE && http.status === 201){
        console.log(JSON.parse(http.responseText));
      }
    }

    http.send(data);
    return res.redirect('/afterreg')



})

app.get('/afterreg', function(req,res){
  return res.render('afterreg')

 })





 app.get('/userprofile', function(req,res){
  return res.render('userprofile')

 })


 app.get('/logout', function(req,res){
  return res.render('loggedout')

 })


  //Defining promise type

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://freefood:qwerty123456@freefood.q67co.mongodb.net/freefood?retryWrites=true&w=majority`)
        app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start();