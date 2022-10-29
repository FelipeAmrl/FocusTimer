import {
    minutesDisplay,
    playButton,
    pauseButton,
    stopButton,
    increaseButton,
    decreaseButton
} from './elements.js'

export default function({
    controls,
    timer
}){
    playButton.addEventListener('click', () => {
        controls.play();
        timer.countdown();
    })
    
    pauseButton.addEventListener('click', () => {
        controls.reset();
        timer.stopCountdown();
    })
    
    stopButton.addEventListener('click', () => {
        controls.reset();
        timer.stopCountdown();
        timer.updateDisplay();
    })
    
    increaseButton.addEventListener('click', () => {
        let minutes = Number(minutesDisplay.textContent);
        minutes = minutes + 5;
        let currentSeconds = timer.getCurrentSeconds();
        timer.updateDisplay(minutes, currentSeconds);
    })
    
    decreaseButton.addEventListener('click', () => {
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
}