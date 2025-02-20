document.addEventListener("DOMContentLoaded", function () {
  let audio = document.getElementById("myAudio");

  // Ambil waktu terakhir dari LocalStorage
  let savedTime = localStorage.getItem("audioTime");
  if (savedTime) {
    audio.currentTime = savedTime;
  }

  // Simpan waktu saat lagu berjalan
  audio.addEventListener("timeupdate", function () {
    localStorage.setItem("audioTime", audio.currentTime);
  });
});
