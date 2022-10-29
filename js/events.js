import {
    minutesDisplay,
    playButton,
    pauseButton,
    stopButton,
    increaseButton,
    decreaseButton,
    forestSoundButton,
    coffeeSoundButton,
    rainSoundButton,
    fireplaceSoundButton
} from './elements.js'

export default function({
    controls,
    timer,
    sounds
}){
    playButton.addEventListener('click', () => {
        sounds.buttonPressed();
        controls.play();
        timer.countdown();
    })
    
    pauseButton.addEventListener('click', () => {
        sounds.buttonPressed();
        controls.reset();
        timer.stopCountdown();
    })
    
    stopButton.addEventListener('click', () => {
        sounds.buttonPressed();
        controls.reset();
        timer.stopCountdown();
        timer.updateDisplay();
        sounds.pauseBgAudio();
    })
    
    increaseButton.addEventListener('click', () => {
        sounds.buttonPressed();
        let minutes = Number(minutesDisplay.textContent);
        minutes = minutes + 5;
        let currentSeconds = timer.getCurrentSeconds();
        timer.updateDisplay(minutes, currentSeconds);
    })
    
    decreaseButton.addEventListener('click', () => {
        sounds.buttonPressed();

        let minutes = Number(minutesDisplay.textContent);
    
        if((minutes - 5) <= 0 && minutes > 0)
        {
            minutes = minutes - 1;
        }
        else if(minutes > 0)
        {
            minutes = minutes - 5;
        }
    
        let currentSeconds = timer.getCurrentSeconds();
        timer.updateDisplay(minutes, currentSeconds);
    })

    forestSoundButton.addEventListener('click', () => {
        sounds.pauseBgAudio();
        sounds.playBgAudio("forest");
    })

    rainSoundButton.addEventListener('click', () => {
        sounds.pauseBgAudio();
        sounds.playBgAudio("rain");
    })

    coffeeSoundButton.addEventListener('click', () => {
        sounds.pauseBgAudio();
        sounds.playBgAudio("coffee");
    })

    fireplaceSoundButton.addEventListener('click', () => {
        sounds.pauseBgAudio();
        sounds.playBgAudio("fireplace");
    })
}