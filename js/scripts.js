//Business Logic
var countUp = function(countTo){
 var result = [];
 for(var i = 1; i <= countTo; i++){
     var index = result.indexOf(i);
     if(i % 15 === 0) {
       result.splice(index, 0);
       result.push('pingpong');
     }else if(i % 5 === 0) {
       result.splice(index, 0);
       result.push('pong');
     }else if(i % 3 === 0) {
       result.splice(index, 0);
       result.push('ping');
     }else{
       result.push(i);
     }
 }

 return result;
};

//User Interface Logic
$(document).ready(function(){
 $("#userInput").submit(function(event){
   $("#final").empty();
   var countTo = parseInt($("input#countTo").val());
   var results = countUp(countTo);

   results.forEach(function(item){
     $("#results").append('<li>' + item + '</li>');
   });
   event.preventDefault();
 });
});
