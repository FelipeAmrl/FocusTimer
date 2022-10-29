export default function()
{

    const buttonPressedAudio = new Audio();
    const kitchenTimer = new Audio();
    const bgAudio = {
        forest: new Audio(),
        rain: new Audio(),
        coffee: new Audio(),
        fireplace: new Audio()
    }

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
        bgAudio.type.play();
        bgAudio.type.loop = true;
    }

    function pauseBgAudio()
    {
        for(let audio in bgAudio)
        {
            audio.pause();
        }
    }

    return {
        buttonPressed,
        timerEnds,
        playBgAudio,
        pauseBgAudio
    }
}