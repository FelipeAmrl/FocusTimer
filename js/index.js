import {
    minutesDisplay,
    secondsDisplay,
    playButton,
    pauseButton,
    stopButton,
    increaseButton,
    decreaseButton
} from './elements.js'

let minutes = Number(minutesDisplay.textContent);
let seconds = Number(secondsDisplay.textContent);
let timerTimeOut;

playButton.addEventListener('click', () => {
    play();
    countdown();
})

pauseButton.addEventListener('click', () => {
    resetControls()
    stopCountdown();
})

stopButton.addEventListener('click', () => {
    resetControls()
    stopCountdown();
    updateTimerDisplay(minutes, 0);
})

increaseButton.addEventListener('click', () => {
    let minutes = Number(minutesDisplay.textContent);
    minutes = minutes + 5;
    updateTimerDisplay(minutes, seconds);
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

    updateTimerDisplay(minutes, seconds);
})

function countdown()
{
    timerTimeOut = setTimeout(() => {
        let newMinutes = Number(minutesDisplay.textContent);
        let isFinished = newMinutes <= 0 && seconds <= 0;

        if(isFinished)
        {
            updateTimerDisplay();
            resetControls();
            return
        }

        if(seconds <= 0)
        {
            seconds = 2;
            --newMinutes;
        }

        --seconds;
        
        updateTimerDisplay(newMinutes, seconds);
        countdown();
    }, 1000)
}

function play()
{
    playButton.classList.add('hide');
    pauseButton.classList.remove('hide');
}

function resetControls()
{
    playButton.classList.remove('hide');
    pauseButton.classList.add('hide');
}

function stopCountdown()
{
    clearTimeout(timerTimeOut);
}

function updateTimerDisplay(newMinutes, seconds)
{
    newMinutes = newMinutes === undefined ? minutes : newMinutes;
    seconds = seconds === undefined  ? 0 : seconds;
    minutesDisplay.textContent = String(newMinutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
}