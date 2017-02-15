var link = document.querySelector('.map-contacts-btn');
var popup = document.querySelector('.feedback-form-popup');
var overlay = document.querySelector('.feedback-form-overlay');
var close = document.querySelector('.feedback-form-close');

link.addEventListener('click', function(even){
  event.preventDefault();
  popup.classList.add('feedback-form-popup-show');
  overlay.classList.add('feedback-form-overlay-show')
});

close.addEventListener('click', function(event){
  event.preventDefault();
  popup.classList.remove('feedback-form-popup-show');
  overlay.classList.remove('feedback-form-overlay-show');
});

overlay.addEventListener('click', function(event){
  popup.classList.remove('feedback-form-popup-show');
  overlay.classList.remove('feedback-form-overlay-show');
});

window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains('feedback-form-popup')) {
      popup.classList.remove('feedback-form-popup-show');
      overlay.classList.remove('feedback-form-overlay-show');
    }
  }
});
