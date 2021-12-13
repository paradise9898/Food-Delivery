import express from 'express'
import mongoose from 'mongoose'
import * as authRouter from './authRouter'
import fetch from 'node-fetch'

const PORT = process.env.PORT || 9899

const app = express()
app.use(express.json())
app.use("/auth", authRouter)


app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');


//encoding
app.use(express.json())
app.use(express.json({extended: true}))
app.use(express.urlencoded())
 
app.set('view engine', 'pug')
app.use(express(__dirname + '/views'))

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
        const jsondata = JSON.stringify(req.query)
        console.log(jsondata)

  
        const xhr = new XMLHttpRequest();

        // listen for `load` event
        xhr.onload = () => {
        
            // print JSON response
            if (xhr.status >= 200 && xhr.status < 300) {
                // parse JSON
                const response = JSON.parse(xhr.responseText);
                console.log(response);
            }
        };
        
        // create a JSON object
     
        // open request
        xhr.open('POST', 'http://localhost:9899/auth/registration')
      
        
        // set `Content-Type` header
        xhr.setRequestHeader('Content-Type', 'application/json');
        
        // send rquest with JSON payload
        xhr.send(JSON.stringify(json));

        //post req yaandex
  });









const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://freefood:qwerty123456@freefood.q67co.mongodb.net/freefood?retryWrites=true&w=majority`)
        app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()

