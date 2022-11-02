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
    fireplaceSoundButton,
    forestVolume,
    rainVolume,
    coffeeVolume,
    fireplaceVolume,
    darkModeButton,
    lightModeButton
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
        if(sounds.volumeHasChanged)
        {
            sounds.volumeHasChanged = false;
            return;
        }
        
        sounds.resetBgAudioVolume("forest");
        controls.toggleBgAudioButtonSelection(forestSoundButton);
        sounds.handleBgAudio(forestSoundButton, "forest");
    })

    rainSoundButton.addEventListener('click', () => {
        if(sounds.volumeHasChanged)
        {
            sounds.volumeHasChanged = false;
            return;
        }

        sounds.resetBgAudioVolume("rain");
        controls.toggleBgAudioButtonSelection(rainSoundButton);
        sounds.handleBgAudio(rainSoundButton, "rain");
    })

    coffeeSoundButton.addEventListener('click', () => {
        if(sounds.volumeHasChanged)
        {
            sounds.volumeHasChanged = false;
            return;
        }
        
        sounds.resetBgAudioVolume("coffee");
        controls.toggleBgAudioButtonSelection(coffeeSoundButton);
        sounds.handleBgAudio(coffeeSoundButton, "coffee");
    })

    fireplaceSoundButton.addEventListener('click', () => {
        if(sounds.volumeHasChanged)
        {
            sounds.volumeHasChanged = false;
            return;
        }
        
        sounds.resetBgAudioVolume("fireplace");
        controls.toggleBgAudioButtonSelection(fireplaceSoundButton);
        sounds.handleBgAudio(fireplaceSoundButton, "fireplace");
    })

    forestVolume.addEventListener('input', (event) => {
        let forestSound = sounds.bgAudio.forest;
        forestSound.volume = event.currentTarget.value / 100;
        sounds.volumeHasChanged = true;
    })

    rainVolume.addEventListener('input', (event) => {
        let rainSound = sounds.bgAudio.rain;
        rainSound.volume = event.currentTarget.value / 100;
        sounds.volumeHasChanged = true;
    })

    coffeeVolume.addEventListener('input', (event) => {
        let coffeeSound = sounds.bgAudio.coffee;
        coffeeSound.volume = event.currentTarget.value / 100;
        sounds.volumeHasChanged = true;
    })

    fireplaceVolume.addEventListener('input', (event) => {
        let fireplaceSound = sounds.bgAudio.fireplace;
        fireplaceSound.volume = event.currentTarget.value / 100;
        sounds.volumeHasChanged = true;
    })

    lightModeButton.addEventListener('click', () => {
        sounds.buttonPressed();
       controls.changeColorMode();
    })

    darkModeButton.addEventListener('click', () => {
        sounds.buttonPressed();
        controls.changeColorMode();
    })
}