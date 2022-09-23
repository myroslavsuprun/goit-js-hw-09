const ref = {
  form: document.querySelector('form'),
  delay: document.querySelector('[data-delay]'),
  step: document.querySelector('[data-step]'),
  amount: document.querySelector('[data-amount]'),
};

ref.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const delay = ref.delay.value;
  const step = ref.step.value;
  const amount = ref.amount.value;
  setTimeout(createPromiseLoop, delay, amount, step);
}

function createPromiseLoop(amount, step) {
  for (let i = 1; i <= amount; i += 1) {
    createPromise(step)
      .then(value => {
        console.log(value);
      })
      .catch(value => {
        console.log(value);
      });
  }
}

function createPromise() {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve('Succesful fullfilling');
    } else {
      reject('Failed to fullfill');
    }
  });
}
