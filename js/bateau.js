var canV = document.getElementById("toba");
var ctx = canV.getContext("2d");
ctx.beginPath();
     ctx.lineWidth="2";
     ctx.bezierCurveTo(100, 500, 300, 650, 500, 500)

     ctx.moveTo(100,500);
     ctx.lineTo(500,500);

     ctx.fillRect(150,300,10,200);

     ctx.fillRect(150, 300,(100/3),100);
     ctx.fillStyle="yellow";
     ctx.fillRect(150+(100/3), 300, (100/3), 100);
     ctx.fillStyle="red";
     ctx.fillRect(150+((100/3)*2), 300, (100/3), 100);
     ctx.lineJoin="round";



     ctx.stroke();


ctx.closePath();
