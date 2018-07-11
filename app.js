var answerText = document.getElementById("answerText");
var clear = document.getElementById("clear");
var negative = document.getElementById("negative");
var percent = document.getElementById("percent");
var divide = document.getElementById("divide");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var multiply = document.getElementById("multiply");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var subtract = document.getElementById("subtract");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var addition = document.getElementById("plus");
var zero = document.getElementById("zero");
var decimal = document.getElementById("decimal");
var equals = document.getElementById("equals");
var total = 0;
var equationTracker = "";
var preTotal = "";


var addNumber = function(){
  equationTracker = equationTracker + this.firstChild.nodeValue;
  if (isNaN(preTotal[preTotal.length - 1]) == true && preTotal[preTotal.length - 1] != "."){
    preTotal = this.firstChild.nodeValue;
  } else {
    preTotal = preTotal + this.firstChild.nodeValue;
  }
  answerText.innerHTML = preTotal;
  console.log(preTotal);
}
var addSymbol = function(){
  if (preTotal[0] != undefined && isNaN(preTotal[preTotal.length - 1]) == false){
    preTotal = this.firstChild.nodeValue;
    if (this.firstChild.nodeValue == "x") {
      equationTracker = equationTracker + "*"
    } else if (this.firstChild.nodeValue == "÷") { 
      equationTracker = equationTracker + "/"
    } else {
      equationTracker = equationTracker + this.firstChild.nodeValue;
    }
    answerText.innerHTML = preTotal;
    console.log(preTotal);
    console.log(equationTracker);
  }
}

var clearScreen = function(){
  preTotal = "";
  total = 0;
  answerText.innerHTML = 0;
  equationTracker = ""
}

var doMath = function(){
  var answer  = eval(equationTracker);
  answerText.innerHTML = answer;
  console.log(answer);
  equationTracker = answer;
}



one.addEventListener("click", addNumber);
two.addEventListener("click", addNumber);
three.addEventListener("click", addNumber);
four.addEventListener("click", addNumber);
five.addEventListener("click", addNumber);
six.addEventListener("click", addNumber);
seven.addEventListener("click", addNumber);
eight.addEventListener("click", addNumber);
nine.addEventListener("click", addNumber);
zero.addEventListener("click", addNumber);
addition.addEventListener("click", addSymbol);
subtract.addEventListener("click", addSymbol);
divide.addEventListener("click", addSymbol);
decimal.addEventListener("click", addNumber);
multiply.addEventListener("click", addSymbol);
clear.addEventListener("click", clearScreen);
equals.addEventListener("click", doMath)