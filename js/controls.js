export default function ({
    body,
    playButton,
    pauseButton,
    darkModeButton,
    lightModeButton
}) 
{
    function play()
    {
        playButton.classList.add('hide');
        pauseButton.classList.remove('hide');
    }
    
    function reset()
    {
        playButton.classList.remove('hide');
        pauseButton.classList.add('hide');
    }

    function toggleBgAudioButtonSelection(element)
    {
        element.classList.toggle('selected');
    }

    function changeColorMode()
    {
        body.classList.toggle('dark');
        darkModeButton.classList.toggle('hide');
        lightModeButton.classList.toggle('hide');
    }

    return {
        play,
        reset,
        toggleBgAudioButtonSelection,
        changeColorMode
    }
}