function valueIsValid(hint){ // a função valida se o texto que foi falado, é um número e está ente o menor e o maior
 const numberValid = +hint;

 if(numberIsValid(numberValid)){
    elementHint.innerHTML += "<div>Number is valid</div>"
    return
 }
 if(biggerOrSmaller(numberValid)){
    elementHint.innerHTML +="<div>the number needs to be between the smallest and largest value</div>";
    return
 }

 if(numberValid === secretNumber ){
   document.body.innerHTML = `<h2>you're right!! ${numberValid}</h2>
   
   <button id="restart" class="btn-restart">Restart</button>`
 }

 else if (numberValid > secretNumber){
    elementHint.innerHTML +=`<div>The secret number is smaller <i class="fa-solid fa-arrow-down-long"></i></div>`;
 }
 else {
    elementHint.innerHTML +=`<div>The secret number is bigger <i class="fa-solid fa-arrow-up-long"></i></div>`;
 }

}

function numberIsValid(number){
    return Number.isNaN(number) // essa função valida se o texto é um número
}

function biggerOrSmaller(number){
    return lowerValue > number || number >= highestValue;
}


document.body.addEventListener('click', event => {
   const button = event.target.id 

   if(button === "restart"){
    window.location.reload() // recarrega a página 
   }
});