let url = "";

function setUrl(myUrl) {
  url = myUrl;
}

function fillTable(myUrl) {
  fetch(myUrl == "" ? url : myUrl, { method: "GET" })
    .then((response) => response.json())
    .then((data) => {
      if (data.length == 0) {
        alert("Table is empty");
        page--;
      } else {
        const tbody = document.getElementsByTagName("tbody")[0];
        tbody.innerHTML = "";

        for (let i in data) {
          createRow(i, data[i], tbody);
        }
      }
    })
    .catch((err) => {
      alert("Some problems");
      console.log(err);
    });
}

function createRow(counter, object, tbody) {
  const tr = document.createElement("tr");

  headers.forEach((key) => {
    const td = document.createElement("td");

    if (key === "N") {
      td.textContent = ++counter;
    } else {
      td.textContent = object[key];
    }

    tr.appendChild(td);
  });

  const td_operations = document.createElement("td");

  const edit_button = document.createElement("button");
  edit_button.textContent = "Edit";
  edit_button.classList.add("edit");
  edit_button.addEventListener("click", () => {
    editObject(object["_id"]);
  });
  td_operations.appendChild(edit_button);

  const delete_button = document.createElement("button");
  delete_button.textContent = "Delete";
  delete_button.classList.add("delete");
  delete_button.addEventListener("click", () => {
    deleteObject(object["_id"]);
  });
  td_operations.appendChild(delete_button);

  tr.appendChild(td_operations);
  tbody.appendChild(tr);
}

function newObject(body) {
  fetch(url, {
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
function editObject(id) {
  console.log("eeee");
  fetch(url + "/" + id, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      for (key in data) {
        console.log(key);
        if (key === "__v" || key === "players") continue;
        myForm[key].value = data[key];
      }
      myForm["submit"].value = "Modify";
    })
    .catch((err) => {
      console.log(err);
    });
}

// this function save modified data
function modifyObject(id, body) {
  body["_id"] = id;
  console.log(body);
  fetch(url, {
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
function deleteObject(id) {
  console.log(id);
  if (!confirm("Are you sure?")) {
    return;
  }
  fetch(url + "/" + id, {
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
  fillTable(url);
}
