const tabel = document.getElementById("tabel");
const hidden = document.querySelectorAll(".hidden");
tabel.addEventListener("click", function () {
  hidden.forEach(function (i) {
    const ada = i.classList.contains("d-none");
    if (ada == true) {
      i.classList.remove("d-none");
    } else {
      i.classList.add("d-none");
    }
  });
});

const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
hamburger.addEventListener("click", function () {
  const ada = sidebar.classList.contains("d-none");
  if (ada == true) {
    sidebar.classList.remove("d-none");
  } else {
    sidebar.classList.add("d-none");
  }
});
