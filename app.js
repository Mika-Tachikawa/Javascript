  // jQueryプログラムの内容
  //省略形　本当は(document).ready(function () {
$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color','red');
  });
});