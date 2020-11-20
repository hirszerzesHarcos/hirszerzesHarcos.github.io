function start(){
  document.getElementsByTagName("footer")[0].innerHTML="<p>width: "+screen.width+" ; height: "+screen.height+"</p>";
}
function nyitNav(){
  document.getElementsByTagName("nav").style.width="100%";
}
function zarNav(){
  document.getElementsByTagName("nav").style.width="0%";
}
window.addEventListener("load",start);