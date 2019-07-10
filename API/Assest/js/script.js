const lat =document.getElementById("lat");
const lon =document.getElementById("lon");
setInterval(geoLocation,10000);
//  fetch("https://api.wheretheiss.at/v1/satellites/25544").then(response =>{
// return response;
// }  ).then(data =>{ 
//     const jsonData= data.json();
//     return jsonData;

// }).then (dataInJson=>{
// console.table(dataInJson);
// lat.innerHTML=dataInJson.latitude;
// lon.innerHTML=dataInJson.longitude;
// }).catch(error=> console.log(error))

async function geoLocation() {
    const response = await fetch("https://api.wheretheiss.at/v1/satellites/25544")
    const jsondata = await response.json();
console.log(jsondata);
({latitude,longitude} = jsondata);
    lat.value=latitude;
    lon.value=longitude;
    }