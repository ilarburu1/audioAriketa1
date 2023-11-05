let playlist;
let audio;
let currentAudioIndex = 0;

window.onload = function () {
  playlist = ["audioak/audio1.mp3", "audioak/audio2.mp3", "audioak/audio3.mp3"];
  audio = document.getElementById("audio");
  audio.addEventListener("ended", hurrengoAudioa);
  hurrengoAudioa();
};

function hurrengoAudioa() {
  audio.src = playlist[currentAudioIndex];
  audio.load();
  audio.play();
  currentAudioIndex = (currentAudioIndex + 1) % playlist.length;
}
