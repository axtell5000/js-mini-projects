const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const dateItems = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2020, 7, 31, 17, 30, 00);

const futureYear = futureDate.getFullYear();
const futureHour = futureDate.getHours();
const futureMinutes = futureDate.getMinutes();
let futureMonth = futureDate.getMonth();
futureMonth = months[futureMonth];
const date = futureDate.getDate();
const futureDay = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${futureDay}, ${date} ${futureMonth} ${futureYear} ${futureHour}:${futureMinutes}`;

// future time in miiliseconds
const futureTimeInMs = futureDate.getTime();


function getRemainingTime() {
  const presentTimeInMs = new Date().getTime();
  const t = futureTimeInMs - presentTimeInMs;

  // value in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // calc all values
  const days = Math.floor(t / oneDay);
  const hours = Math.floor((t % oneDay) / oneHour);
  const minutes = Math.floor((t % oneHour) / oneMinute);
  const seconds = Math.floor((t % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  dateItems.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
  }
}

// countdown;
let countdown = setInterval(getRemainingTime, 1000);
//set initial values
getRemainingTime();
