const scenes = document.querySelectorAll(".scene");
const nextBtn = document.getElementById("nextBtn");
const startBtn = document.getElementById("startBtn");
const music = document.getElementById("bgm");

let currentScene = 0;

/* Start music on user tap (mobile safe) */
startBtn.addEventListener("click", () => {
  music.play().catch(() => {});
  startBtn.style.display = "none";
});

/* Scene navigation */
nextBtn.addEventListener("click", () => {
  scenes[currentScene].classList.remove("active");
  currentScene++;

  if (currentScene < scenes.length) {
    scenes[currentScene].classList.add("active");
  } else {
    nextBtn.style.display = "none";
  }
});