const express = require('express')
const port = 2000;
const fs = require('fs');
const app = express();
const cors =require('cors')
// const md5 =require('md5')
const bodyParser = require('body-parser')
// var jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })
 
app.use(cors())
app.use(express.json())
app.use(bodyParser.json());

//user validation only
app.post('/login',urlencodedParser,async (req,res)=>{
    const username=req.body.username
    const hpwd = req.body.hash
    console.log(username, hpwd)
    
// console.log(req.query.username)
    try{
        
        fs.readFile(__dirname+"/accounts.csv","utf8",(error,data)=>{
            if(error) throw error
            if(data){
                const arr=data.split('\n');
                for (let i=0; i<arr.length;i++)  {
                    let data =arr[i].split(',');
                    if(username === data[0] && hpwd === data[1]){
                        
                        res.json({
                            'status':200,
                            'msg':'Login user name and paswword match'
                        })

                    }else{
                        if(username === data[0] && hpwd === data[1]){
                            res.json({
                                'status':400,
                                'msg':"Login user name and paswword didn't match"
                            })
                    }

                 } }
            }
        })

        // console.log(__dirname+`/${username}.csv`)
    }catch(error){
        console.log(error)
    }
})
//return list according to username
app.get('/get',(req,res)=>{
    var jsondata ={
        data:[]
    }
    const usr= req.query.usr
    if (fs.existsSync(__dirname+`/${usr}.csv`)) {
        fs.readFile(__dirname+`/${usr}.csv`,'utf8',(err,data)=>{
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

});

app.listen(port,()=> console.log( 'server is up and running'))