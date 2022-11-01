export default function ({
    playButton,
    pauseButton
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

    return {
        play,
        reset,
        toggleBgAudioButtonSelection
    }
}