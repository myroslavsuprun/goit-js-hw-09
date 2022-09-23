const ref = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

ref.startBtn.addEventListener('click', onStartClick);
ref.stopBtn.addEventListener('click', onStopClick);

function onStartClick(e) {
  addBodyTransition();
  bodyColorChanger();
  disableBtnStart(true);
  timerId = setInterval(bodyColorChanger, 1000);
}

function onStopClick() {
  disableBtnStart(false);
  clearInterval(timerId);
}

function disableBtnStart(value) {
  ref.startBtn.disabled = value;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function bodyColorChanger() {
  ref.body.style.backgroundColor = getRandomHexColor();
}

function addBodyTransition() {
  if (ref.body.style.transition) {
    return;
  }
  ref.body.style.transition = 'background-color 1s ease-in-out';
}
