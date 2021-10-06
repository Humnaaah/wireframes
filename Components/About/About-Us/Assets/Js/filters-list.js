$(document).ready(function(){

//     $(".filter-button").click(function(){
//         var value = $(this).attr('data-filter');
        
//         if(value == "all")
//         {
//             //$('.filter').removeClass('hidden');
//             $('.filter').show('1000');
//         }
//         else
//         {
// //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
// //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
//             $(".filter").not('.'+value).hide('3000');
//             $('.filter').filter('.'+value).show('3000');
            
//         }
//     });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});
function change_popular(){
    document.getElementById("catChange").innerHTML = "Most Popular";
    document.getElementById("catsubChange").innerHTML = "Most Popular";
    document.getElementById("catsubChanged").innerHTML = "Most Popular";
   
}
function change_food(){
    document.getElementById("catChange").innerHTML = "Superfoods";
    document.getElementById("catsubChange").innerHTML = "Superfoods";
    document.getElementById("catsubChanged").innerHTML = "Superfoods";
}
function change_cbd(){
    document.getElementById("catChange").innerHTML = "CBD";
    document.getElementById("catsubChange").innerHTML = "CBD";
    document.getElementById("catsubChanged").innerHTML = "CBD";
}
function change_pain(){
    document.getElementById("catChange").innerHTML = "Pain Management";
    document.getElementById("catsubChange").innerHTML = "Pain Management";
    document.getElementById("catsubChanged").innerHTML = "Pain Management";
}
function change_beauty(){
    document.getElementById("catChange").innerHTML = "Beauty";
    document.getElementById("catsubChange").innerHTML = "Beauty";
    document.getElementById("catsubChanged").innerHTML = "Beauty";
}
function change_energy(){
    document.getElementById("catChange").innerHTML = "Energy & Focus";
    document.getElementById("catsubChange").innerHTML = "Energy & Focus";
    document.getElementById("catsubChanged").innerHTML = "Energy & Focus";
}
function change_wellness(){
    document.getElementById("catChange").innerHTML = "Wellness";
    document.getElementById("catsubChange").innerHTML = "Wellness";
    document.getElementById("catsubChanged").innerHTML = "Wellness";
}