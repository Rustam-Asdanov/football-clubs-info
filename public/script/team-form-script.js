const myForm = document.forms[0];
let page = 1;

myForm.addEventListener("submit", sendData);
const formDataObj = {};

const headers = ["N", "name", "country", "coach", "balance"];
setUrl("api/v1/team");

function sendData(event) {
  event.preventDefault();
  const myFormData = new FormData(event.target);

  myFormData.forEach((value, key) => {
    formDataObj[key] = value;
  });

  saveLogo();

  // if (myForm["submit"].value === "Save") {
  //   newObject(formDataObj);
  // } else if (myForm["submit"].value === "Modify") {
  //   modifyObject(myForm["_id"].value, formDataObj);
  // }
  fillTable(url);
  page = 1;
  myForm.reset();
  return false;
}

fillTable(url);

// it will give us previous 5 elements
const previous_btn = document.getElementById("previous-obj-btn");
previous_btn.disabled = false;
previous_btn.addEventListener("click", () => {
  if (page != 1) {
    fillTable(`api/v1/team/teams/${--page}`);
  }
  console.log(page);
});

// it will give us next 5 elements
document.getElementById("next-obj-btn").addEventListener("click", () => {
  fillTable(`api/v1/team/teams/${++page}`);
  console.log(page);
});

function saveLogo() {
  const myImageData = new FormData();
  const fileField = document.querySelector("input[type='file']");

  myImageData.append("name", "Sam");
  myImageData.append("myImage", fileField.files[0]);

  fetch("api/v1/team/file", {
    method: "POST",
    body: myImageData,
  })
    .then((response) => response.json())
    .then((result) => {
      console.log("Success: " + result);
    })
    .catch((err) => {
      console.log("Error: " + err);
    });
}
