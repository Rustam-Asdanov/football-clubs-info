const myForm = document.forms[0];

myForm.addEventListener("submit", sendData);
const formDataObj = {};

// Thist function control save and modify methods
function sendData(event) {
  event.preventDefault();
  const myFormData = new FormData(event.target);

  myFormData.forEach((value, key) => (formDataObj[key] = value));
  console.log(myFormData);
  if (myForm["submit"].value === "Save") {
    newPlayer(formDataObj);
  } else if (myForm["submit"].value === "Modify") {
    modifyPlayer(myForm["_id"].value, formDataObj);
  }
  fillTable();
  myForm.reset();
  return false;
}

// This function fill table with data
function fillTable() {
  fetch("api/v1/player", { method: "GET" })
    .then((response) => response.json())
    .then((data) => {
      const tbody = document.getElementsByTagName("tbody")[0];
      tbody.innerHTML = "";

      for (let i in data) {
        creaeteRow(i, data[i], tbody);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function creaeteRow(counter, player, tbody) {
  const tr = document.createElement("tr");

  const headers = [
    "N",
    "fullname",
    "country",
    "club",
    "age",
    "position",
    "number",
  ];

  headers.forEach((key) => {
    const td = document.createElement("td");

    if (key === "N") {
      td.textContent = ++counter;
    } else {
      td.textContent = player[key];
    }

    tr.appendChild(td);
  });

  const td_operations = document.createElement("td");
  const edit_button = document.createElement("button");
  edit_button.textContent = "Edit";
  edit_button.classList.add("edit");
  edit_button.addEventListener("click", () => {
    editPlayer(player["_id"]);
  });
  td_operations.appendChild(edit_button);

  const delete_button = document.createElement("button");
  delete_button.textContent = "Delete";
  delete_button.classList.add("delete");
  delete_button.addEventListener("click", () => {
    deletePlayer(player["_id"]);
  });
  td_operations.appendChild(delete_button);

  tr.appendChild(td_operations);
  tbody.appendChild(tr);
}

// this function add new player
function newPlayer(body) {
  // const id = myForm["club"].value;
  // body["team_id"] = id;
  console.log(body);
  fetch("api/v1/player", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((result) => {
      if (result["status"] == 201) {
        alert("Success");
      } else {
        result.json().then((res) => {
          alert(res["message"]);
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

// this function prepare form to editing player
function editPlayer(id) {
  fetch("/api/v1/player/" + id, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      for (key in data) {
        console.log(key);
        if (key === "__v" || key === "club") continue;
        myForm[key].value = data[key];
      }
      myForm["submit"].value = "Modify";
    })
    .catch((err) => {
      console.log(err);
    });
}

// this function save modified data
function modifyPlayer(id, body) {
  body["_id"] = id;
  fetch("api/v1/player", {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((result) => {
      myForm["submit"].value = "Save";
      if (result["status"] == 200) {
        alert("Success");
      } else {
        result.json().then((res) => {
          alert(res["message"]);
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

// this function delete player by id
function deletePlayer(id) {
  if (!confirm("Are you sure?")) {
    return;
  }
  fetch("/api/v1/player/" + id, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "DELETE",
  })
    .then((result) => {
      if (result["status"] == 200) {
        alert("Success");
      } else {
        result.json().then((res) => {
          alert(res["message"]);
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
  fillTable();
}

fillTable();
