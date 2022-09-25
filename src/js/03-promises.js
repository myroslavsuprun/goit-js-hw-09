import { Notify } from 'notiflix/build/notiflix-notify-aio';

const ref = {
  form: document.querySelector('form'),
  delay: document.querySelector('[data-delay]'),
  step: document.querySelector('[data-step]'),
  amount: document.querySelector('[data-amount]'),
};

ref.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  delay = parseInt(ref.delay.value);
  step = parseInt(ref.step.value);
  amount = parseInt(ref.amount.value);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay + step * (i - 1))
      .then(value => {
        Notify.success(value);
      })
      .catch(value => {
        Notify.failure(value);
      });
  }

  e.target.reset();
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}
