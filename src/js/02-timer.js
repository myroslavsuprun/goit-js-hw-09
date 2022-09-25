require('flatpickr');
require('flatpickr/dist/flatpickr.min.css');
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const dateInput = document.querySelector('#datetime-picker');
const dateBtn = document.querySelector('[data-start]');
const timerForm = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

const timeCounter = {
  timeInMs: 0,

  timeChanger() {
    this.timeInMs = this.timeInMs - 1000;
    return this.timeInMs;
  },
};

const dateChosen = flatpickr(dateInput, {
  minDate: 'today',
  minTime: currentTime(),
  enableTime: true,
  time_24hr: true,
  minuteIncrement: 1,
  defaultDate: new Date(),
  onClose: function onDateClose(selectedDate) {
    const dateChosen = new Date(selectedDate[0]);
    const dateCurrent = new Date();
    if (dateChosen.getTime() <= dateCurrent.getTime()) {
      Notify.failure('Please choose a date in the future');
      return;
    }
    btnActivator(dateBtn);
  },
});

dateBtn.addEventListener('click', function () {
  onDateBtnClick(dateChosen);
});

function onDateBtnClick(chosenDate) {
  btnDisabler(dateBtn);

  const currentTime = new Date();
  const chosenTime = new Date(chosenDate.selectedDates);
  if (chosenTime.getTime() < currentTime.getTime()) {
    Notify.failure('Please choose a date in the future');
    return;
  }
  timeCounter.timeInMs = chosenTime.getTime() - currentTime.getTime();

  timerId = setInterval(() => {
    if (timeCounter.timeInMs < 2000) {
      clearInterval(timerId);
      btnActivator(dateBtn);
    }
    let timeOnDisplay = convertMs(timeCounter.timeChanger());
    createTimeMarkUp(timeOnDisplay);
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function createTimeMarkUp({ days, hours, minutes, seconds }) {
  timerForm.days.textContent = addLeadingZero(days);
  timerForm.hours.textContent = addLeadingZero(hours);
  timerForm.minutes.textContent = addLeadingZero(minutes);
  timerForm.seconds.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function btnActivator(btn) {
  btn.disabled = false;
}

function btnDisabler(btn) {
  btn.disabled = true;
}

function currentTime() {
  let date = new Date();
  return `${date.getHours()} ${date.getMinutes()} ${date.getSeconds()}`;
}
