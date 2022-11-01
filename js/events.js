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
        controls.toggleBgAudioButtonSelection(forestSoundButton);
        sounds.handleBgAudio(forestSoundButton, "forest");
    })

    rainSoundButton.addEventListener('click', () => {
        controls.toggleBgAudioButtonSelection(rainSoundButton);
        sounds.handleBgAudio(rainSoundButton, "rain");
    })

    coffeeSoundButton.addEventListener('click', () => {
        controls.toggleBgAudioButtonSelection(coffeeSoundButton);
        sounds.handleBgAudio(coffeeSoundButton, "coffee");
    })

    fireplaceSoundButton.addEventListener('click', () => {
        controls.toggleBgAudioButtonSelection(fireplaceSoundButton);
        sounds.handleBgAudio(fireplaceSoundButton, "fireplace");
    })
}