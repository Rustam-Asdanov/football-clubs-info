const search_result = document.getElementById("search-result");

async function createPlayerCard(player_name) {
  const player_options = document.querySelector("div#search-result");
  if (player_name.value == "") player_options.classList.add("hide");
  if (player_name.value == "") return;

  player_options.classList.remove("hide");

  await fetch("/api/v1/player/search/" + player_name.value, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.length > 0) {
        createSearchResult(result);
      } else {
        search_result.innerHTML = "<button>Not found</button>";
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function createSearchResult(result) {
  search_result.innerHTML = "";

  for (let data of result) {
    const button = document.createElement("button");
    button.textContent = data["fullname"];

    button.addEventListener("click", () => {
      createTeamCard(data["_id"]);
    });

    search_result.appendChild(button);
  }
}

function createTeamCard(team_name) {
  console.log(team_name);
}
