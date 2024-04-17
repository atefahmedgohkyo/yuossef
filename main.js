window.addEventListener("resize", function() {
  var width = window.innerWidth;
  if (width >= 900) {
    document.getElementById("pen").src = "00.png";
  } else {
     document.getElementById("pen").src = "0.png";
   }
  
});
function imgs() {
if(width > 900) {
 document.getElementById("pen").src = "00.png";
  } else {
     document.getElementById("pen").src = "0.png";
   }

}
function changeColor(button) {
  if (button.offsetTop > 1500) {
    button.style.color = "#000";
    button.style.background = "#545454";
    document.getElementById('pr').style.background = "#000"
  }
}
document.querySelectorAll(".button").forEach(changeColor);
























function showmymasseg(){
 
}
