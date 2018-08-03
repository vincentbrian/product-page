// $(".menuDrop").click(function(){
//     $(".nav").slideToggle("slow");
//     $(".menuDrop").toggleClass("btn-hover");
// });

// $(".hamburger").click(function(){
//   // alert("hello");
//   $(".navbar-links").toggle("slide",500);
//
// });
$(".hamburger").click(function(){
    $(".navbar-links > ul").slideToggle();
});
