const elementHint = document.getElementById('hint')
window.SpeechRecognition = window.SpeechRecognition ||
webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "pt-br"; // a linguagem escolhido foi Português
recognition.start();// .start da ínico no reconhecimento de voz
recognition.addEventListener('result', onSpeak)

function onSpeak(e){
    const hint = e.results[0][0].transcript// pega o texto que foi falado
    showHint(hint);// o palpite e enviado para o método showHint
    valueIsValid(hint);
}

function showHint(hint){ // essa função mostra o texto que foi falado 
    elementHint.innerHTML =`
    <div>you said:</div>
    <span class="box">${hint}</span>`
}

recognition.addEventListener('end', () => recognition.start())// essa função ficará ocorrendo até o usuário acertar o número secreto
