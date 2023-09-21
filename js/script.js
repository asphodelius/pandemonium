const playerCountElement = document.getElementById("player-count");
const serverStatusElement = document.getElementById("server-status");

function updateServerInfo() {
  fetch("https://api.mcsrvstat.us/3/65.108.21.145:25629")
    .then((response) => response.json())
    .then((data) => {
      const playerCount = data.players.online;
      const serverStatus = data.online ? "Online" : "Offline";

      playerCountElement.textContent = `Игроков онлайн: ${playerCount}`;

      serverStatusElement.textContent = `Статус сервера: ${serverStatus}`;

      if (data.online) {
        serverStatusElement.classList.remove("offline");
        serverStatusElement.classList.add("online");
      } else {
        serverStatusElement.classList.remove("online");
        serverStatusElement.classList.add("offline");
      }
    })
    .catch((error) => {
      console.error("Error fetching server info:", error);
      playerCountElement.textContent = "Error fetching server info";
      serverStatusElement.textContent = "Error fetching server info";
    });
}

updateServerInfo();
setInterval(updateServerInfo, 5000);

document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".button--secondary");

  button.addEventListener("click", function () {
    const originalText = button.innerText;
    const copiedText = "Скопировано";

    button.innerText = copiedText;

    setTimeout(function () {
      button.innerText = originalText;
    }, 3000);
  });
});
