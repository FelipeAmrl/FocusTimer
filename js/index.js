import Controls from './controls.js';
import Timer from './timer.js';
import Events from './events.js';
import Sounds from './sounds.js';

import {
    body,
    minutesDisplay,
    secondsDisplay,
    playButton,
    pauseButton,
    darkModeButton,
    lightModeButton
} from './elements.js'

const controls = Controls({
    body,
    playButton,
    pauseButton,
    darkModeButton,
    lightModeButton
});

const sounds = Sounds();

const timer = Timer({
    controls,
    sounds,
    minutesDisplay,
    secondsDisplay
})

Events({
    controls,
    timer,
    sounds
})



