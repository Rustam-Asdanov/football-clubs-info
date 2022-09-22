const search_result = document.getElementById("search-result");
const player_box = document.getElementById("player");
const team_box = document.getElementById("team");

// meathod search player in base
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

// method create player options by given name
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

// method create player card
function createPlayerCard(player) {
  player_box.children[0].value = player["_id"];
  player_box.children[1].textContent = player["fullname"];
  player_box.children[2].alt = player["fullname"];
  player_box.children[2].src = player["image"];

  document.getElementById("player-name").value = "";
  document.querySelector("div#search-result").classList.add("hide");
}

// method search team in database
async function searchTeam(team_id) {
  await fetch(`/api/v1/team/${team_id}?full=false`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((result) => {
      createTeamCard(result[0]);
    })
    .catch((err) => console.log(err));
}

// method create team card
function createTeamCard(team) {
  console.log(team);
  team_box.children[0].textContent = team["name"];
  team_box.children[1].alt = team["name"];
  team_box.children[1].src = "/team_logos/" + team["name"];
  team_box.children[1].onerror = () => {
    team_box.children[1].src =
      "https://static.vecteezy.com/system/resources/previews/007/166/414/original/football-club-logo-design-template-vector.jpg";
  };
}

document.getElementById("transfer-btn").addEventListener("click", () => {
  const player_id = document.getElementsByName("player_id")[0].value;
  const team_id = document.getElementsByName("team_id")[0].value;
  console.log("Player: " + player_id + "\n Team: " + team_id);
});
