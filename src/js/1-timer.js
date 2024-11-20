import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('#datetime-picker');
const button = document.querySelector('button[data-start]');
const daysCount = document.querySelector('.value[data-days]');
const hoursCount = document.querySelector('.value[data-hours]');
const minutesCount = document.querySelector('.value[data-minutes]');
const secondsCount = document.querySelector('.value[data-seconds]');

button.setAttribute('disabled', true);

let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    console.log(userSelectedDate);
    if (userSelectedDate.getTime() <= Date.now()) {
      iziToast.error({
        title: '',
        message: 'Please choose a date in the future',
      });
      button.setAttribute('disabled', true);
    } else if (userSelectedDate.getTime() > Date.now()) {
      iziToast.success({
        title: '',
        message: 'Press Start!',
      });
      button.removeAttribute('disabled');
    }
  },
};

input.addEventListener('input', flatpickr('#datetime-picker', options));

button.addEventListener('click', startCount);

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

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

const addLeadingZero = num => num.toString().padStart(2, '0');

function startCount() {
  button.setAttribute('disabled', true);
  const timer = setInterval(() => {
    const currentDate = new Date();
    const targetDate = new Date(input.value);
    const timeInterval = targetDate - currentDate;

    const { days, hours, minutes, seconds } = convertMs(timeInterval);

    if (timeInterval <= 0) {
      button.removeAttribute('disabled');
      input.removeAttribute('disabled');
      return;
    }

    input.setAttribute('disabled', true);

    daysCount.textContent = addLeadingZero(days);
    hoursCount.textContent = addLeadingZero(hours);
    minutesCount.textContent = addLeadingZero(minutes);
    secondsCount.textContent = addLeadingZero(seconds);
  }, 1000);
}
