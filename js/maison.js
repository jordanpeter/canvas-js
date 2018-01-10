var canV = document.getElementById("maison");
var ctx = canV.getContext("2d");
ctx.beginPath(); // base de la maison
     ctx.lineWidth="2";
     ctx.moveTo(250,500);
     ctx.lineTo(750,500);
     ctx.lineTo(750,900);
     ctx.lineTo(250,900);
     ctx.lineTo(250,500);
     ctx.stroke();
     ctx.fillStyle="silver";
     ctx.fill();
ctx.closePath();

ctx.beginPath(); //Porte d'entrée
     ctx.lineWidth="2";
     ctx.fillStyle="blue";
     ctx.moveTo(300,900);
     ctx.lineTo(300,800);
     ctx.lineTo(350,800);
     ctx.lineTo(350,900);
     ctx.fill();
     ctx.stroke();
ctx.closePath();

ctx.beginPath(); //Fenetre
     ctx.moveTo(450,750);
     ctx.lineTo(650,750);
     ctx.lineTo(650,875);
     ctx.lineTo(450,875);
     ctx.lineTo(450,750);
     ctx.stroke();
     ctx.fillStyle="white";
     ctx.fill();
ctx.closePath();

ctx.beginPath(); //Garage
     ctx.lineWidth="2";
     ctx.moveTo(750,700);
     ctx.lineTo(1000,700);
     ctx.lineTo(1000,900);
     ctx.lineTo(750,900);
     ctx.fillStyle="blue";
     ctx.fill();
     ctx.stroke();
ctx.closePath();

ctx.beginPath(); //porte de garage
     ctx.lineWidth="2";
     ctx.moveTo(775,900);
     ctx.lineTo(775,725);
     ctx.lineTo(975,725);
     ctx.lineTo(975, 900);
     ctx.fillStyle="maroon";
     ctx.fill();
     ctx.moveTo(775,775);
     ctx.lineTo(975,775);
     ctx.moveTo(775,850);
     ctx.lineTo(975,850);
     ctx.stroke();
ctx.closePath();

ctx.beginPath(); // Toit
     ctx.lineWidth="2";
     ctx.moveTo(225,500);
     ctx.lineTo(775,500);
     ctx.lineTo(500,200);
     ctx.lineTo(225,500);
     ctx.fillStyle="maroon";
     ctx.fill();
     ctx.stroke();
ctx.closePath();

ctx.beginPath(); // fenêtre au dessus de la porte d'entrée
     ctx.lineWidth="2";
     ctx.arc(325,775,15,0,Math.PI*2,false);
     ctx.moveTo(325,760);
     ctx.lineTo(325,790);
     ctx.moveTo(310,775);
     ctx.lineTo(340,775);
     ctx.fillStyle="white";
     ctx.fill();
     ctx.stroke();
ctx.closePath();

ctx.beginPath(); // 12 !!!!!!
     ctx.lineWidth="2";
     ctx.moveTo(305,825);
     ctx.lineTo(315,815);
     ctx.lineTo(315,835);
     ctx.lineTo(307,835);
     ctx.lineTo(323,835);

     ctx.moveTo(329,815);
     ctx.lineTo(340,815);
     ctx.lineTo(340,825);
     ctx.lineTo(330,825);
     ctx.lineTo(330,835);
     ctx.lineTo(341,835);
     ctx.stroke();
ctx.closePath();

ctx.beginPath(); // fenêtres
     ctx.lineWidth="2";
     ctx.moveTo(300,600);
     ctx.lineTo(350,600);
     ctx.lineTo(350,650);
     ctx.lineTo(300,650);
     ctx.lineTo(300,600);
     ctx.moveTo(325,600);
     ctx.lineTo(325,650);

     ctx.moveTo(450,600);
     ctx.lineTo(550,600);
     ctx.lineTo(550,650);
     ctx.lineTo(450,650);
     ctx.lineTo(450,600);

     ctx.moveTo(600,600);
     ctx.lineTo(650,600);
     ctx.lineTo(650,650);
     ctx.lineTo(600,650);
     ctx.lineTo(600,600);
     ctx.fillStyle="white";
     ctx.fill();

     ctx.stroke();
ctx.closePath();
