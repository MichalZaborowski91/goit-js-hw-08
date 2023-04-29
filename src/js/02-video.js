'use strict';
import Player from '@vimeo/player'; //improt playera
import throttle from 'lodash.throttle'; //import throttle

const iframe = document.querySelector('#vimeo-player'); //znalezienie <iframe>
const videoPlayer = new Player(iframe); //inicjacja playera
const throttledTime = throttle(data => {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000); //zapisanie do localStorage zthrottlowanego czasu z przeskokiem co 1000ms do klucza 'videoplayer-current-time'
videoPlayer.on('timeupdate', throttledTime); //skladnia player.on

const currentTime = localStorage.getItem('videoplayer-current-time'); //pobranie curretnTime z localStorage i przypisanie
videoPlayer.setCurrentTime(currentTime); //wywolanie na playerze currentTime
