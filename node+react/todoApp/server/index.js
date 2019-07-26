const express = require('express')
const port = 2000;
const fs = require('fs');
const app = express();
const cors = require('cors')
// const md5 =require('md5')
const bodyParser = require('body-parser')
// var jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(cors())
app.use(express.json())
app.use(bodyParser.json());

//user validation only
app.post('/login', urlencodedParser, async (req, res) => {//login post
    const username = req.body.username
    const hpwd = req.body.hash
    console.log(username, hpwd)
    var ch = false
    // console.log(req.query.username)
    try {// try
        fs.readFile(__dirname + "/accounts.csv", "utf8", (error, data) => {//read file
            if (error) throw error// if error
            if (data) {//if data
                const arr = data.split('\n');
                for (let i = 0; i < arr.length; i++) { //for
                    var newData = arr[i].split(',');
                    if (username === newData[0] && hpwd === newData[1]) {// if username and password
                        res.json({//res.json
                            'status': 200,
                            'msg': 'Login user name and paswword match'
                        })//end of res.json
                        ch = true//set true.
                    }//end of if username and password 
                }//end of for
            }//end of if data
            if (ch === false) {//if ch
                res.json({//res.json
                    'status': 400,
                    'msg': "Login user name and paswword didn't match"
                })//end of res.json
            }//end of if ch
        })//end of read file

    }//end of try
    catch (error) {//catch
        console.log(error)
    }//end of catch
})//end of login post

app.get('/delete', (req, res) => {//get getlist
    var datas =[]
    const usr = req.query.usr
    const idx = req.query.idx
    
    console.log(usr)
    
        fs.readFile(__dirname + `/${usr}.csv`, 'utf8', (err, data) => {//read file
            if (err) throw err;
            if (data) {//if data
                const arr = data.split('\n');
                var i=0;
                arr.forEach((value,id)=> {//array foreach
                    
                         datas[i] = value;
                         i++; 
                    
                });//end of arrar for each
                fs.unlink(__dirname + `/${usr}.csv`, function (err ){//unlink
                    console.log(err)
                })//end of unlink
                datas.splice(idx,1)
                datas.forEach(value=>{//data foreach
                    fs.appendFile(__dirname + `/${usr}.csv`, value+'\n', err=>{
                        console.log(err)
                    });
                })//end of data foreach
                
                res.json({ //res.json
                    'status': 200,
                    'msg': 'Delete Sucessfull'
                }); //end of res.json
            }//end of if data
            else console.log('empty files');
        })//end of read file
});//end get getlist


//return list according to username
app.get('/get', (req, res) => {//get getlist
    var jsondata = {//jsondaa
        data: []
    }//end jsondata
    const usr = req.query.usr
    console.log(usr)
    if (fs.existsSync(__dirname + `/${usr}.csv`)) { //if file exists
        fs.readFile(__dirname + `/${usr}.csv`, 'utf8', (err, data) => {//read file
            if (err) throw err;
            if (data) {//if data
                const arr = data.split('\n');
                arr.forEach(value => {//array foreach
                    if (value !== "") {//if value
                        let data = value.split(',');
                        // let data=value.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);
                        let title = data[0];
                        let flag = data[1];
                        jsondata.data.push({//jsondata push
                            'title': title,
                            'flag': flag
                        });//end of json data push
                    }//end of if value 
                });//end of arrar for each
                console.log(jsondata.data[0].title)
                res.json(jsondata.data)
            }//end of if data
            else console.log('empty files');
        })//end of read file
    }//end if file exists
    else {//else
        console.log("there is no file")
    }//end else

});//end get getlist
app.get('/check', (req, res) => {// get check
    fs.readFile(__dirname + "/jidesh.csv", "utf8", (err, data) => { //read file
        if (err) throw err //if error 
        if (data) {// if data
            var i = 0;
            const el = [];
            const arr = data.split('\n')

            arr.map(Element => { //array map
                if (Element !== "") {// if element
                    el[i] = Element
                    i++
                }//end if element
            })//end array map
            res.json(el);
        }//end if data
    })
})//end get check
app.post('/save', urlencodedParser, async (req, res) => {// post save
    const list = req.body.newList
    const usr = req.body.username

    fs.appendFile(__dirname + `/${usr}.csv`, `\n${list},0`, (err) => {//append file
        if (err) throw err;
        else res.json({ //else
            'status': 200,
            'msg': 'Saving Sucessfull'
        }); //end else
    })//end append file
});//end post save
app.post('/reg', urlencodedParser, async (req, res) => {//post registration 
    const usr = req.body.username
    const hpwd = req.body.hash
    console.log(usr, hpwd)
    if (fs.existsSync(__dirname + `/accounts.csv`)) {// main if
        fs.readFile(__dirname + "/accounts.csv", "utf8", (error, data) => {//fs file read
            var ch = false;
            if (error) throw error
            if (data) {//if data comes
                //checking user name duplication
                const arr = data.split('\n');
                for (let i = 0; i < arr.length; i++) { //looping to array if data
                    var newData = arr[i].split(',');// splitting by ','
                    if (usr === newData[0]) { //if user match
                        res.json({
                            'status': 400,
                            'msg': 'UserName is Already Exits!!!!'
                        })
                        ch = true;

                    }//end if user match 
                    else { // else user
                        /////

                    }//end else user
                }//end for loop
                if (ch !== true) { //if ch
                    fs.appendFile(__dirname + `/accounts.csv`, `\n${usr},${hpwd}`, (err) => { //file data append
                        if (err) throw err; // if error occure
                        else { //else 
                            res.json({
                                'status': 200,
                                'msg': 'Account Created Sucessfull',
                            });
                        } // end of else
                    });//end file data append
                }//end of if ch
            }//end-if data comes
        });//end of fs file read
    }//end of if
});// end of post registration 


app.listen(port, () => console.log('server is up and running'))