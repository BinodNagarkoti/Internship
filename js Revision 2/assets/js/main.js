function congrats(){
 alert("Congrats. You are an Idiot")
removeDummy();
}
const no = document.getElementById("no");
no.onmouseover = logNoMouseOver;
no.onmouseout = logNoMouseOut;
function logNoMouseOver() {
    no.innerHTML = "Yes ofCourse";
  
  }
  
  function logNoMouseOut() {
    no.innerHTML = "No";
  
  }
function removeDummy() {
    var elem = document.getElementById('target');
    var elem = document.getElementById('target');
    elem.style.opacity = '0';
    setTimeout(function(){elem.parentNode.removeChild(elem)}, 1000);
    return false;
}
  
  