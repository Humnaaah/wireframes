$(document).ready(function(){
    $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).stop( true, true ).slideDown("fast");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).stop( true, true ).slideUp("fast");
            $(this).toggleClass('open');       
        }
    );
    jQuery(document).on('click', '.dropdown-menu', function(e) {
        e.stopPropagation()
      });
    
});

//   var $myGroup = $('#ToggleShop');
//     $myGroup.on('show','.collapse', function() {
//         $myGroup.find('.collapse.in').collapse('hide');
//     });
    $(document).click(function(e) {
        if (!$(e.target).is('.collapse-body')) {
            $('.collapse').collapse('hide');	    
        }
    });