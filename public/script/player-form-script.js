const myForm = document.forms[0];

myForm.addEventListener("submit", sendData);
const formDataObj = {};

// Thist function control save and modify methods
function sendData(event) {
  event.preventDefault();
  const myFormData = new FormData(event.target);

  myFormData.forEach((value, key) => (formDataObj[key] = value));
  console.log(formDataObj);
  console.log(myForm["submit"].value);

  if (myForm["submit"].value === "Save") {
    newPlayer(formDataObj);
  } else if (myForm["submit"].value === "Modify") {
    modifyPlayer(myForm["_id"].value, formDataObj);
  }
  myForm.reset();
  fillTable();
  return false;
}

// This function fill table with data
function fillTable() {
  fetch("api/v1/player", { method: "Get" })
    .then((response) => response.json())
    .then((data) => {
      const tbody = document.getElementsByTagName("tbody")[0];
      tbody.innerHTML = "";

      data.forEach((player_obj, number) => {
        const tr = document.createElement("tr");
        for (const [key, value] of Object.entries(player_obj)) {
          if (key === "__v") continue;
          const td = document.createElement("td");
          if (key === "_id") {
            td.textContent = number + 1;
          } else {
            td.textContent = value;
          }
          tr.appendChild(td);
        }

        const td_operations = document.createElement("td");
        const edit_button = document.createElement("button");
        edit_button.textContent = "Edit";
        edit_button.classList.add("edit");
        edit_button.addEventListener("click", () => {
          editPlayer(player_obj["_id"]);
        });
        td_operations.appendChild(edit_button);

        const delete_button = document.createElement("button");
        delete_button.textContent = "Delete";
        delete_button.classList.add("delete");
        delete_button.addEventListener("click", () => {
          deletePlayer(player_obj["_id"]);
        });
        td_operations.appendChild(delete_button);

        tr.appendChild(td_operations);
        tbody.appendChild(tr);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

// this function add new player
function newPlayer(body) {
  console.log("add new player");
  fetch("api/v1/player", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
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
}

// this function prepare form to editing player
function editPlayer(id) {
  console.log("edit player " + id);
  fetch("/api/v1/player/" + id, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      for (key in data) {
        if (key === "__v") continue;
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
  fetch("api/v1/player/" + id, {
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
