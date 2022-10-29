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

    function pauseBgAudio()
    {
        bgAudio.forest.pause();
        bgAudio.rain.pause();
        bgAudio.coffee.pause();
        bgAudio.fireplace.pause();
    }

    return {
        buttonPressed,
        timerEnds,
        playBgAudio,
        pauseBgAudio
    }
}