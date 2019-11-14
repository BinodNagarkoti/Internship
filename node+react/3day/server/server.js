const express = require('express')
const axios = require('axios');
const cors =require('cors')
const port = 1000;
var result=1
const app = express();
app.use(cors())
app.use(express.json())
url='https://randomuser.me/api/'

app.get('/get',async (req,res)=>{
    try{
        result = req.query.results
        console.log(`${url}?results=${result}`)
        const response = await axios.get(`${url}?results=${result}`)
        res.json(response.data)
    }catch(error){
        console.log(error)
    }
})
app.listen(port,()=> console.log( 'server is up and running'))