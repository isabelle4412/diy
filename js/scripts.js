$(document).ready(function() {

  $('#footer').load('../footer.html');
  $('#footer').load('footer.html');
  $('#header').load('../navbar.html');

  $(".product").hide();
  $('#product_clothes').load('../vetements.html');
  $('#product_accessories').load('../accessoires.html');
  $('#product_toys').load('../jouets.html');


  $("#all").click(function(){
    $(".link").removeClass("selected");
    $(this).addClass("selected");
    $(".product").hide();
    $('#product_clothes').load('../vetements.html');
    $('#product_accessories').load('../accessoires.html');
    $('#product_toys').load('../jouets.html');
  });

  $("#clothes").click(function(){
    $(".link").removeClass("selected");
    $(this).addClass("selected");
    $(".product").hide();
    $('#product_clothes').load('../vetements.html');
  });

  $("#accessories").click(function(){
    $(".link").removeClass("selected");
    $(this).addClass("selected");
    $(".product").hide();
    $('#product_accessories').load('../accessoires.html');
  });

  $("#toys").click(function(){
      $(".link").removeClass("selected");
      $(this).addClass("selected");
      $(".product").hide();
      $('#product_toys').load('../jouets.html');
  });

});
