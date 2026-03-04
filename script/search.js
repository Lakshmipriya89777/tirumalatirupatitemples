// Get input element
const input = document.getElementById("searchBox");

// Search keywords mapped to pages
const templeMap = {
  varaha: "varaha.html",
  "varaha swami temple": "varaha.html",

  tirumala: "tirumala.html",
  "tirumala temple": "tirumala.html",

  papavinasanam: "papavinasanam.html",
  akasaganga: "akasaganga.html",
  japali: "japali.html",
  silathoranam: "silathoranam.html",

  venugopala: "venugopala.html",
  "venugopala swami temple": "venugopala.html",

  "srivari padhalu": "padhalu.html",
  padhalu: "padhalu.html",

  kapilatheertham: "kapilatheertham.html",
  museum: "museum.html",
  "tirumala museum": "museum.html",

  padmavathi: "padmavathi.html",
  "padmavathi temple": "padmavathi.html",
  tiruchanur: "padmavathi.html",

  "lalitha peetam": "lalitha.html",

  iskcon: "iskcon.html",
  "iskcon temple": "iskcon.html",

  kodhanda: "kodhanda.html",
  kodhandarama: "kodhanda.html",

  mukkoti: "mukkoti.html",

  govindharaja: "govindharaja.html",
  "govindharaja temple": "govindharaja.html",

  "srinivasa mangapuram": "kalyana.html",
  "kalyana venkateswara swami temple": "kalyana.html",

  vakulamatha: "vakulamatha.html",
  jain: "jain.html",

  varahi: "varahi.html",
  "varahi ammavaari temple": "varahi.html",

  gudimallam: "gudimallam.html",

  appalayagunta: "appalayagunta.html",
  "prasanna venkateswara swami temple": "appalayagunta.html",

  kalahasthi: "kalahasthi.html",
  "kalahasthi temple": "kalahasthi.html",

  thondamanadu: "thondamanadu.html",

  kanipakam: "kanipakam.html",
  "kanipakam temple": "kanipakam.html",
};

// Enter key support
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    searchTemple();
  }
});

// Search function
function searchTemple() {
  const query = input.value.trim().toLowerCase();

  if (templeMap[query]) {
    window.location.href = "../htmlfiles/" + templeMap[query];
  } else {
    alert("This temple is not available on this website.");
  }
}


