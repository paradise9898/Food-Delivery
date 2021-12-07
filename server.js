const express = require('express');
const app = express();
const Port = process.env.Port || 9899;
const authRouter = require('./authRouter')
const mongoose = require('mongoose');
const path = require('path');


app.use("/auth", authRouter)


//middleware
app.set('view engine' , 'pug')
app.use(express(__dirname + '/views'))


//encoding
app.use(express.json())
app.use(express.json({extended: true}))
app.use(express.urlencoded())
 


//routing
app.get('/', function(req,res){
  return res.redirect('/formget');
  
});




app.get('/formget', function(req,res){
  res.render('formget')


})




app.get('/formpost', function(req,res){
  return res.render('formpost')
})

//IMPLEMENT TO RAW PROFI
app.get('/submit-form-with-get', function(req,res){
      const r = res.send(req.query);
      console.log(JSON.stringify(req.query))
})

//Creation of Mongoose Database with listener

async function main(){
    
  await mongoose.connect(`mongodb+srv://freefood:qwerty123456@freefood.q67co.mongodb.net/freefood?retryWrites=true&w=majority`)
  app.listen(Port, () =>{
    console.log(`http://localhost:${Port}/formget`);
  })

}


//resulting

main()
