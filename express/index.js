const express = require('express')
const fs =require('fs')
const app = express();
const port = 3000;
const bodyParser = require('body-parser')
app.set('view engine', 'ejs')
app.use('/assets',(req,res,next) =>{
    console.log('yo aako '+req.url);
    next()
})
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use('/assets', express.static('assets'))

// app.get('/', (req,res)=>{
//     res.send('the server on and your in homepage')
// })
// app.get('/', (req,res)=>{
//     console.log(`served: ${req.url}`)
//     res.sendFile(__dirname +'/home.html')
// })
// app.get('/contact', (req,res)=>{
//     res.sendFile(__dirname +'/contact.html')
// })
// app.get('/about', (req,res)=>{
//     res.sendFile(__dirname +'/about.html')
// })
// app.get('/profile/:name', (req,res)=>{
//     console.log(`served ${req.url}`)
//     res.sendFile(__dirname +'/profile.html')
//     res.send('this is binod ${req.param.name}')
// })
app.get('/', (req,res)=>{
    obj={
        name:'binod',
        lastname:'Nagarkoti'
    }
    res.render('home', obj);
})
app.get('/profile', (req,res)=>{
    data={
        name:req.query.name,
        email:req.query.email
    }

    res.render('profile', data);
})

app.get('/form', (req,res)=>{
    
    res.render('form');
})
app.get('/formsubmit' , (req,res) => {
    res.render('formpost');
})


app.get('/contact', (req,res)=>{
    res.render('contact')
})

app.get('/about', (req,res)=>{
    res.render('about')
})
// app.get('/profile/:name', (req,res)=>{
//     console.log(`served: ${req.url}`)
//     res.render('profile')
// })

app.post('/formsubmitpost', urlencodedParser,(req,res)=>{
    data = req.body
    console.log (data);

    fs.appendFile('postData.csv',`${data.name};${data.email}\n`,(err)=>console.log(err));
    console.log(`served ${req.url}`)
    res.render('profile',data)
})

app.listen(port,()=> console.log( 'server is up and running'))