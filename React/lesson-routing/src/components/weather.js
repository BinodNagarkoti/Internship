import React from 'react';
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContentText from '@material-ui/core/DialogContentText'
import Slide from'@material-ui/core/Slide'

const Transition =React.forwardRef(function Transition(props, ref){
    return <Slide direction ="up" ref={ref} {...props}/>
});
export default function AlertDialog() {
    var msg='';
    const [open,setOpen] = React.useState(false);
 
    function handleClickOpen(){
        setOpen(true)
    }

    function handleClose() {
        msg='Click on the get location access to show weather information';
        setOpen(false)
     
    }

    var url ="https://api.darksky.net/forecast/255e3d3bc769965fcfc7e4e3e3473879/";
    function getLocation() {
    if (navigator.geolocation) {
        
        navigator.geolocation.getCurrentPosition(updatePosition)
    } else {
    //   x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  getLocation();
  function updatePosition(position) {
    url = `${url}${position.coords.latitude},${position.coords.longitude}?units=ca  `; 
    fetch(url).then(response=>{
        return response.json();
        }).then(data=>{
            document.getElementById('timezone').innerHTML=data.timezone
            document.getElementById('temperature').innerHTML=data.currently.temperature
            document.getElementById('summary').innerHTML=data.currently.summary
            document.getElementById('airpressure').innerHTML=data.currently.pressure
            document.getElementById('humidity').innerHTML=data.currently.humidity
            console.log(`TIme Zone: ${data.timezone}`)
            console.log(`Current Temperature: ${data.currently.temperature}`)
            console.log(`Current Summary: ${data.currently.summary}`)
            console.log(`Current Air Pressure: ${data.currently.pressure}`)
            console.log(`Current humidity: ${data.currently.humidity}`)
            console.log(`Current Icon : ${data.currently.icon}`)
            console.log(data)

        }); 

    }
    

      return (
        <div>
      
        <p> 
             Time Zone: <span id="timezone"> </span>
        </p>
        <p> 
            Temperature:  <span id="temperature"> </span>&deg; C
        </p>
        <p> 
            Forcast: <span id="summary"> </span>
        </p>
        <p> 
            Air Pressure: <span id="airpressure"> </span>
        </p>
        <p> 
             Humidity: <span id="humidity"> </span>
        </p>
        {msg}
          <Dialog 
          open={open}
          onClose={handleClose}
          TransitionComponent ={Transition}
          aria-labelledby = "alert-dialog-title"
          aria-describedby = "alert-dialog-descripton" >
            <DialogTitle id="alert-dialog-title">Click Agree, To let this App use your  Location Co-ordinates?</DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">

              Allowing Location permisiion helps us to get accurate data .
            </DialogContentText>
            </DialogContent>

            <DialogActions >
              <Button type='button' onClick={getLocation} color="primary" colored="true">Agree</Button>
              <Button type='button' onClick={handleClose} color="primary" colored="true" autoFocus>Disagree</Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    
  }
  