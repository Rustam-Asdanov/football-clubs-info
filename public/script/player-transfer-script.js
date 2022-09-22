const search_result = document.getElementById("search-result");

async function searchPlayer(player_name) {
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
      createPlayerCard(data);
    });

    search_result.appendChild(button);
  }
}

function createPlayerCard(player) {
  console.log(player);

  const player_box = document.getElementById("player");

  player_box.children[0].value = player["_id"];
  player_box.children[1].textContent = player["fullname"];
  player_box.children[2].alt = player["fullname"];
  player_box.children[2].src = player["image"];

  document.getElementById("player-name").value = "";
  document.querySelector("div#search-result").classList.add("hide");
}

function searchTeam(team_name) {
  console.log(team_name);
}
