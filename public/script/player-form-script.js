document.forms[0].addEventListener("submit", sendData);

function sendData(event) {
  event.preventDefault();
  const myFormData = new FormData(event.target);

  const formDataObj = {};
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
