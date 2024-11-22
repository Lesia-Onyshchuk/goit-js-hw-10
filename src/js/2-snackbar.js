import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', submitFoo);

function submitFoo(event) {
  event.preventDefault();

  const state = event.target.elements.state.value;
  const delay = event.target.elements.delay.value;

  function makeDelay(delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve(`✅ Fulfilled promise in ${delay}ms`);
          iziToast.success({
            title: '',
            message: `Fulfilled promise in ${delay}ms`,
          });
        } else {
          reject(`❌ Rejected promise in ${delay}ms`);
          iziToast.error({
            title: '',
            message: `Rejected promise in ${delay}ms`,
          });
        }
      }, delay);
    });
  }

  makeDelay(delay)
    .then(success => console.log(success))
    .catch(error => console.log(error));
}
