// Portfolio filter
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, element) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  element.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// * --------------------JS for Small-Screen---------------------- */

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  document.getElementById("sidemenu").style.right = "0"; // Ensure the menu opens
}


function closemenu(){
  sidemenu.style.right = "-200px";
}
