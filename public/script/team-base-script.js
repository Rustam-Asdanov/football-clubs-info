var page = window.location.href.split("/")[4];

document.getElementById("previous-obj-btn").addEventListener("click", () => {
  if (page > 1) {
    window.open(`/base/${--page}`, "_self");
  }
});

document.getElementById("next-obj-btn").addEventListener("click", async () => {
  let message = "";
  await fetch(`/base/${++page}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => (message = data.message))
    .catch((err) => err);
  if (!message) {
    window.open(`/base/${page}`, "_self");
  } else {
    page--;
  }
});
