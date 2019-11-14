const ejs = require('ejs')
const express = require('express')
const fs =require('fs')
const app = express();
const fileUpload = require('express-fileupload')
const port = 4000;
const bodyParser = require('body-parser')
const mysql = require('mysql');
app.set('view engine', 'ejs')
var path = require('path');
app.use(fileUpload());
app.use('/assets/css',(req,res,next) =>{
    console.log('yo aako '+req.url);
    next()
})
app.use(bodyParser.json());
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public'))); 

const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/',(req,res)=>{
    res.render('index')
})

const {homePage} = require('./routes/index');
const {addPlayerPage, addPlayer, deletePlayer, editPlayer, editPlayerPage} = require('./routes/player');
app.get('/formsubmit',(req,res)=>{
    console.log(req.query.fname)
    console.log(req.query.lname)
    console.log(req.query.jnumber)
    console.log(req.query.position)
res.end();

})
//database ko object bhanako
const db = mysql.createConnection ({
    port:8080,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'fo0tsal'
});
//object lera database connect gareko
db.connect((err) => {
    if (err) throw err
    console.log('Connected to database');
});
//database lai node sever bharee global gare ko 
//aaba, db object jun file mah chalaina milcha
global.db = db;
app.get('/', homePage);
app.get('/add', addPlayerPage);
app.get('/edit/:id', editPlayerPage);
app.get('/delete/:id', deletePlayer);
app.post('/add', addPlayer);
app.post('/edit/:id', editPlayer);
app.listen(port,()=> console.log( 'server is up and running'))