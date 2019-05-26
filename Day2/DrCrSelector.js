// window.scope = {};
var col1;
var col2;
var col3;
var col4;
var col5;
var drJSON;
function getDr() {
    var i = 0;
    var drjson = [];
    for (i = 1; i <= 5; i++) {
        var getvalue = document.getElementById("dr" + i);
        if (getvalue.value != 0) {
            col1 = document.getElementById("sn" + i).value;
            col2 = document.getElementById("rf" + i).value;
            col3 = document.getElementById("particular" + i).value;
            col4 = document.getElementById("dr" + i).value;            // var col5=document.getElementById(cr).value;
            col5 = document.getElementById("ta" + i).value;

            drjson[i] = { sn: col1, rf: col2, particular: col3, dr: col4, ta: col5 };
        }
        
    }
    // var drJSON= JSON.stringify(drjson);
    localStorage.setItem('myStorage', JSON.stringify(drjson));
    console.log(drJSON);
    window.location.assign("DrFromLedger.html")
    // self.location("DrFromJournal.html");
}

function getCr() {
    var i = 0;
    var crjson = [];
    for (i = 1; i <= 5; i++) {
        var getvalue = document.getElementById("cr" + i);
        if (getvalue.value != 0) {
            col1 = document.getElementById("sn" + i).value;
            col2 = document.getElementById("rf" + i).value;
            col3 = document.getElementById("particular" + i).value;
            col4 = document.getElementById("cr" + i).value;
            col5 = document.getElementById("ta" + i).value;
            console, console.log(col1, col2, col3, col4, col5);
            crjson[i] = { sn: col1, rf: col2, particular: col3, cr: col4, ta: col5 };

        }
    }
    localStorage.setItem('myStorage2', JSON.stringify(crjson));
    
    window.location.assign("CrFromLedger.html");

}

