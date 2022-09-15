// const btn_table = document.querySelectorAll(".controll button")[0];

// const btn_cards = document.querySelectorAll(".controll button")[1];

// btn_table.addEventListener("click", () => {
//   btn_cards.classList.add("active");
// });

document.querySelectorAll(".controll button").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    const value = btn.textContent.toLocaleLowerCase();
    const table = document.getElementById(value).style;

    if (table.display == "flex") {
      table.display = "none";
    } else {
      table.display = "flex";
    }
  });
});
