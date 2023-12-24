import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

iziToast.settings({
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',
  position: 'topRight',
  messageColor: 'white',
  progressBar: false,
  close: false,
});

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const delay = form.delay.value;
  const state = form.state.value;

  makeNotification(delay, state)
    .then(message => {
      iziToast.show({
        message,
        backgroundColor: '#59A10D',
      });
    })
    .catch(message => {
      iziToast.show({
        message,
        backgroundColor: '#EF4040',
      });
    });
  form.reset();
}

function makeNotification(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });
}
