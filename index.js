const slideToggle = document.getElementById('slideToggle');
const blurEffect = document.getElementById('blur');

slideToggle.addEventListener('change', function() {
  if (this.checked) {
    blurEffect.classList.add('blureffect');
    blurEffect.classList.remove('blureffect-off');
  } else {
    blurEffect.classList.remove('blureffect');
    blurEffect.classList.add('blureffect-off');
  }
});