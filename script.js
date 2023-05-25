var colores=["White", "lightgray", "AntiqueWhite", "Aqua", "lightgreen", "DarkTurquoise"];
var body=document.querySelector("body");
body.style="background-color:"+colores[Math.floor(Math.random() * colores.length)];