$(document).ready(function() {

  $('#footer').load('to_be_loaded/footer.html');
  $('#footer').load('../to_be_loaded/footer.html');

  $('#header').load('../to_be_loaded/navbar.html');

  $(".product").hide();
  $('#product_clothes').load('../to_be_loaded/vetements.html');
  $('#product_accessories').load('../to_be_loaded/accessoires.html');
  $('#product_toys').load('../to_be_loaded/jouets.html');


  $("#all").click(function(){
    $(".link").removeClass("selected");
    $(this).addClass("selected");
    $(".product").hide();
    $('#product_clothes').load('../to_be_loaded/vetements.html');
    $('#product_accessories').load('../to_be_loaded/accessoires.html');
    $('#product_toys').load('../to_be_loaded/jouets.html');
  });

  $("#clothes").click(function(){
    $(".link").removeClass("selected");
    $(this).addClass("selected");
    $(".product").hide();
    $('#product_clothes').load('../to_be_loaded/vetements.html');
  });

  $("#accessories").click(function(){
    $(".link").removeClass("selected");
    $(this).addClass("selected");
    $(".product").hide();
    $('#product_accessories').load('../to_be_loaded/accessoires.html');
  });

  $("#toys").click(function(){
      $(".link").removeClass("selected");
      $(this).addClass("selected");
      $(".product").hide();
      $('#product_toys').load('../to_be_loaded/jouets.html');
  });

});
