const express = require('express')
const port = 2000;
const fs = require('fs');
const app = express();
const cors =require('cors')
app.use(cors())
app.use(express.json())


app.get('/get',async (req,res)=>{
    console.log(req.query.user)
    var jsondata ={
        data:[]
    }
// console.log(req.query.username)
    try{
        console.log(__dirname+`/${req.query.user}.csv`)
        if (fs.existsSync(__dirname+`/${req.query.user}.csv`)) {
            fs.readFile(__dirname+`/${req.query.user}.csv`,'utf8',(err,data)=>{
                if(err)  throw err;
                if(data) {
                   const arr=data.split('\n');
                    arr.forEach(value => {
                        let data =value.split(',');
                        // let data=value.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);
                        let title = data[0];
                        let flag = data[1];
                        jsondata.data.push({
                                'title' : title,
                                'flag' : flag
                            });
                    });
                    console.log(jsondata.data[0].title)
                    res.json(jsondata.data)
                }
                else console.log('empty files');
            })
          }else{
              console.log("there is no file")
          }
    }catch(error){
        console.log(error)
    }
})
app.listen(port,()=> console.log( 'server is up and running'))