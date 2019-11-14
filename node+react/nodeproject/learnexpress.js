const express = require ('express')

const app=express();
app.use(express.static('public'))
app.get('/',(req,res) =>{

    res.send('hello world');

});
app.get('/contact',(req,res) =>{

    res.send('this is contact page');

});
app.get('/aboutUs',(req,res) =>{

    res.send('this is about Us');

});



app.listen(5000, () => console.log('server is running'))