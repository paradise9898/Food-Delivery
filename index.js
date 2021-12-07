import express from 'express'
import mongoose from 'mongoose'
import {authRouter} from 'authRouter'

import fetch from  'node-fetch'

const PORT = process.env.PORT || 9899

const app = express()
app.use(express.json())
app.use("/auth", authRouter)







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
      const jsondata = JSON.stringify(req.query)
      console.log(jsondata)

      //post req yaandex

      const url = ` http://localhost:9899/auth/registration`
      const data = jsondata

      try {
          const response =  fetch(url, {
              method: 'POST',
              body: data,
              headers: {
                'Content-Type': 'application/json',
              }
            
          })
          const json = response.json()
          console.log('done', JSON.stringify(json));
        }
        catch (err) {
            console.log('fail', err);
        }





})














const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://freefood:qwerty123456@freefood.q67co.mongodb.net/freefood?retryWrites=true&w=majority`)
        app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()

