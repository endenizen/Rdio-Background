var holder = document.getElementById('playerNowPlayingImage'),
  html = document.getElementsByTagName('html')[0],
  cur_image;

document.getElementById('player_image_container').style.display = 'none';
document.getElementById('playerNowPlayingContainer').style.borderRadius = '5px';
document.getElementsByClassName('main_content')[0].style.backgroundColor = 'rgba(255,255,255,0.95)';

html.style.backgroundRepeat = "repeat";
html.style.backgroundPosition = "50% 50%";

function makeBg(image) {
  return cur_image.replace(/square-200.jpg.*$/, 'square-600.jpg').replace(/^.*\?m=/, 'http://media.rd.io/');
}

function changeImage(new_image) {
  if(new_image.indexOf('no-artist-image') != -1) {
    return;
  }
  cur_image = new_image;
  html.style.backgroundImage = '';
  html.style.backgroundImage = 'url("' + makeBg(cur_image) + '")';
}

function doLoop() {
  if(holder.src != cur_image) {
    changeImage(holder.src);
  }
}

setInterval(function() {
  doLoop();
}, 500);

changeImage(holder.src);
