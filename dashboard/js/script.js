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
// WA
const nmr = document.getElementById("wa").innerHTML;
const whatsapp = document.getElementById("text").innerText;
const tmbl = document.getElementById("tombolWA");
const link = "https://wa.me/".concat(nmr).concat("?text=").concat(whatsapp);
tmbl.addEventListener("click", function () {
  window.open(link, "_blank");
});

// copy
const cpy = document.getElementById("tombolCp");
cpy.addEventListener("click", function () {
  navigator.clipboard
    .writeText(whatsapp)
    .then(() => {
      alert("Text copied to clipboard");
    })
    .catch((err) => {
      alert("Error in copying text: ", err);
    });
});
