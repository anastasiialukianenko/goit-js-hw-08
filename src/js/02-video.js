import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);


const onTimeUpdate = throttle(function(data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds));
}, 1000); 

player.on('timeupdate', onTimeUpdate);



window.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('videoplayer-current-time')) {
        player.setCurrentTime(JSON.parse(localStorage.getItem('videoplayer-current-time')));
    }
});


