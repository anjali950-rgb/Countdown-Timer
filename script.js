let countdownInterval;

function startCountdown() {
    clearInterval(countdownInterval); // Reset previous interval
    document.getElementById('message').textContent = '';

    const dateInput = document.getElementById('date').value;
    const timeInput = document.getElementById('time').value;

    if (!dateInput || !timeInput) {
        alert("Please select both date and time.");
        return;
    } const targetTime = new Date(`${dateInput}T${timeInput}:00`);
    if (targetTime <= new Date()) {
        alert("Please select a future time.");
        return;
    }

    countdownInterval = setInterval(() => {
        const now = new Date();
        const diff = targetTime - now;

        if (diff <= 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').textContent = '';
            document.getElementById('message').textContent = "Countdown Complete!";
            return;
        } const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        document.getElementById('countdown').textContent =
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}