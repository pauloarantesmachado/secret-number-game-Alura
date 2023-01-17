const lowerValue = 1;
const highestValue = 1000;
const secretNumber = generateNumber();
const elementLowValue = document.getElementById('lower-value')
const elementHighestValue =document.getElementById('highest-value')
elementLowValue.innerHTML = lowerValue;
elementHighestValue.innerHTML = highestValue

function generateNumber(){
 return parseInt(Math.random()*highestValue + 1);// quando adicionarmos 1 o  o maior valor tambem podera ser escolhido
} 



