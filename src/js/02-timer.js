require('flatpickr');
require('flatpickr/dist/flatpickr.min.css');

const dateInput = document.querySelector('#datetime-picker');
const dateBtn = document.querySelector('[data-start]');

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

const dateChosen = flatpickr(dateInput, {
  minDate: 'today',
  minTime: currentTime(),
  enableTime: true,
  time_24hr: true,
  minuteIncrement: 1,
  defaultDate: new Date(),
  onClose: function onDateClose(selectedDates) {
    const dateChosen = new Date(selectedDates[0]);
    const dateCurrent = new Date();
    if (dateChosen.getTime() <= dateCurrent.getTime()) {
      window.alert('Please choose a date in the future');
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
    window.alert('Please choose a date in the future');
    return;
  }
  let timeRangeInMs = chosenTime.getTime() - currentTime.getTime();
  setInterval();
  setInterval(timeCounter, 1000, timeToChange.ms);
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

function timeCounter(time) {
  console.log(convertMs(time - 1000));
}
