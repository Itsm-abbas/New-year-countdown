let days_countdown = document.querySelector('.days-countdown');
let hours_countdown = document.querySelector('.hours-countdown');
let minutes_countdown = document.querySelector('.minutes-countdown');
let seconds_countdown = document.querySelector('.seconds-countdown');

function countdown() {
    let currentdate = new Date()
let newyeardate = new Date(2023,0,1)
let subtract_dates = newyeardate - currentdate;
let days = Math.floor(subtract_dates/1000/60/60/24);
let hours = Math.floor(subtract_dates/1000/60/60%24);
let minutes = Math.floor(subtract_dates/1000/60%60)
let seconds = Math.floor(subtract_dates/1000%60)
days_countdown.innerText = days
hours_countdown.innerText = dateformat(hours);
minutes_countdown.innerText = dateformat(minutes);
seconds_countdown.innerText = dateformat(seconds);
};
function dateformat(time) {
   return time < 10 ? `0${time}` : time;
}
countdown();
setInterval(countdown ,1000);