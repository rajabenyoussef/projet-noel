document.addEventListener("DOMContentLoaded", function () {
    // Date de Noël
    const christmasDate = new Date("December 25, 2023 00:00:00").getTime();

    // Mettre à jour le minuteur chaque seconde
    const countdownElement = document.getElementById("countdown");

    function updateCountdown() {
        const currentDate = new Date().getTime();
        const timeDifference = christmasDate - currentDate;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}j ${hours}h ${minutes}m ${seconds}s`;

        if (timeDifference <= 0) {
            countdownElement.innerHTML = "Joyeux Noël!";
        }
    }

    setInterval(updateCountdown, 1000);
});

document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuButton = document.getElementById("mobile-menu");
    const menu = document.querySelector(".menu");

    mobileMenuButton.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});
