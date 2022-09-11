function openPage(elem) {
  window.open("/" + elem, "_self");
}

document.getElementsByClassName("control")[0].addEventListener("click", () => {
  openPage("base");
});

document.getElementsByClassName("control")[1].addEventListener("click", () => {
  openPage("newPlayer");
});
