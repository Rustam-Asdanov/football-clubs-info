const capitalize = (text) => {
  let result = "";
  for (let elem of text.split(" ")) {
    result += elem.charAt(0).toUpperCase() + elem.slice(1) + " ";
  }

  return result.trim();
};

module.exports = {
  capitalize,
};
