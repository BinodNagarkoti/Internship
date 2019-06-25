const latitude = document.getElementById("lat");
const longitude = document.getElementById("lon");
const id = document.getElementById("id");
const name = document.getElementById("name");
const timeZone = document.getElementById("timeZone");
const country = document.getElementById("country");
const mapuri = document.getElementById("mapuri");

setInterval(geoLocation,9000);
async function geoLocation( ){
   const response =await fetch("https://api.wheretheiss.at/v1/satellites/25544");

    const jsonData= await response.json();
    id.innerHTML=jsonData.id;
    name.innerHTML=jsonData.name;

    latitude.innerHTML=jsonData.latitude;
    longitude.innerHTML=jsonData.longitude;

    
    const shorturi ="https://api.wheretheiss.at/v1/coordinates/";
    var fulluri= shorturi.concat(jsonData.latitude,',',jsonData.longitude)
    const secresponse = await fetch(fulluri);
    const secjsonData= await secresponse.json();
    console.table(secjsonData)
    const msp = secjsonData.map_url;
    const timezone_id= secjsonData.timezone_id;
    const country_code= secjsonData.country_code;
    timeZone.innerHTML=timezone_id;
    country.innerHTML=country_code;
    mapuri.href=msp;

}