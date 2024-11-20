import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const input = document.querySelector('#datetime-picker');

let selectedDates;
let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

input.addEventListener('input', flatpickr('#datetime-picker', options));

if (userSelectedDate.getTime() <= Date.now()) {
  alert('Please choose a date in the future');
}
