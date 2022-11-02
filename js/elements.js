const body = document.querySelector("body");
const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");
const playButton = document.querySelector(".play");
const pauseButton = document.querySelector(".pause");
const stopButton = document.querySelector(".stop");
const increaseButton = document.querySelector(".increase");
const decreaseButton = document.querySelector(".decrease");
const forestSoundButton = document.querySelector(".forest");
const rainSoundButton = document.querySelector(".rain");
const coffeeSoundButton = document.querySelector(".coffee");
const fireplaceSoundButton = document.querySelector(".fireplace");
const forestVolume = document.querySelector('.forest input');
const rainVolume = document.querySelector('.rain input');
const coffeeVolume = document.querySelector('.coffee input');
const fireplaceVolume = document.querySelector('.fireplace input');
const darkModeButton = document.querySelector("#dark-mode");
const lightModeButton = document.querySelector("#light-mode");

export {
    body,
    minutesDisplay,
    secondsDisplay,
    playButton,
    pauseButton,
    stopButton,
    increaseButton,
    decreaseButton,
    forestSoundButton,
    coffeeSoundButton,
    rainSoundButton,
    fireplaceSoundButton,
    forestVolume,
    rainVolume,
    coffeeVolume,
    fireplaceVolume,
    darkModeButton,
    lightModeButton
}