document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".button--secondary");

  button.addEventListener("click", function () {
    const originalText = button.innerText;
    const copiedText = "Скопировано";

    // Simulate copying to clipboard (you may use your own clipboard library)
    // Here, I'm just changing the button text to "Скопировано" for demonstration purposes.
    button.innerText = copiedText;

    // Reset the button text after a certain time (e.g., 3 seconds)
    setTimeout(function () {
      button.innerText = originalText;
    }, 3000); // You can adjust the delay as needed
  });
});
