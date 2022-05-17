const keys =  document.querySelectorAll('.key');

function playSound(evt) {
  const audio = document.querySelector(`audio[data-key="${evt.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${evt.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('key_active');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('key_active');
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);



