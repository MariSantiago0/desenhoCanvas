const cvs = document.getElementById('canvas');
const ctx = cvs.getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

// Chão marrom
ctx.fillStyle="brown";
ctx.fillRect(0, canvas.height - 170, canvas.width, 170);
ctx.strokeStyle="brown";
ctx.stroke();

// Primeiro tubo
ctx.fillStyle="seagreen";
ctx.fillRect(580,400, 70,90);
ctx.strokeStyle="green";
ctx.stroke();

// Borda do primeiro tubo
ctx.fillStyle="seagreen";
ctx.fillRect(555,400,120,30);
ctx.strokeStyle="green";
ctx.stroke();

// Segundo tubo
ctx.fillStyle="seagreen";
ctx.fillRect(850,350, 120,150);
ctx.strokeStyle="green";
ctx.stroke();

// Borda do segundo tubo
ctx.fillStyle="seagreen";
ctx.fillRect(810,350,195,35);
ctx.strokeStyle="green";
ctx.stroke();

// Função para desenhar um retângulo com cantos arredondados
function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.arcTo(x + width, y, x + width, y + radius, radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.arcTo(x + width, y + height, x + width - radius, y + height, radius);
  ctx.lineTo(x + radius, y + height);
  ctx.arcTo(x, y + height, x, y + height - radius, radius);
  ctx.lineTo(x, y + radius);
  ctx.arcTo(x, y, x + radius, y, radius);
  ctx.closePath();
}

// Primeiro quadrado 
ctx.fillStyle="yellow";
ctx.strokeStyle="gold";
ctx.roundRect(100, 200, 80, 80, 20);
ctx.fill();
ctx.stroke();

// Segundo quadrado
ctx.fillStyle="yellow";
ctx.strokeStyle="gold";
ctx.roundRect(430,40,80,80,20);
ctx.fill();
ctx.stroke();


// Terceiro quadrado
ctx.fillStyle = "chocolate";
ctx.strokeStyle = "darkchocolate";
roundRect(ctx, 1030, 140, 80, 80, 10);
ctx.fill();
ctx.stroke();

// Quarto quadrado
ctx.fillStyle = "gold";
ctx.strokeStyle = "darkgold";
roundRect(ctx, 1110, 140, 80, 80, 10);
ctx.fill();
ctx.stroke();

// Quinto quadrado
ctx.fillStyle = "chocolate";
ctx.strokeStyle = "darkchocolate";
roundRect(ctx, 1190, 140, 80, 80, 10);
ctx.fill();
ctx.stroke();

// Sexto quadrado
ctx.fillStyle = "gold";
ctx.strokeStyle = "darkgold";
roundRect(ctx, 1270, 140, 80, 80, 10);
ctx.fill();
ctx.stroke();

// Desenhar a nuvem
ctx.fillStyle = 'white';
ctx.strokeStyle = "white";
ctx.beginPath();
ctx.arc(100, 100, 30, 0, Math.PI * 2);
ctx.arc(130, 90, 30, 0, Math.PI * 2);
ctx.arc(160, 100, 30, 0, Math.PI * 2);
ctx.arc(190, 100, 20, 0, Math.PI * 2);
ctx.arc(220, 90, 30, 0, Math.PI * 2);
ctx.arc(250, 100, 30, 0, Math.PI * 2);
ctx.arc(280, 100, 30, 0, Math.PI * 2);
ctx.closePath();
ctx.fill();
ctx.stroke();

// moita da direita
ctx.fillStyle = "green";
ctx.strokeStyle = "green";
ctx.beginPath();
ctx.arc(1200, 480, 50, 0, Math.PI*2/2, true);
ctx.fill();
ctx.stroke();

// moita da esquerda
ctx.fillStyle = "green";
ctx.strokeStyle = "green";
ctx.beginPath();
ctx.arc(190, 480, 40, 0, Math.PI*2/2, true);
ctx.fill();
ctx.stroke();

// moita junta
ctx.fillStyle = "green";
ctx.strokeStyle = "green";
ctx.beginPath();
ctx.arc(230, 480, 60, 0, Math.PI*2/2, true);
ctx.fill();
ctx.stroke();




