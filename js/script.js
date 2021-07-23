// music
const playTogle = document.getElementById("play");
const music = document.getElementById("music");
const imgPlay = document.getElementById("logo-pp");

playTogle.addEventListener("click", function () {
  pauseMusic();
});
function pauseMusic() {
  if (music.paused) {
    music.play();
    imgPlay.classList.remove("bi-play-fill");
    imgPlay.classList.add("bi-pause-fill");
  } else {
    music.pause();
    imgPlay.classList.add("bi-play-fill");
    imgPlay.classList.remove("bi-pause-fill");
  }
}
// tombol landing
const open = document.getElementById("open");
const landing = document.querySelectorAll(".landing-page");
const hide = document.querySelectorAll(".d-none");
open.addEventListener("click", function () {
  landing.forEach(function looping(i) {
    i.classList.add("hide");
  });
  hide.forEach(function looping(i) {
    i.classList.add("d-none");
  });

  function scrollKeAwal() {
    document.getElementById("welcome").scrollIntoView({ behavior: "smooth" });
  }
  scrollKeAwal();
  pauseMusic();
});
// scroll
function scrollKe(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
// countdown
// Set the date we're counting down to
const countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
// Update the count down every 1 second
const x = setInterval(function () {
  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output
  const hari = document.getElementById("hari");
  const jam = document.getElementById("jam");
  const menit = document.getElementById("menit");
  const detik = document.getElementById("detik");
  hari.innerHTML = -days;
  jam.innerHTML = hours;
  menit.innerHTML = minutes;
  detik.innerHTML = seconds;
}, 1000);

// copy button
