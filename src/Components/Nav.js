 (function onScroll (){
    var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("item").style.top = "0";
  } else {
    document.getElementById("item").style.top = "-240px";
  }
  prevScrollpos = currentScrollPos;
} 
})();