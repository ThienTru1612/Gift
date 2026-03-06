function initStars() {
    const canvas = document.getElementById('starsCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Set kích thước canvas full màn hình
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];
    const numStars = 250; // Số lượng sao (càng nhiều càng lung linh)

    // Tạo các ngôi sao ngẫu nhiên
    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.5, // Kích thước sao nhỏ li ti
            alpha: Math.random(), // Độ sáng ban đầu
            speed: Math.random() * 0.02 + 0.005 // Tốc độ chớp nháy
        });
    }

    // Vòng lặp vẽ sao
    function draw() {
        // Xóa frame cũ để vẽ frame mới (nền trong suốt để hiện background CSS)
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = "#ffffff";
        stars.forEach(s => {
            ctx.globalAlpha = s.alpha;
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
            ctx.fill();
            
            // Xử lý hiệu ứng chớp nháy (tăng/giảm độ sáng)
            s.alpha += s.speed;
            if (s.alpha >= 1 || s.alpha <= 0) {
                s.speed = -s.speed; // Đảo chiều chớp nháy
            }
        });
        
        requestAnimationFrame(draw);
    }
    
    draw();
}

// Cập nhật lại kích thước nếu người dùng xoay ngang/dọc điện thoại
window.addEventListener('resize', () => {
    const canvas = document.getElementById('starsCanvas');
    if(canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
});
