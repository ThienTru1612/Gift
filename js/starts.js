document.addEventListener("DOMContentLoaded", function () {

    /* ================= LOADING ================= */

    const loading = document.getElementById("loading");

    window.addEventListener("load", () => {
        setTimeout(() => {
            loading.style.display = "none";
        }, 800);
    });

    /* ================= STARS BACKGROUND ================= */

    const starContainer = document.getElementById("stars");

    for(let i = 0; i < 120; i++){

        const star = document.createElement("div");

        star.style.position = "absolute";
        star.style.width = "2px";
        star.style.height = "2px";
        star.style.background = "white";

        star.style.left = Math.random()*100 + "%";
        star.style.top = Math.random()*100 + "%";

        star.style.opacity = Math.random();

        star.style.animation = "twinkle " + (Math.random()*3+2) + "s infinite";

        starContainer.appendChild(star);
    }

    /* ================= OPEN LETTER ================= */

    const envelope = document.querySelector(".envelope");

    envelope.addEventListener("click", () => {

        envelope.classList.toggle("open");

        createSakura();

    });

});


/* ================= SAKURA EFFECT ================= */

function createSakura(){

    for(let i = 0; i < 25; i++){

        const sakura = document.createElement("div");

        sakura.classList.add("sakura");

        sakura.style.left = Math.random()*100 + "vw";

        sakura.style.animationDuration = (Math.random()*5+5) + "s";

        document.body.appendChild(sakura);

        setTimeout(()=>{
            sakura.remove();
        },8000);

    }

}
