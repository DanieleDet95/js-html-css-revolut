$(document).ready(
  function(){

    // Al click del link fa apparire il sottomenú
    $('li').click(
      function(){
        $(this).children('.dropdown').toggleClass('active');
      }
    );

    // Passando sopra al link con il mouse fa apparire il sottomenú e i vari stili
    $('li').mouseover(
      function(){
        $(this).children('.freccia').html('&#9652;');
        $(this).children('a').addClass('color-black');
        $(this).children('.dropdown').addClass('active');
      }
    );

    // Allontanandosi dal link con il mouse fa sparire il sottomenú e i vari stili
    $('li').mouseout(
      function(){
        $(this).children('.freccia').html('&#9662;');
        $(this).children('a').removeClass('color-black');
        $(this).children('.dropdown').removeClass('active');
      }
    );

    // Passando sopra al link del sottomenu con il mouse fa apparire i vari stili
    $('.item').mouseover(
      function(){
        $(this).children('a').addClass('background-gray');
      }
    );

    // Allontanandosi da sopra ai link del sottomenu con il mouse fa apparire i vari stili
    $('.item').mouseout(
      function(){
        $(this).children('a').removeClass('background-gray');
      }
    );

  }
);
