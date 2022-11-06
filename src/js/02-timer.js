import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    // diferentTime = futureDate - currentDate;    
    // console.log('Выбранное время', selectedDates[0].getTime());
    // console.log(diferentTime);    
  },  
};
console.log(options);
const calendar = flatpickr('#datetime-picker', options);

console.log("время для работы", calendar.selectedDates[0].getTime());

// const timer = {
//   start() {
//     const futureDate = calendar.selectedDates[0];
//     console.log(futureDate);
//     setInterval(() => {
//       const currentDate = Date.now();
//       console.log("срабатывание текущее", currentDate);
//       console.log('Выбранное', futureDate);
//       console.log(futureDate-currentDate);
//     },1000);
//   },
// };

// timer.start();

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
