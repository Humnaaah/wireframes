function scrollFunction() {
    var horSlider = function(resize){
      var el = document.getElementsById("#slider");
      var items = document.getElementsById("#item");
      
      if(resize === true){
        el.removeAttr("style");
        items.removeAttr("style");
      }
      var width = $(items[0]).innerWidth();
      
      el.css("width", width * items.length);
      items.css("width", width);
    };
    
    horSlider();
      
    window.resize(function(){
        //alert("here")
      horSlider(true);
      
    });
  }