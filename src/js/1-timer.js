import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const dateTimePicker = document.querySelector('#datetime-picker');
const startButton = document.querySelector('button[data-start]');
const dataDays = document.querySelector('span[data-days]');
const dataHours = document.querySelector('span[data-hours]');
const dataMinutes = document.querySelector('span[data-minutes]');
const dataSeconds = document.querySelector('span[data-seconds]');

let userSelectedDate;
let timerId;

startButton.disabled = true;

iziToast.settings({
  timeout: 2000,
  resetOnHover: true,
  icon: 'material-icons',
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',
  progressBar: false,
  title: 'Error',
  titleColor: 'white',
  message: 'Please choose a date in the future',
  position: 'topRight',
  messageColor: 'white',
  backgroundColor: 'red',
});

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    inputTime(selectedDates);
  },
};

flatpickr(dateTimePicker, options);

function inputTime(selectedDates) {
  userSelectedDate = selectedDates[0].getTime();
  if (selectedDates[0] <= Date.now()) {
    startButton.disabled = true;
    iziToast.show();
  } else {
    startButton.disabled = false;
    startButton.addEventListener('click', () => {
      startButton.disabled = true;
      timerId = setInterval(() => {
        const diff = userSelectedDate - Date.now();
        if (diff <= 0) {
          clearInterval(timerId);
          return;
        }
        let { days, hours, minutes, seconds } = convertMs(diff);
        dataDays.textContent = addLeadingZero(days);
        dataHours.textContent = addLeadingZero(hours);
        dataMinutes.textContent = addLeadingZero(minutes);
        dataSeconds.textContent = addLeadingZero(seconds);
      }, 1000);
    });
  }
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  let days = Math.floor(ms / day);
  let hours = Math.floor((ms % day) / hour);
  let minutes = Math.floor(((ms % day) % hour) / minute);
  let seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(unit) {
  return unit.toString().padStart(2, '0');
}
