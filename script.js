
// document.getElementsByTagName('audio');
// console.log(audios);
function playSound (e) {
    const audios = document.querySelector(`audio[data-key='${e.keyCode}']`)
    const letterDivs = document.querySelector(`.key[data-key='${e.keyCode}']`)
    if(!audios) return;
    audios.currentTime = 0;
    audios.play();
    letterDivs.classList.toggle('playing');
}

function removeTransition (e) {
    if(e.propertyName !== "transform") return;
    this.classList.remove('playing');
}


const letterDivs = document.querySelectorAll('.key');
letterDivs.forEach( key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound);

// console.log(letterDivs);
