doctype html
head
  meta(charset='UTF-8')
  meta(http-equiv='X-UA-Compatible' content='IE=edge')
  meta(name='viewport' content='width=device-width, initial-scale=1.0')
  title Document
body
    block content 





extends base.pug

block content
    form(action='/submit-form-with-get' method='get')
        input(type='text', name='username')
        input(type='text', name='password')
        input(type='submit', name='')








        extends base.pug

block content
    form(action='/submit-form-with-post' method='post')
        input(type='text', name='username')
        input(type='text', name='password')
        input(type='submit', name='')



















        
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




   app.get('/submit-form-with-get', function(req,res){
        const r = res.send(req.query);
        const jsondata = JSON.stringify(req.query)
        console.log(jsondata)

  