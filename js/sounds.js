export default function()
{

    const buttonPressedAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true");
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true");
    const bgAudio = {
        forest: new Audio("./assets/forest.wav"),
        rain: new Audio("./assets/rain.wav"),
        coffee: new Audio("./assets/coffee-house.wav"),
        fireplace: new Audio("./assets/fireplace.wav")
    }

    bgAudio.forest.loop = true;
    bgAudio.rain.loop = true;
    bgAudio.coffee.loop = true;
    bgAudio.fireplace.loop = true;

    function buttonPressed()
    {
        buttonPressedAudio.play();
    }

    function timerEnds()
    {
        kitchenTimer.play();
    }

    function playBgAudio(type)
    {
        switch(type)
        {
            case "forest":
                bgAudio.forest.play();
                break;
            case "rain":
                bgAudio.rain.play();
                break;
            case "coffee":
                bgAudio.coffee.play();
                break;
            case "fireplace":
                bgAudio.fireplace.play();
                break;
            default:
                break;
        }
    }

    function pauseBgAudio(type)
    {
        switch(type)
        {
            case "forest":
                bgAudio.forest.pause();
                break;
            case "rain":
                bgAudio.rain.pause();
                break;
            case "coffee":
                bgAudio.coffee.pause();
                break;
            case "fireplace":
                bgAudio.fireplace.pause();
                break;
            default:
                break;
        }
    }

    function handleBgAudio(element, type)
    {
        let isSelected = element.classList.contains('selected');

        if(isSelected)
        {
            playBgAudio(type);
        }
        else
        {
            pauseBgAudio(type);
        }
    }

    return {
        buttonPressed,
        timerEnds,
        playBgAudio,
        pauseBgAudio,
        handleBgAudio
    }
}