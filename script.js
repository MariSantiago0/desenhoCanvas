const cvs = document.getElementById('canvas');
const ctx = cvs.getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

<<<<<<< HEAD


// Chão marrom
ctx.fillStyle = "brown";
ctx.fillRect(0, cvs.height - 170, cvs.width, 170);


// Primeiro tubo
ctx.fillStyle = "seagreen";
ctx.fillRect(580, 390, 70, 90);
ctx.stroke();

// Brilho claro - parte 1
ctx.fillStyle = "lime";
ctx.fillRect(635, 390, 15, 90);
ctx.stroke();

// Borda do primeiro tubo
ctx.fillStyle = "seagreen";
ctx.fillRect(555, 380, 120, 30);
ctx.stroke();

// Brilho claro - parte 2
ctx.fillStyle = "lime";
ctx.fillRect(665, 380, 15, 30);
ctx.stroke();

// Segundo tubo
ctx.fillStyle = "seagreen";
ctx.fillRect(850, 330, 120, 150);
ctx.stroke();

// Brilho claro - parte 1
ctx.fillStyle = "lime";
ctx.fillRect(965, 330, 15, 150);
=======
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
>>>>>>> f828fad4dc8e632a0cbc6d559e5099a869652361
ctx.stroke();

// brilho claro - parte 1
ctx.fillStyle="lime";
ctx.fillRect(965,330,15,130);
ctx.strokeStyle="white";
ctx.stroke();

// Borda do segundo tubo
<<<<<<< HEAD
ctx.fillStyle = "seagreen";
ctx.fillRect(810, 325, 200, 35);
ctx.stroke();

// Brilho claro - parte 2
ctx.fillStyle = "lime";
ctx.fillRect(1000, 325, 15, 35);
ctx.stroke();

// Primeiro quadrado
ctx.fillStyle = "yellow";
ctx.strokeStyle = "black";
ctx.fillRect(100, 200, 80, 80);
ctx.strokeRect(100, 200, 80, 80);
ctx.lineWidth = 2;
=======
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
>>>>>>> f828fad4dc8e632a0cbc6d559e5099a869652361
ctx.fill();
ctx.stroke();

// Detalhes do primeiro quadrado
ctx.fillStyle = "gold";
ctx.fillRect(100, 200, 10, 10);
ctx.fillRect(170, 200, 10, 10);
ctx.fillRect(100, 270, 10, 10);
ctx.fillRect(170, 270, 10, 10);
ctx.fill();

// Segundo quadrado
ctx.fillStyle = "yellow";
ctx.strokeStyle = "black";
ctx.fillRect(430, 40, 80, 80);
ctx.strokeRect(430, 40, 80, 80);
ctx.fill();
ctx.stroke();

// Detalhes do segundo quadrado
ctx.fillStyle = "gold";
ctx.fillRect(430, 40, 10, 10);
ctx.fillRect(500, 40, 10, 10);
ctx.fillRect(430, 110, 10, 10);
ctx.fillRect(500, 110, 10, 10);
ctx.fill();


// Grupo de 4 quadrados
// 1° quadrado
ctx.fillStyle = "chocolate";
ctx.fillRect(1030, 140, 80, 80);
ctx.stroke();

// 2° quadrado
ctx.fillStyle = "gold";
ctx.fillRect(1110, 140, 80, 80);
ctx.stroke();

// 3° quadrado
ctx.fillStyle = "chocolate";
ctx.fillRect(1190, 140, 80, 80);
ctx.stroke();

// 4° quadrado
ctx.fillStyle = "gold";
ctx.fillRect(1270, 140, 80, 80);
ctx.stroke();

// Sinal de interrogação parte I
ctx.fillStyle = "white";
ctx.fillRect(115, 220, 13, 13);
ctx.fillRect(128, 207, 25, 13);
ctx.fillRect(151, 220, 13, 20);
ctx.fillRect(138, 235, 13, 16);
ctx.fillRect(138, 255, 13, 13);
ctx.stroke();


// Sinal de interrogação parte II
ctx.fillStyle = "white";
ctx.fillRect(445, 60, 13, 13);
ctx.fillRect(457, 50, 25, 13);
ctx.fillRect(480, 60, 13, 20);
ctx.fillRect(467, 75, 13, 16);
ctx.fillRect(467, 95, 13, 13);
ctx.stroke();


