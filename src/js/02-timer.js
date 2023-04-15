import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

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

  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };


const inputDataPicker = document.querySelector('#datetime-picker');
const btnStart = document.querySelector("button[data-start]");

const valueSpans = document.querySelectorAll('.value'); 

btnStart.disabled = true;
flatpickr(inputDataPicker, options);

inputDataPicker.addEventListener('input',fnCheckDate);
btnStart.addEventListener('click',() => {
    const setIntervalId = setInterval(() => {
        const insertDate = new Date(inputDataPicker.value);
        const currentDate = new Date;
        const msDif = insertDate.getTime() - currentDate.getTime();
        const {days, hours, minutes, seconds} = convertMs(msDif);
        valueSpans.forEach(item => {
            if(item.hasAttribute('data-days')) {
                item.textContent = addLeadingZero(days);
            } else if(item.hasAttribute('data-hours')) { 
                item.textContent = addLeadingZero(hours);
            } else if(item.hasAttribute('data-minutes')) { 
                item.textContent = addLeadingZero(minutes);
            } else if(item.hasAttribute('data-seconds')) { 
                item.textContent = addLeadingZero(seconds);
            }
        })


        if(!(days + hours + minutes + seconds)) {
            btnStart.disabled = true;
            clearInterval(setIntervalId);
        }
    }, 1000);
});

function fnCheckDate() {
    
    const insertDate = new Date(inputDataPicker.value);
    const currentDate = new Date;

    if(currentDate.getTime() > insertDate.getTime()){
        Notiflix.Notify.warning('Please choose a date in the future');
        return;
    }
    btnStart.disabled = false;
    
}

function addLeadingZero(value){
   
    value = value < 10 ? value.toString().padStart(2, "0") : value;
   
    return value;
}