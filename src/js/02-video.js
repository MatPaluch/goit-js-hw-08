import Player from '@vimeo/player';
import _ from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

if (localStorage.getItem('videoplayer-current-time')) {
  const time = localStorage.getItem('videoplayer-current-time');
  player.setCurrentTime(time);
}
player.on(
  'timeupdate',
  _.throttle(data => {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000)
);
