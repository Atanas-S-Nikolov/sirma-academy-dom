function getOptions() {
  const optionsHTMLCollection = document.getElementById("mySelect").children;
  const options = Array.from(optionsHTMLCollection)
    .map((option) => option.textContent)
    .join(", ");
  alert(`Options count: ${optionsHTMLCollection.length}\nOptions values: ${options}.`);
}
