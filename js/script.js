$(document).ready(
  function(){

    $('li').click(
      function(){
        $(this).children('.dropdown').toggleClass('active');
      }
    );

    $('li').mouseover(
      function(){
        $(this).children('.freccia').html('&#9652;');
        $(this).children('a').addClass('color-black');
        $(this).children('.dropdown').addClass('active');
      }
    );

    $('li').mouseout(
      function(){
        $(this).children('.freccia').html('&#9662;');
        $(this).children('a').removeClass('color-black');
        $(this).children('.dropdown').removeClass('active');
      }
    );

    $('.item').mouseover(
      function(){
        $(this).children('a').addClass('background-gray');
      }
    );

    $('.item').mouseout(
      function(){
        $(this).children('a').removeClass('background-gray');
      }
    );




  }
);
