//code for subscribe button
let btnClick= ()=>{
let promise= new Promise(
(resolve,reject)=>{

    if(document.getElementById("btn").value=="Subscribe"){
        resolve("Subscribed");
    }else{
reject("UnSubscribed");
    }
}
);
promise.then((message)=>{

    document.getElementById("msg").innerHTML="You are now "+message+". Click on bell icon to get notify" ;
    reset();

    console.log("You are now "+message);
    console.log("Click on bell icon to get notify");
    document.getElementById("btn").value="UnSubscribe";
    document.getElementById("btn").classList.add("UnSubscribe");
    document.getElementById("btn").classList.remove("Subscribe");
}).catch((message)=>{
    document.getElementById("msg").innerHTML="You are now "+message;
    reset();
   
    console.log("You are now "+message);
    document.getElementById("btn").value="Subscribe";
    document.getElementById("btn").classList.add("Subscribe");
    document.getElementById("btn").classList.remove("UnSubscribe");
})

}
let reset=()=>{
    setTimeout(  () => {     document.getElementById("msg").innerHTML='';  },  2 * 1000);
}
//code for bell icon
let iconClick= ()=>{
    let promise= new Promise(
    (resolve,reject)=>{
        if(document.getElementById("icon").value==="notifyme"){
            resolve("On");
        }else{
            reject("Off");
        }
    }
    );
    
    promise.then((message)=>{
        document.getElementById("msg").innerHTML="Notification is "+message;//showing msg
        reset();//resetting msg
        console.log("Notification is "+message);
        document.getElementById("icon").value="Unnotifyme";//setting value
        document.getElementById("icon").src="on.png";//adding on.png



    }).catch((message)=>{
        document.getElementById("msg").innerHTML="Notification is "+message;
        reset();
        console.log("Notification is "+message);
        document.getElementById("icon").value="notifyme";//setting value
        document.getElementById("icon").src="off.png";//adding off png

    })
    
    }
    