$(document).ready(function(){
  $("#userInput").submit(function(event){
  event.preventDefault();
  $("output").empty();
  var countTo=parseInt($("input#countTo").val());
  var output=countUp(countTo)
});
var numbers=[1,2,3,4,5,6,7,8,9];
alert(Enter a number);
