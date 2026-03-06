// Dữ liệu lời chúc (Thay thế cho WishModel.php)
const wishData = {
    title: "Happy Women's Day",
    baseMessage: "Thế giới này trở nên dịu dàng và ý nghĩa hơn nhờ có sự hiện diện của phái đẹp. Chúc bạn luôn rạng rỡ như những đóa hoa, tự tin tỏa sáng theo cách riêng và tận hưởng một ngày 8/3 trọn vẹn yêu thương!"
};

window.addEventListener('load', () => {
    // Lấy tham số "to" từ URL (Ví dụ: index.html?to=Lan)
    const urlParams = new URLSearchParams(window.location.search);
    const recipient = urlParams.get('to') || "Người phụ nữ tuyệt vời";
    
    // Đổ dữ liệu vào HTML
    document.getElementById('wishSubTitle').innerText = `Gửi đến ${recipient}`;

    setTimeout(() => {
        document.getElementById('intro').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('intro').style.display = 'none';
            document.getElementById('main').style.opacity = '1';
            
            if(typeof initStars === 'function') initStars();
            
            const bouquet = document.getElementById('bouquet');
            if(bouquet) {
                setTimeout(() => bouquet.classList.add('active'), 500);
            }

            setTimeout(() => {
                const env = document.getElementById('envelopeWrapper');
                if(env) {
                    env.style.display = 'block';
                    setTimeout(() => env.classList.add('float'), 100);
                    // Lắng nghe sự kiện click để mở thư
                    env.addEventListener('click', () => openEnvelope(wishData.baseMessage));
                }
            }, 3000); 

        }, 1000);
    }, 3000);
});

function startTyping(text) {
    let i = 0;
    const el = document.getElementById('typingText');
    el.innerHTML = "";
    function type() {
        if(i < text.length) {
            el.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 35);
        }
    }
    type();
}

let isOpened = false;
function openEnvelope(msg) {
    if(isOpened) return;
    isOpened = true;

    const env = document.getElementById('envelopeWrapper');
    env.classList.remove('float'); 
    env.classList.add('open');

    burstSakura();

    setTimeout(() => {
        startTyping(msg);
    }, 1000);
}

function burstSakura() {
    const canvas = document.getElementById('sakuraCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const petals = [];
    for(let i = 0; i < 100; i++) {
        petals.push({
            x: window.innerWidth / 2, 
            y: window.innerHeight / 2,
            vx: (Math.random() - 0.5) * 20, 
            vy: (Math.random() - 1) * 20 - 5, 
            size: Math.random() * 8 + 6,
            angle: Math.random() * 360,
            spin: (Math.random() - 0.5) * 0.4,
            opacity: Math.random() * 0.6 + 0.4
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        petals.forEach(p => {
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.angle);
            ctx.fillStyle = `rgba(255, 182, 193, ${p.opacity})`;
            ctx.beginPath();
            ctx.moveTo(0,0);
            ctx.bezierCurveTo(-p.size/2, -p.size/2, -p.size/2, p.size, 0, p.size);
            ctx.bezierCurveTo(p.size/2, p.size, p.size/2, -p.size/2, 0, 0);
            ctx.fill();
            ctx.restore();

            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.2; 
            p.angle += p.spin;
        });
        requestAnimationFrame(draw);
    }
    draw();
}
