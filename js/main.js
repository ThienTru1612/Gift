let isOpened = false;

window.addEventListener("load", () => {

setTimeout(()=>{

document.getElementById("intro").style.display="none";
document.getElementById("main").style.display="block";

},2500);

});


function startTyping(text){

const el = document.getElementById("typingText");

let i=0;

function type(){

if(i<text.length){

el.innerHTML += text.charAt(i);

i++;

setTimeout(type,30);

}

}

type();

}



function burstSakura(){

const canvas = document.getElementById("sakuraCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let petals=[];

for(let i=0;i<40;i++){

petals.push({
x:window.innerWidth/2,
y:window.innerHeight/2,
vx:(Math.random()-0.5)*6,
vy:(Math.random()-0.5)*6,
size:6+Math.random()*6
});

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

petals.forEach(p=>{

p.x+=p.vx;
p.y+=p.vy;

ctx.fillStyle="#ffc0cb";

ctx.beginPath();
ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
ctx.fill();

});

requestAnimationFrame(animate);

}

animate();

}
