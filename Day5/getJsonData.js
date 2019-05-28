
  
    function GetJsonFromUrl(anyUrl){
        var Httpreq = new XMLHttpRequest(); // a new request
        Httpreq.open("GET",anyUrl,false);
        Httpreq.send(null);
        return Httpreq.responseText;          
    }
    function displayJsonData(JsonObject){
       
       // var obj = JSON.parse(localStorage.getItem('myStorage2'));
        var URL_JSON_DATA=[];
        // function Get(anyUrl){
          
        //         var Httpreq = new XMLHttpRequest(); // a new request
        //         Httpreq.open("GET",anyUrl,false);
        //         Httpreq.send(null);
        //         return Httpreq.responseText;          
        //     }
             for(let i=0;i<10;i++){
                 URL_JSON_DATA[i] = JSON.parse(GetJsonFromUrl("https://hacker-news.firebaseio.com/v0/item/"+JsonObject[i]+".json?print=pretty"));
            }
            var tableString = "<table border=2px class='blueTable'>",
        body = document.getElementsByTagName('body')[0],
        div = document.createElement('div');
        tableString += "<tr>";
    tableString += "<th>ID </th>";
    tableString += "<th>Title</th>";
    tableString += "<th>URL</th>";
    tableString += "</tr>";
    for (row = 1; row < URL_JSON_DATA.length; row += 1) {
    
        tableString += "<tr>";
    
        
    
            tableString += "<td>" + URL_JSON_DATA[row].id +"</td>";
            tableString += "<td>" + URL_JSON_DATA[row].title +"</td>";
            tableString += "<td>" + URL_JSON_DATA[row].url +"</td>";
        tableString += "</tr>";
    }
    
    tableString += "</table>";
    div.innerHTML = tableString;
    body.appendChild(div);
    }

    var urlToJson = JSON.parse(GetJsonFromUrl("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"));
    var urlToJson_len=urlToJson.length;
    for(let i=0;i<urlToJson_len;i++){
        console.log(urlToJson[i]);
    }
    displayJsonData(urlToJson);
    // localStorage.setItem('myStorage2', JSON.stringify(urlToJson));

