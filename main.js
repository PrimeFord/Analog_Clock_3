// Selectors
const hour = document.querySelector(".hour");
const minute = document.querySelector(".min");
const second = document.querySelector(".sec");

const tick = () => {
  let date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  second.style.rotate = `${sec * 6 - 90}deg`;
  second.style.animationDelay = "-" + sec + "s";
  minute.style.animationDelay = "-" + min + "s";
  hour.style.animationDelay = "-" + hrs + "s";
  minute.style.rotate = `${min * 6 - 90}deg`;
  hour.style.rotate = `${hr * 30 - 90 + min / 2}deg`;
};
setInterval(tick, 1000);
