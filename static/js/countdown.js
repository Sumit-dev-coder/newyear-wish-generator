const countdown = document.getElementById("countdown");
const newYear = new Date("2026-01-01T00:00:00+05:30");

function getIST() {
    return new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
}

let fireworksStarted = false;

setInterval(() => {
    const now = getIST();
    const diff = newYear - now;

    if (diff <= 0) {
        countdown.innerHTML = "🎉 Happy New Year 2026 🎉";
        if (!fireworksStarted) {
            startFireworks();
            fireworksStarted = true;
        }
        return;
    }

    const h = Math.floor(diff / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    countdown.innerHTML = `${h}h ${m}m ${s}s`;
}, 1000);
