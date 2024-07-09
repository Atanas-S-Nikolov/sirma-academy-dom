function isNotBlank(str) {
  return str && !/^\s+$/.test(str);
}

function handleInputEnterPress(event, originalTextContent) {
  const key = event.key.toLowerCase();
  const isKeyEnter = key === "enter";
  const isKeyEsc = key === "escape";

  const input = document.querySelector(".item-edit");
  const { value } = input;

  if (!isKeyEnter && !isKeyEsc) {
    return;
  }

  const listItem = document.createElement("li");
  listItem.title = "Click to edit";
  listItem.onclick = editItem;

  if (isKeyEnter) {
    listItem.textContent = value;
  } else {
    listItem.textContent = originalTextContent;
  }

  if (isNotBlank(value) || isKeyEsc) {
    const list = document.querySelector("#list-app ul#items");
    list.replaceChild(listItem, input);
  }
}

function editItem(event) {
  event.preventDefault();

  const list = document.querySelector("#list-app ul#items");
  const input = document.createElement("input");
  const itemTextContent = event.target.textContent;

  input.classList.add("item-edit");
  input.value = itemTextContent;
  input.title = "Press 'enter' to save or 'esc' to cancel";
  input.onkeydown = (keyboardEvent) =>
    handleInputEnterPress(keyboardEvent, itemTextContent);

  list.replaceChild(input, event.target);
}

function createItem(event) {
  event.preventDefault();

  const listItem = document.createElement("li");
  const inputEl = document.querySelector('input[type="text"]');
  const { value } = inputEl;
  if (isNotBlank(value)) {
    listItem.textContent = value;
    listItem.title = "Click to edit";
    listItem.onclick = editItem;
    const list = document.querySelector("#list-app ul#items");
    list.appendChild(listItem);
    inputEl.value = "";
    document.getElementById("create-btn").disabled = true;
  }
}

function handleInputChange(event) {
  const { value } = event.target;
  const buttonEl = document.getElementById("create-btn");
  const isValid = isNotBlank(value);
  const buttonOnClick = isValid
    ? createItem
    : (event) => {
        event.preventDefault();
      };
  buttonEl.disabled = !isValid;
  buttonEl.onclick = buttonOnClick;
}
