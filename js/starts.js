function initStars() {

    const canvas = document.getElementById('starsCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];
    const numStars = 250;

    for (let i = 0; i < numStars; i++) {

        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.5,
            alpha: Math.random(),
            speed: Math.random() * 0.02 + 0.005
        });

    }

    function draw() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#ffffff";

        stars.forEach(s => {

            ctx.globalAlpha = s.alpha;

            ctx.beginPath();
            ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
            ctx.fill();

            s.alpha += s.speed;

            if (s.alpha >= 1 || s.alpha <= 0) {
                s.speed = -s.speed;
            }

        });

        requestAnimationFrame(draw);

    }

    draw();
}

window.addEventListener('resize', () => {

    const canvas = document.getElementById('starsCanvas');

    if(canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

});
