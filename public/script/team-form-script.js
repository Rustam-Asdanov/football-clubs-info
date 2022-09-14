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
