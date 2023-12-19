document.addEventListener("DOMContentLoaded", function () {
  // Créer un élément de flocon de neige
  function createSnowflake() {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      snowflake.style.left = Math.random() * window.innerWidth + "px";
      snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
      document.body.appendChild(snowflake);

      // Supprimer le flocon après l'animation
      snowflake.addEventListener("animationend", function () {
          document.body.removeChild(snowflake);
          createSnowflake(); // Recréer un nouveau flocon
      });
  }

  // Créer plusieurs flocons de neige
  function createSnowflakes() {
      for (let i = 0; i < 30; i++) {
          createSnowflake();
      }
  }

  // Lancer l'animation de neige lorsque la page est chargée
  createSnowflakes();
});
