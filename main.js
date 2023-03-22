function TocaNarracao (IdDoAudio) {
    document.querySelector(IdDoAudio).play();
    const novoAudio = document.querySelector(IdDoAudio);
    if (audioAtual != null) {
        audioAtual.pause();
      }
      novoAudio.play();
      audioAtual = novoAudio;
    }

let audioAtual = null;
const Sons = document.querySelectorAll('.tecla');



for (let contador = 0; contador < Sons.length; contador++) {

    const Som = Sons[contador]
    const time = Som.classList[1]; 
    const IdDoTime = `#som_${time}`;
    
       
    Som.onclick = function () {
        TocaNarracao (IdDoTime);
    }

    

       
}

