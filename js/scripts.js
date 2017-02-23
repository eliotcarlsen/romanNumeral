function romanNumeral(input){
  var onesPlace = [" ","I","II","III","IV","V","VI","VII","VIII","IX"];
  var tensPlace = [" ","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
  var hundredsPlace = [" ","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
  var thousandsPlace = [" ","M","MM","MMM"]


  console.log(input);
  //debugger;
  for(index = 0; index <= input.length; index ++){
    if (input.length === 1){
      return onesPlace[input];
      console.log(input);
    } else if (input.length === 2){
      return tensPlace[input[0]] + onesPlace[input[1]];
      console.log(input);
    } else if (input.length === 3){
      return hundredsPlace[input[0]] + tensPlace[input[1]] + onesPlace[input[2]];
      console.log(input);
    } else if (input.length === 4){
      return thousandsPlace[input[0]] + hundredsPlace[input[1]] + tensPlace[input[2]] + onesPlace[input[3]];
      console.log(input);
    };
  };
};







$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $(".userInput").val().split("");
    var result = romanNumeral(userInput);
    $(".romanNumeral").text(result);
  });
});
