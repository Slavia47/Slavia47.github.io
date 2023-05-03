var hc = document.getElementById("highContrast");// creates a veriable from html id
var tn = document.getElementById("topnav")
var bm = document.getElementById("bottom")
var sn = document.getElementById("sidenav")
var fr = document.getElementById("flex-item-center")
var ae = document.getElementById("rightbar")

hc.addEventListener("click", function() {// check if button clicked
  tn.classList.toggle("high-contrast")// changes the css styles that are applied
  bm.classList.toggle("bottom")
  sn.classList.toggle("sidenav")
  fr.classList.toggle("flex-item-center")
  ae.classList.toggle("rightbar")
});