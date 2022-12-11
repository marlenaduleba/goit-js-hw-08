import Player from "@vimeo/player";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";
const currentTime = localStorage.getItem(LOCALSTORAGE_KEY);

player.on("timeupdate", saveCurrentTime);

function saveCurrentTime(event) {
    localStorage.setItem(LOCALSTORAGE_KEY, event.seconds);
}

player.setCurrentTime(currentTime);