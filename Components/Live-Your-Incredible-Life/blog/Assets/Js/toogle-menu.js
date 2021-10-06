$(document).ready(function(){

	$('#biogPage, #musicPage, #photosPage, #typePage').hide();
	
    $(".side-nav span a").each(function(i) {
        $(this).click(function() {
            $("#wrapper").find("div:eq('" + i + "')").show().siblings().hide();
        });
    });	
    // $(".shop-nav span a").each(function(i) {
    //     $(this).click(function() {
    //         $("#shopwrapper").find("div:eq('" + i + "')").show().siblings().hide();
    //     });
    // });	
});
$(document).click(function(e) {
	if (!$(e.target).is('.collapse-body')) {
    	$('.collapse').collapse('hide');	    
    }
});
function change_beverage(){
    document.getElementById("demo").innerHTML = "Featured Beverages";
}
function change_snacks(){
    document.getElementById("demo").innerHTML = "Featured Healthy Snacks & Treats";
}
function change_grab(){
    document.getElementById("demo").innerHTML = "Featured Grab & Go";
}
function change_baked(){
    document.getElementById("demo").innerHTML = "Featured Baked Goods";
}
function change_products(){
    document.getElementById("demo").innerHTML = "Featured CBD Products";
}
function change_salads(){
    document.getElementById("demo").innerHTML = "Featured Bowls & Salads";
}
function change_shop(){
    document.getElementById("txt").innerHTML = "Featured CBD By Category";
}
function change_shopType(){
    document.getElementById("txt").innerHTML = "Featured CBD By Type";
}
function change_need(){
    document.getElementById("txt").innerHTML = "Featured CBD By Need";
}



