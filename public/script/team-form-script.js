const myForm = document.forms[0];

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

  if (myForm["submit"].value === "Save") {
    newObject(formDataObj);
  } else if (myForm["submit"].value === "Modify") {
    modifyObject(myForm["_id"].value, formDataObj);
  }
  fillTable(url);
  return false;
}

fillTable(url);

// it will give us previous 5 elements
let page = 1;
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
