var canvas = document.getElementById('myCanvas'),
    ctx = canvas.getContext('2d');

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#E7E7DE';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, 200, 0, Math.PI * 2, false);
  ctx.closePath();
  ctx.clip();

  ctx.fillStyle = '#008891';
  for (var i = 0; i < 100; i++) {
    ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 57, Math.random() * 53);
  }
}

draw();

canvas.onmousemove = function() {
  draw();
}
