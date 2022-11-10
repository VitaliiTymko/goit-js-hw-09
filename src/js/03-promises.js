// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Notiflix from 'notiflix';

import 'notiflix/dist/notiflix-3.2.5.min.css'
/*
 * @param1 {string}: Required, a text in string format.
 * @param2 {function | Object}: Optional, a callback function that will be called when the notification element has been clicked. Or, extending the initialize options with the new options for each notification element.
 * @param3 {Object}: Optional, extending the initialize options with new the options for each notification element. (If the second parameter has been already used for a callback function.)
 */

const refs = {
  form: document.querySelector('form'),
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  btnSrartPromise: document.querySelector('button'),
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }
      reject({ position, delay });
    }, delay);
  });
}

refs.btnSrartPromise.addEventListener('click', e => {
  e.preventDefault();
  let firstDelay = parseInt(Number(refs.delay.value));
  const delayStep = parseInt(Number(refs.step.value));
  const amount = parseInt(Number(refs.amount.value));

  for (let i = 1; i <= amount; i += 1) {
   console.log(firstDelay, delayStep, amount);
   createPromise(i, firstDelay).then(({position, delay}) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
   }).catch(({position, delay}) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
   });
   firstDelay += delayStep;
  };
});

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });



