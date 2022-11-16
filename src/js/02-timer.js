import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMinutes = document.querySelector('[data-minutes]');
const timerSeconds = document.querySelector('[data-seconds]');
const startBtn = document.querySelector('[data-start]');

let timeToDate = null;
let time = {};
startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    timeToDate = selectedDates[0].getTime();

    if (selectedDates[0] > Date.now()) {
      startBtn.disabled = false;
    } else {
      Notiflix.Notify.warning('Please choose a date in the future');
    }
  },
};
flatpickr('#datetime-picker', options);
startBtn.addEventListener('click', onClick);
function onClick() {
  startBtn.disabled = true;

  timer = setInterval(() => {
    const currentTime = Date.now();
    const deltaTime = timeToDate - currentTime;

    time = convertMs(deltaTime);
    updateTimer();
    if (deltaTime < 1000) {
      clearInterval(timerId);
    }
  }, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );
  console.log(days, hours, minutes, seconds);
  return { days, hours, minutes, seconds };
}
function updateTimer() {
  timerDays.textContent = time.days;
  timerHours.textContent = time.hours;
  timerMinutes.textContent = time.minutes;
  timerSeconds.textContent = time.seconds;
}
