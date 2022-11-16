// all modules
import Notiflix from 'notiflix';

const form = document.querySelector('.form');

const delayIn = document.querySelector('[name="delay"]');
const stepIn = document.querySelector('[name="step"]');
const amountIn = document.querySelector('[name="amount"]');

form.addEventListener('submit', onSubmit);
delayIn.addEventListener('input', onDelay);
stepIn.addEventListener('input', onStep);
amountIn.addEventListener('input', onAmount);
let delay = null;
let step = null;
let amount = null;
function onDelay(e) {
  delay = Number(e.target.value);
  console.log(delay);
}
function onStep(e) {
  step = Number(e.target.value);
  console.log(step);
}
function onAmount(e) {
  amount = Number(e.target.value);
  console.log(amount);
}
function onSubmit(e) {
  e.preventDefault();
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay);
    delay += step;
  }
}
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });

  promise
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
    });
}
