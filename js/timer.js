export default function({
    controls,
    sounds,
    minutesDisplay,
    secondsDisplay
})
{
    let minutes = Number(minutesDisplay.textContent);
    let seconds = Number(secondsDisplay.textContent);
    let timerTimeOut;

    function countdown()
    {
        timerTimeOut = setTimeout(() => {
            let newMinutes = Number(minutesDisplay.textContent);
            let isFinished = newMinutes <= 0 && seconds <= 0;
    
            if(isFinished)
            {
                sounds.timerEnds();
                updateDisplay();
                controls.reset();
                return
            }
    
            if(seconds <= 0)
            {
                seconds = 60;
                --newMinutes;
            }
    
            --seconds;
    
            updateDisplay(newMinutes, seconds);
            countdown();
        }, 1000)
    }
    
    function stopCountdown()
    {
        clearTimeout(timerTimeOut);
    }
    
    function updateDisplay(newMinutes, newSeconds)
    {
        newMinutes = newMinutes === undefined ? minutes : newMinutes;
        newSeconds = newSeconds === undefined  ? 0 : newSeconds;
        minutesDisplay.textContent = String(newMinutes).padStart(2, '0');
        secondsDisplay.textContent = String(newSeconds).padStart(2, '0');
        seconds = newSeconds;
    }

    function getCurrentSeconds()
    {
        return seconds;
    }

    return {
        getCurrentSeconds,
        countdown,
        stopCountdown,
        updateDisplay
    }
}