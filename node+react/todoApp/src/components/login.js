import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Redirect } from "react-router-dom";

class Login extends React.Component{
    constructor() {
        super()
        this.state = {
            accessToList : false,
            Username:'',
            msg:''
        }
        this.auth = this.auth.bind(this);

      }

//     state={
//         toTodoList: false,
//     }
   
//       allowOrNot = (status)=>{
          
//         this.setState(() => ({
//             toTodoList: status
//           }))
//       }
    auth(authFn){
        const value=authFn();  
        if(value !== false){
        // console.log(value)
        this.setState({ accessToList : true,Username:value,msg:`Howdy, ${value}`});
        }else{
            this.setState({ accessToList : value,Username:'',msg: "sorry Username and password doesn't match",});
        }
    }

     render(){
//     //    const useStyles = makeStyles(theme => ({
//     //         container: {
//     //           display: "flex",
//     //           flexWrap: "wrap"
//     //         },
//     //         textField: {
//     //           marginLeft: theme.spacing(1),
//     //           marginRight: theme.spacing(1)
//     //         }
//     //       }));
// //   const classes = useStyles();
//   const [username, setUserName] = React.useState({
//     username: ""
//   });
//   const [password, setPassword] = React.useState({
//     password: ""
//   });
if (this.state.accessToList === true) {
    return <Redirect to={{
                            pathname:'/todoapp',
                            state:{msg:this.state.msg,
                                usr:this.state.Username,
                            }
                        }} />
  }else{

  }

  function checkCredentials() {
    const username=document.getElementById('outlined-username').value
    const password = document.getElementById('outlined-password-input').value
          if (username === "binod" && password === "binod") {
            return username
            //this.handleLogin(document.getElementById('outlined-username').value)
            } else {
                console.log("error");
                return false
            }
  }
//   if (this.state.toTodoList === true) {
//     return <Redirect to='/todoapp' />
//   }
//   const handleUserName = username => event => {
//     setUserName({ ...username, [username]: event.target.value });
//   };
//   const handlePassword = password => event => {
//     setPassword({ ...password, [password]: event.target.value });
//   };
  return (
    <div>
      <form className='container' style={{  display: "flex",flexWrap: "wrap"}} noValidate autoComplete="off">
        <div>
            {this.state.msg}
          <TextField
            id="outlined-username"
            label="Username"
            style={{ marginRight:'1px', marginLeft:'1px'}}
            margin="normal"
            type="text"

            variant="outlined"
          />
        </div>
        <div>
          <TextField
            id="outlined-password-input"
            label="Password"
            style={{marginRight:'1px', marginLeft:'1px'}}
            type="password"
     
            margin="normal"
            variant="outlined"
          />
        </div>
      </form>
      <button onClick={this.auth.bind(this, checkCredentials)}>Login</button>
    </div>
  );
  }
}
export default Login;
