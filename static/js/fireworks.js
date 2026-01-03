const canvas = document.createElement("canvas");
canvas.id = "fireworks";
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");
resize();
window.addEventListener("resize", resize);

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

let fireworks = [];

function launchFirework() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height * 0.5;

    const colors = ["#ff1744", "#ffea00", "#2979ff", "#00e676", "#ff9100"];
    const color = colors[Math.floor(Math.random() * colors.length)];

    let particles = [];
    for (let i = 0; i < 160; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 6 + 3;
        particles.push({
            x, y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            alpha: 1,
            color
        });
    }
    fireworks.push(particles);
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    fireworks.forEach((particles, index) => {
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.04;
            p.alpha -= 0.01;

            ctx.globalAlpha = p.alpha;
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 3.5, 0, Math.PI * 2);
            ctx.fill();
        });

        if (particles[0].alpha <= 0) {
            fireworks.splice(index, 1);
        }
    });

    ctx.globalAlpha = 1;
    requestAnimationFrame(animate);
}

setInterval(launchFirework, 600);
animate();
