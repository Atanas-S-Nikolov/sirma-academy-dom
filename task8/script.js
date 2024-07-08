function removecolor() {
  const select = document.getElementById("colorSelect");
  const optionToRemove = document.querySelector(
    `option[value='${select.value}']`
  );

  if (optionToRemove) {
    select.removeChild(optionToRemove);
  }
}
