let isOpened = false;

/* INTRO LOADING */

window.onload = () => {

setTimeout(()=>{

document.getElementById("intro").style.display="none";
document.getElementById("main").style.display="block";

},3000);

}


/* TYPEWRITER */

function startTyping(text){

const el = document.getElementById("typingText");

let i=0;

function type(){

if(i < text.length){

el.innerHTML += text.charAt(i);
i++;

setTimeout(type,35);

}

}

type();

}


/* SAKURA BURST */

function burstSakura(){

const canvas = document.getElementById("sakuraCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let petals = [];

for(let i=0;i<40;i++){

petals.push({

x:window.innerWidth/2,
y:window.innerHeight/2,
vx:(Math.random()-0.5)*4,
vy:(Math.random()-0.5)*4,
size:8+Math.random()*6

})

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

petals.forEach(p=>{

p.x+=p.vx;
p.y+=p.vy;

ctx.fillStyle="pink";
ctx.beginPath();
ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
ctx.fill();

});

requestAnimationFrame(animate);

}

animate();

}
