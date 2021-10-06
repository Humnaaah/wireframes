// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.boxShadow = "-4px -3px 50px -23px rgb(0 0 0 / 35%)";
    document.getElementById("navbar").style.height = "65px";
    document.getElementById("logo").style.height = "30px";
    document.getElementById("logo").style.marginBottom = "16px";
  } else {
    document.getElementById("navbar").style.height = "100px";
    document.getElementById("logo").style.height = "65px";
    document.getElementById("navbar").style.borderBottom = "1px solid white";
    document.getElementById("logo").style.marginBottom = "5px";
  }
}