// Detalhes dos quadrados
// Primeiro quadrado
ctx.fillStyle = "gold";
ctx.fillRect(1040, 200, 10, 10);
ctx.fillRect(1090, 200, 10, 10);
ctx.fillRect(1040, 150, 10, 10);
ctx.fillRect(1090, 150, 10, 10);
ctx.stroke();

// Segundo quadrado
<<<<<<< HEAD
ctx.fillStyle = "chocolate";
ctx.fillRect(1120, 200, 10, 10);
ctx.fillRect(1170, 200, 10, 10);
ctx.fillRect(1120, 150, 10, 10);
ctx.fillRect(1170, 150, 10, 10);
=======
ctx.fillStyle="yellow";
ctx.roundRect(430,40,80,80,20);
ctx.fill();
>>>>>>> f828fad4dc8e632a0cbc6d559e5099a869652361
ctx.stroke();

// Terceiro quadrado
<<<<<<< HEAD
ctx.fillStyle = "gold";
ctx.fillRect(1200, 200, 10, 10);
ctx.fillRect(1250, 200, 10, 10);
ctx.fillRect(1200, 150, 10, 10);
ctx.fillRect(1250, 150, 10, 10);
=======
ctx.fillStyle = "chocolate";
roundRect(ctx, 1030, 140, 80, 80, 10);
ctx.fill();
>>>>>>> f828fad4dc8e632a0cbc6d559e5099a869652361
ctx.stroke();


// Quarto quadrado
<<<<<<< HEAD
ctx.fillStyle = "chocolate";
ctx.fillRect(1280, 200, 10, 10);
ctx.fillRect(1330, 200, 10, 10);
ctx.fillRect(1280, 150, 10, 10);
ctx.fillRect(1330, 150, 10, 10);
ctx.stroke();

/// Arbustos
=======
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


>>>>>>> f828fad4dc8e632a0cbc6d559e5099a869652361
// moita da direita
ctx.fillStyle = "green";
ctx.strokeStyle = "green";
ctx.beginPath();
<<<<<<< HEAD
ctx.arc(1200, 481, 50, 0, Math.PI*2/2, true);
=======
ctx.arc(1200, 800, 50, 0, Math.PI*2/2, true);
>>>>>>> f828fad4dc8e632a0cbc6d559e5099a869652361
ctx.fill();
ctx.stroke();

// moita da esquerda
ctx.fillStyle = "green";
ctx.strokeStyle = "green";
ctx.beginPath();
<<<<<<< HEAD
ctx.arc(190, 481, 40, 0, Math.PI*2/2, true);
=======
ctx.arc(190, 800, 40, 0, Math.PI*2/2, true);
>>>>>>> f828fad4dc8e632a0cbc6d559e5099a869652361
ctx.fill();
ctx.stroke();

// moita junta
ctx.fillStyle = "green";
ctx.strokeStyle = "green";
ctx.beginPath();
<<<<<<< HEAD
ctx.arc(230, 481, 60, 0, Math.PI*2/2, true);
ctx.fill();
ctx.stroke();

//nuvem da direita
ctx.fillStyle = "white";
ctx.strokeStyle = "white";
ctx.beginPath();
ctx.arc(1050, 81, 50, 0, Math.PI*2/2, true);
ctx.fill();
ctx.stroke();

ctx.fillStyle = "white";
ctx.strokeStyle = "white";
ctx.beginPath();
ctx.arc(1000, 81, 40, 0, Math.PI*2/2, true);
ctx.fill();
ctx.stroke();

ctx.fillStyle = "white";
ctx.strokeStyle = "white";
ctx.beginPath();
ctx.arc(940, 81, 55, 0, Math.PI*2/2, true);
ctx.fill();
ctx.stroke();


//nuvem da esquerda
ctx.fillStyle = "white";
ctx.strokeStyle = "white";
ctx.beginPath();
ctx.arc(185, 81, 40, 0, Math.PI*2/2, true);
ctx.fill();
ctx.stroke();

ctx.fillStyle = "white";
ctx.strokeStyle = "white";
ctx.beginPath();
ctx.arc(255, 81, 50, 0, Math.PI*2/2, true);
ctx.fill();
ctx.stroke();

ctx.fillStyle = "white";
ctx.strokeStyle = "white";
ctx.beginPath();
ctx.arc(316, 81, 55, 0, Math.PI*2/2, true);
ctx.fill();
ctx.stroke();


=======
ctx.arc(230, 800, 60, 0, Math.PI*2/2, true);
ctx.fill();
ctx.stroke();
>>>>>>> f828fad4dc8e632a0cbc6d559e5099a869652361
