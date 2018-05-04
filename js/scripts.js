$(document).ready(function(){
  $("#ping-pong").submit(function(event){
  event.preventDefault();
  $("results").empty();
  var pong=parseInt($("input#pong").val());
  var results=countUp(pong)
});

alert(Enter a number);
