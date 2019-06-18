// Get the modal


var modal = document.getElementById("id01");
var modal2 = document.getElementById("modal-content");
const no = document.getElementById("no");
const yes = document.getElementById("yes");
yes.onmouseover = logYesMouseOver;
yes.onmouseour = logYesMouseOut;

no.onmouseover = logNoMouseOver;
no.onmouseout = logNoMouseOut;
///No

  

function logNoMouseOver() {
  no.innerHTML = "Yes ofCourse";

}

function logNoMouseOut() {
  no.innerHTML = "No";

}

/////yes
function logYesMouseOver() {
  yes.disabled = true;
  yes.style = "cursor:no-drop";
}

function logYesMouseOut() {
  yes.disabled = false;
}

window.onload = openModel;
function openModel() {
  document.getElementById("id01").style.display = "block";
}


