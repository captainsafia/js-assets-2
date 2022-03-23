var button = document.getElementById("click-me");
button.addEventListener("click", () => {
  console.log("Inside on click");
  window.external.sendMessage("Message via IPC")
});
