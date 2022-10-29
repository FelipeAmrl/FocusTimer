import Controls from './controls.js';
import Timer from './timer.js';
import Events from './events.js';
import Sounds from './sounds.js';

import {
    minutesDisplay,
    secondsDisplay,
    playButton,
    pauseButton
} from './elements.js'

const controls = Controls({
    playButton,
    pauseButton
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



