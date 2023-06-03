const cvs = document.getElementById('canvas');
const ctx = cvs.getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

/* Chão marrom */
ctx.fillStyle="brown";
ctx.fillRect(0, canvas.height - 170, canvas.width, 170);
ctx.fill();
ctx.stroke();

// Linha do chão
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(0, 550);
ctx.lineTo(2000, 550);
ctx.fill();


/* Primeiro tubo */
ctx.fillStyle="seagreen";
ctx.strokeStyle ="green";
ctx.fillRect(580,390, 70,90);
ctx.fill();
ctx.stroke();

// brilho claro - parte 1
ctx.fillStyle="lime";
ctx.fillRect(635,390,15,90);
ctx.strokeStyle="white";
ctx.stroke();

// Borda do primeiro tubo
ctx.fillStyle="seagreen";
ctx.fillRect(555,380,120,30);
ctx.strokeStyle="green";
ctx.stroke();

// brilho claro - parte 2
ctx.fillStyle="lime";
ctx.fillRect(665,380,15,30);
ctx.strokeStyle="white";
ctx.stroke();


/* Segundo tubo */
ctx.fillStyle="seagreen";
ctx.fillRect(850,330, 120,150);
ctx.strokeStyle="green";
ctx.stroke();

// brilho claro - parte 1
ctx.fillStyle="lime";
ctx.fillRect(965,330,15,130);
ctx.strokeStyle="white";
ctx.stroke();

// Borda do segundo tubo
ctx.fillStyle="seagreen";
ctx.fillRect(810,335,200,35);
ctx.strokeStyle="green";
ctx.stroke();

// brilho claro - parte 2
ctx.fillStyle="lime";
ctx.fillRect(1000,335,15,35);
ctx.strokeStyle="white";
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

//Grupo de 4 quadrados

// Primeiro quadrado 
ctx.fillStyle="yellow";
ctx.strokeStyle = "black";
ctx.lineWidth = 0.5;
ctx.roundRect(100, 200, 80, 80, 20);
ctx.fill();
ctx.stroke();

// Segundo quadrado
ctx.fillStyle="yellow";
ctx.roundRect(430,40,80,80,20);
ctx.fill();
ctx.stroke();


// Terceiro quadrado
ctx.fillStyle = "chocolate";
roundRect(ctx, 1030, 140, 80, 80, 10);
ctx.fill();
ctx.stroke();

// Quarto quadrado
ctx.fillStyle = "gold";
roundRect(ctx, 1110, 140, 80, 80, 10);
ctx.fill();
ctx.stroke();

// Quinto quadrado
ctx.fillStyle = "chocolate";
roundRect(ctx, 1190, 140, 80, 80, 10);
ctx.fill();
ctx.stroke();

// Sexto quadrado
ctx.fillStyle = "gold";
roundRect(ctx, 1270, 140, 80, 80, 10);
ctx.fill();
ctx.stroke();


// sinal de interrogação part I
ctx.fillStyle = "white";
ctx.fillRect(115,220,13,13);
ctx.fill();
ctx.stroke();

ctx.fillStyle = "white";
ctx.fillRect(128,207,25,13);
ctx.fill();
ctx.stroke();

ctx.fillStyle = "white";
ctx.fillRect(151,220,13,20);
ctx.fill();
ctx.stroke();

ctx.fillStyle = "white";
ctx.fillRect(138,235,13,16);
ctx.fill();
ctx.stroke();

ctx.fillStyle = "white";
ctx.fillRect(138,255,13,13);
ctx.fill();
ctx.stroke();

// sinal de interrogação part II
ctx.fillStyle = "white";
ctx.fillRect(445,60,13,13);
ctx.fill();
ctx.stroke();

ctx.fillStyle = "white";
ctx.fillRect(457,50,25,13);
ctx.fill();
ctx.stroke();

ctx.fillStyle = "white";
ctx.fillRect(480,60,13,20);
ctx.fill();
ctx.stroke();

ctx.fillStyle = "white";
ctx.fillRect(467,75,13,16);
ctx.fill();
ctx.stroke();

ctx.fillStyle = "white";
ctx.fillRect(467,95,13,13);
ctx.fill();
ctx.stroke();

// sinal de interrogação part I
ctx.fillStyle = "white";
ctx.fillRect(115,220,13,13);
ctx.fill();
ctx.stroke();

ctx.fillStyle = "white";
ctx.fillRect(128,207,25,13);
ctx.fill();
ctx.stroke();

ctx.fillStyle = "white";
ctx.fillRect(151,220,13,20);
ctx.fill();
ctx.stroke();

ctx.fillStyle = "white";
ctx.fillRect(138,235,13,16);
ctx.fill();
ctx.stroke();



// detalhes dos quadrados

// primeiro quadrado
ctx.fillStyle = "gold";
ctx.fillRect(1040,200,10,10);
ctx.fill();
ctx.stroke();

ctx.fillStyle = "gold";
ctx.fillRect(1090,200,10,10);
ctx.fill();
ctx.stroke();

ctx.fillStyle = "gold";
ctx.fillRect(1040,150,10,10);
ctx.fill();
ctx.stroke();

ctx.fillStyle = "gold";
ctx.fillRect(1090,150,10,10);
ctx.fill();
ctx.stroke();

// segundo quadrado
ctx.fillStyle = "chocolate";
ctx.fillRect(1120,200,10,10);
ctx.fill();
ctx.stroke();

ctx.fillStyle = "chocolate";
ctx.fillRect(1170,200,10,10);
ctx.fill();
ctx.stroke();

ctx.fillStyle = "chocolate";
ctx.fillRect(1120,150,10,10);
ctx.fill();
ctx.stroke();

ctx.fillStyle = "chocolate";
ctx.fillRect(1170,150,10,10);
ctx.fill();
ctx.stroke();

// terceiro quadrado
ctx.fillStyle = "gold";
ctx.fillRect(1200,200,10,10);
ctx.fill();
ctx.stroke();

ctx.fillStyle = "gold";
ctx.fillRect(1250,200,10,10);
ctx.fill();
ctx.stroke();

ctx.fillStyle = "gold";
ctx.fillRect(1200,150,10,10);
ctx.fill();
ctx.stroke();

ctx.fillStyle = "gold";
ctx.fillRect(1250,150,10,10);
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
ctx.arc(1200, 800, 50, 0, Math.PI*2/2, true);
ctx.fill();
ctx.stroke();

// moita da esquerda
ctx.fillStyle = "green";
ctx.strokeStyle = "green";
ctx.beginPath();
ctx.arc(190, 800, 40, 0, Math.PI*2/2, true);
ctx.fill();
ctx.stroke();

// moita junta
ctx.fillStyle = "green";
ctx.strokeStyle = "green";
ctx.beginPath();
ctx.arc(230, 800, 60, 0, Math.PI*2/2, true);
ctx.fill();
ctx.stroke();
