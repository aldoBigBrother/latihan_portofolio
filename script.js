// SCROLL KE KONTAK SAAT DI KLIK

function hubungi() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

/* Fungsi:
(Mengubah Tema Web menggunakan MODE)

Cara kerja:
mengganti warna body menjadi lebih terang*/

function gantiMode() {
  document.body.classList.toggle("light-mode");
}

//====== Memunculkan popup ====

function lihatProject(judul, isi, githubLink) {

  document.getElementById("judulPopup").innerHTML = judul;

  document.getElementById("isiPopup").innerHTML = isi;

  document.getElementById("linkProject").href = githubLink;

  document.getElementById("popup").style.display = "flex";

}

function tutupPopup() {
  document.getElementById("popup").style.display = "none";
}

document.getElementById("popup").addEventListener("click", function (e) {
  if (e.target.id === "popup") {
    tutupPopup();
  }
});

//==== Memunculkan jam Digital & analog ====

function updateJamDinding() {
  let waktu = new Date();

  let jam = waktu.getHours() % 12;

  let menit = waktu.getMinutes();

  let detik = waktu.getSeconds();

  let derajatJam = jam * 30 + menit * 0.5;

  let derajatMenit = menit * 6;

  let derajatDetik = detik * 6;

  document.getElementById("jarumJam").style.transform =
    `translateX(-50%) rotate(${derajatJam}deg)`;

  document.getElementById("jarumMenit").style.transform =
    `translateX(-50%) rotate(${derajatMenit}deg)`;

  document.getElementById("jarumDetik").style.transform =
    `translateX(-50%) rotate(${derajatDetik}deg)`;
}

updateJamDinding();
setInterval(updateJamDinding, 1000);

function upadateJam() {
  let waktu = new Date();

  let jam = String(waktu.getHours()).padStart(2, "0");

  let menit = String(waktu.getMinutes()).padStart(2, "0");

  let detik = String(waktu.getSeconds()).padStart(2, "0");

  document.getElementById("jam").innerHTML = `${jam}:${menit}:${detik}`;
}

upadateJam();
setInterval(upadateJam, 1000);

//=== Kalender Modern ===//

const calendarDays = document.getElementById("calendarDays");
const calendarMonthLabel = document.getElementById("calendarMonthLabel");
const calendarStatus = document.getElementById("calendarStatus");
const prevMonthBtn = document.getElementById("prevMonth");
const nextMonthBtn = document.getElementById("nextMonth");

let activeMonth = new Date();
activeMonth.setDate(1);

function formatMonthLabel(date) {
  return date.toLocaleDateString("id-ID", {
    month: "long",
    year: "numeric",
  });
}

function renderCalendar() {
  const today = new Date();
  const year = activeMonth.getFullYear();
  const month = activeMonth.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();
  const startOffset = firstDay === 0 ? 6 : firstDay - 1;

  calendarMonthLabel.textContent = formatMonthLabel(activeMonth);
  calendarDays.innerHTML = "";

  for (let i = 0; i < startOffset; i++) {
    const emptyCell = document.createElement("div");
    emptyCell.className = "calendar-day empty";
    calendarDays.appendChild(emptyCell);
  }

  for (let day = 1; day <= totalDays; day++) {
    const dayCell = document.createElement("div");
    dayCell.className = "calendar-day";
    dayCell.textContent = day;

    const isToday =
      year === today.getFullYear() &&
      month === today.getMonth() &&
      day === today.getDate();

    if (isToday) {
      dayCell.classList.add("today");
    }

    dayCell.title = new Date(year, month, day).toLocaleDateString("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    calendarDays.appendChild(dayCell);
  }

  calendarStatus.textContent = `Hari ini: ${today.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })}`;
}

prevMonthBtn.addEventListener("click", function () {
  activeMonth = new Date(
    activeMonth.getFullYear(),
    activeMonth.getMonth() - 1,
    1,
  );
  renderCalendar();
});

nextMonthBtn.addEventListener("click", function () {
  activeMonth = new Date(
    activeMonth.getFullYear(),
    activeMonth.getMonth() + 1,
    1,
  );
  renderCalendar();
});

renderCalendar();

//=== Salam Waktu Otomatis ===//

function salamWaktu() {
  let waktu = new Date();

  let jam = waktu.getHours();

  let salam = "";

  if (jam < 12) {
    salam = "Selamat Pagi";
  } else if (jam < 18) {
    salam = "Selamat Siang";
  } else {
    salam = "Selamat Malam";
  }

  document.getElementById("sapaan").innerHTML = salam + ", Aku Aldo";
}

salamWaktu();

let materi = ["HTML", "CSS", "Java Script", "Python"];

let index = 0;

function nextBelajar() {
  console.log(index);

  index++;

  if (index >= materi.length) {
    index = 0;
  }

  let status = document.getElementById("status");

  status.style.transform = "scale (0.9)";
  status.style.opacity = "0.5";

  setTimeout(function () {
    status.innerHTML = "Saya sedang belajar " + materi[index];

    status.style.transform = "scale(1)";
    status.style.opacity = "1";
  }, 200);
}

nextBelajar();

//=========== Membuat Bar Statistik Skill Card ==========
function animasiSkill() {
  setTimeout(function () {
    document.querySelector(".html-bar").style.width = "90%";

    document.querySelector(".css-bar").style.width = "75%";

    document.querySelector(".python-bar").style.width = "65%";

    document.querySelector(".javascript-bar").style.width = "45%";
  }, 100);
}

//============== Animasi Skill saat Scroll Otomatis (Bar muncul) ==========
let sudahJalan = false;

window.addEventListener("scroll", function () {
  let skillSection = document.querySelector(".skill-container");

  let posisi = skillSection.getBoundingClientRect().top;

  let tinggiLayar = window.innerHeight;

  if (posisi < tinggiLayar - 100 && !sudahJalan) animasiSkill();

  sudahJalan: true;
});

//============== Membuat Animasi Gerak Card Skill otomatis ==========
window.addEventListener("scroll", function () {
  let cardSection = document.querySelectorAll(".project-card");

  cardSection.forEach(function (card) {
    let posisi = card.getBoundingClientRect().top;

    let tinggiLayar = window.innerHeight;

    if (posisi < tinggiLayar - 100) card.classList.add("muncul");
  });
});

const form = document.getElementById("saranForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  document.getElementById("notifKirim")
    .classList.add("muncul");

  setTimeout(function () {
    document.getElementById("notifKirim")
      .classList.remove("muncul");
  }, 3000);

  form.reset();
});

function toggleMenu() {
  document.getElementById("navMenu")
    .classList.toggle("active");
}