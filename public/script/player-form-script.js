document.forms[0].addEventListener("submit", sendData);
const formDataObj = {};
function sendData(event) {
  event.preventDefault();
  const myFormData = new FormData(event.target);

  myFormData.forEach((value, key) => (formDataObj[key] = value));
  console.log(formDataObj);

  fetch("api/v1/player", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formDataObj),
  })
    .then((result) => {
      if (result.status != 201) {
        console.log(result);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  return false;
}

function fillTable() {
  const myData = fetch("api/v1/player", { method: "Get" })
    .then((response) => response.json())
    .then((data) => {
      const tbody = document.getElementsByTagName("tbody")[0];

      const tr = document.createElement("tr");

      data.forEach((value) => {
        // const td = document.createElement("td");
        // td.textContent = value;
        // tr.appendChild(td);
        console.log(value);
      });

      tbody.appendChild(tr);
    })
    .catch((err) => {
      console.log(err);
    });
}

fillTable();
