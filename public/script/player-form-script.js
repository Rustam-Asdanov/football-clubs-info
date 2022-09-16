const myForm = document.forms[0];
const abilityForm = document.forms[1];

myForm.addEventListener("submit", abilityData);
abilityForm.addEventListener("submit", sendData);

const formDataObj = {};

const ability_rate = {
  pace: 0,
  dribbling: 0,
  shooting: 0,
  defending: 0,
  passing: 0,
  physical: 0,
  overall: 0,
};

const headers = [
  "N",
  "fullname",
  "country",
  "club",
  "age",
  "position",
  "number",
  "image",
];
setUrl("api/v1/player");

function abilityData(event) {
  event.preventDefault();
  const myFormData = new FormData(event.target);

  myFormData.forEach((value, key) => (formDataObj[key] = value));

  console.log(formDataObj);
  document.getElementsByClassName("ability-box")[0].classList.remove("hide");
  return false;
}

// Thist function control save and modify methods
function sendData(event) {
  event.preventDefault();

  formDataObj["rating"] = ability_rate;

  console.log(formDataObj);
  // if (myForm["submit"].value === "Save") {
  //   newObject(formDataObj);
  // } else if (myForm["submit"].value === "Modify") {
  //   modifyObject(myForm["_id"].value, formDataObj);
  // }
  // fillTable(url);
  myForm.reset();
  document.getElementsByClassName("ability-box")[0].classList.add("hide");
  return true;
}

document
  .querySelectorAll("div.ability-box input[type='number']")
  .forEach((elem) =>
    elem.addEventListener("keyup", (e) => {
      let overall_input = 0;
      delete ability_rate["overall"];

      ability_rate[elem.name] = Number(elem.value);
      Object.values(ability_rate).forEach((value) => {
        overall_input += value;
      });
      ability_rate["overall"] = Math.round(overall_input / 6);
      document.getElementsByName("overall")[0].value = ability_rate["overall"];
    })
  );

function randomRatingGenerate() {
  let overall_input = 0;
  delete ability_rate["overall"];
  Object.keys(ability_rate).forEach((key) => {
    ability_rate[key] = Math.round(Math.random() * 70 + 30);
    document.getElementsByName(key)[0].value = ability_rate[key];
    overall_input += ability_rate[key];
  });

  ability_rate["overall"] = Math.round(overall_input / 6);
  document.getElementsByName("overall")[0].value = ability_rate["overall"];
}

fillTable(url);
