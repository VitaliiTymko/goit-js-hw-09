import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css'

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

let selectedTime = null;

function pad(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = pad(Math.floor(ms / day));
  const hours = pad(Math.floor((ms % day) / hour));
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));
  return { days, hours, minutes, seconds };
}

refs.startBtn.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0].getTime() < Date.now()) {
      Notiflix.Notify.success('Please choose a date in the future');
      selectedDates[0] = new Date();
      refs.startBtn.setAttribute('disabled', true);
      return;
    } else {
      refs.startBtn.removeAttribute('disabled');
      selectedTime = selectedDates[0].getTime();
      console.log(selectedTime);
    }
  },
};

const calendar = flatpickr('#datetime-picker', options);

const timer = {
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.intervalId = setInterval(() => {
      const currentDate = Date.now();
      // console.log("selectedTime", selectedTime);
      const timerTime = selectedTime - currentDate;
      const timeComponents = convertMs(timerTime);
      apdateTimer(timeComponents);
      // console.log("срабатывание текущее", currentDate);
      // console.log(timerTime);
      console.log(timeComponents);
      if (timerTime <= 1000) {
        console.log("НАЧАЛОСЬ!!!!!");
        clearInterval(this.intervalId);
        return;
      };
    }, 1000);
  },

  
};

refs.startBtn.addEventListener('click', () => {
  timer.start();
});

function apdateTimer({days, hours, minutes, seconds}) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.minutes.textContent = `${minutes}`;
  refs.seconds.textContent = `${seconds}`;
}