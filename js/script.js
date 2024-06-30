var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;

var matrix = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}'.split('');
var font_size = 10;
var columns = canvas.width / font_size;
var drops = [];

for (var x = 0; x < columns; x++) {
  drops[x] = 1;
}

window.addEventListener('resize', (e) => {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
});

function draw() {
  // Black BG for the canvas
  // translucent BG to show trail
  ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#212121";
  ctx.font = font_size + "px arial";
  
  for (var i = 0; i < drops.length; i++) {
    var text = matrix[Math.floor(Math.random() * matrix.length)];

    ctx.fillText(text, i * font_size, drops[i] * font_size);

    if (drops[i] * font_size > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(draw, 35);
