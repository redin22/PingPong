//Business logic//
var countUp=function(pong){
  var result=[];
  for(var i=1;i<=pong; i++){
    var index= result.indexOf(i);
    if(i%15===0){
      result.splice(index,0);
      result.push("pingpong");
    }else if(i%5=== 0){
      result.splice(index,0);
      result.push("pong");
    }else if (i%3 === 0);{
      result.splice(index,0);
      result.push("ping");
    }else{
      result.push(i);
    }
  }
  return result;
};


//User Interface logic//

$(document).ready(function(){
  $("#ping-pong").submit(function(event){
  $("results").empty();
  var pong=parseInt($("input#pong").val());
  var results=countUp(pong);

  results.forEach(function(item){
    $("#results").append('<li>'+item+'</li>')
  });
    event.preventDefault();
});
});
