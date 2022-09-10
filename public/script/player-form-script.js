function sendData() {
  const myForm = document.forms[0];
  const data = new FormData();
  data.append("number", myForm["number"].value);
  data.append("fullname", myForm["fullname"].value);
  data.append("country", myForm["country"].value);
  data.append("club", myForm["club"].value);
  data.append("position", myForm["position"].value);
  data.append("age", myForm["age"].value);

  console.log(data);
  fetch("", {
    method: "POST",
    body: data,
  })
    .then((result) => {
      if (result.status != 200) {
        console.log("some problems");
      }
    })
    .catch((err) => {
      console.log(err);
    });
  return false;
}
