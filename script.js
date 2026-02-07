const canvas = document.getElementById("scene");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const dialogueBox = document.getElementById("dialogue");

let scene = 0;
let frame = 0;

// 🌸 Petals
const petals = Array.from({length: 50}, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  speed: Math.random() * 1 + 0.5
}));

// 💖 Pixel Character
function drawCharacter(x, y, shirtColor, hairColor, blush=false) {
  // Head
  ctx.fillStyle = "#ffd1b3";
  ctx.fillRect(x+4, y, 16, 16);

  // Hair
  ctx.fillStyle = hairColor;
  ctx.fillRect(x+4, y, 16, 6);

  // Eyes
  ctx.fillStyle = "black";
  ctx.fillRect(x+7, y+7, 2, 2);
  ctx.fillRect(x+13, y+7, 2, 2);

  // Blush
  if (blush) {
    ctx.fillStyle = "pink";
    ctx.fillRect(x+6, y+10, 2, 2);
    ctx.fillRect(x+14, y+10, 2, 2);
  }

  // Body
  ctx.fillStyle = shirtColor;
  ctx.fillRect(x+4, y+16, 16, 18);

  // Legs
  ctx.fillRect(x+4, y+34, 6, 10);
  ctx.fillRect(x+14, y+34, 6, 10);
}

// 🌸 Garden
function drawGarden() {
  ctx.fillStyle = "#fce4ec";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  // Grass
  ctx.fillStyle = "#b9fbc0";
  ctx.fillRect(0, canvas.height-120, canvas.width, 120);

  // Tree
  ctx.fillStyle = "#8d6e63";
  ctx.fillRect(80, canvas.height-220, 30, 100);
  ctx.fillStyle = "#f48fb1";
  ctx.beginPath();
  ctx.arc(95, canvas.height-240, 60, 0, Math.PI*2);
  ctx.fill();

  // Falling petals
  ctx.fillStyle = "#f06292";
  petals.forEach(p => {
    ctx.fillRect(p.x, p.y, 4, 4);
    p.y += p.speed;
    if (p.y > canvas.height) p.y = 0;
  });
}

// 💍 Ring
function drawRing(x,y) {
  ctx.strokeStyle = "gold";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(x, y, 6, 0, Math.PI*2);
  ctx.stroke();
}

// ☁️ Floating hearts
function heart(x,y) {
  ctx.fillStyle = "#ff4d6d";
  ctx.fillRect(x,y,4,4);
}

// 🌄 Scene Controller
function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  if (scene === 0) {
    drawGarden();
    dialogueBox.innerText = "A peaceful garden where love begins 🌸";

    if (frame > 200) scene = 1;
  }

  if (scene === 1) {
    drawGarden();
    drawCharacter(canvas.width/2 - 40, canvas.height-160, "#90dbf4", "#3e2723");
    dialogueBox.innerText = "Piyush waits… 💭";

    if (frame > 350) scene = 2;
  }

  if (scene === 2) {
    drawGarden();
    drawCharacter(canvas.width/2 - 40, canvas.height-160, "#90dbf4", "#3e2723");
    drawCharacter(canvas.width/2 + 20, canvas.height-160, "#ffafcc", "#4a148c", true);
    dialogueBox.innerText = "Simran appears like a dream ✨";

    if (frame > 550) scene = 3;
  }

  if (scene === 3) {
    drawGarden();
    drawCharacter(canvas.width/2 - 30, canvas.height-160, "#90dbf4", "#3e2723", true);
    drawCharacter(canvas.width/2 + 10, canvas.height-160, "#ffafcc", "#4a148c", true);
    drawRing(canvas.width/2 + 20, canvas.height-180);
    dialogueBox.innerText = "Piyush: Will you be mine forever? 💍";

    if (frame > 800) scene = 4;
  }

  if (scene === 4) {
    drawGarden();
    drawCharacter(canvas.width/2 - 20, canvas.height-160, "#90dbf4", "#3e2723", true);
    drawCharacter(canvas.width/2 - 5, canvas.height-160, "#ffafcc", "#4a148c", true);

    for (let i=0;i<10;i++) heart(canvas.width/2+i*5, canvas.height-200);

    dialogueBox.innerText = "Simran: YES ❤️";

    if (frame > 1000) scene = 5;
  }

  if (scene === 5) {
    ctx.fillStyle = "#cdb4db";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    drawCharacter(canvas.width/2 - 20, canvas.height/2 - 40, "#90dbf4", "#3e2723");
    drawCharacter(canvas.width/2 + 10, canvas.height/2 - 40, "#ffafcc", "#4a148c");

    dialogueBox.innerText = "Together… forever ☁️💞";
  }

  frame++;
  requestAnimationFrame(animate);
}

animate();
