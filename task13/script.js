function handleInputEnterPress(event, originalTextContent) {
    const key = event.key.toLowerCase();
    const isKeyEnter = key === "enter";
    const isKeyEsc = key === "escape";

    const input = document.querySelector(".item-edit");
    
    if (!isKeyEnter && !isKeyEsc) {
        return;
    }

    const listItem = document.createElement("li");
    listItem.title = "Click to edit";
    listItem.onclick = editItem;

    if (isKeyEnter) {
        listItem.textContent = input.value;
    } else {
        listItem.textContent = originalTextContent;
    }

    const list = document.querySelector('#list-app ul#items');
    list.replaceChild(listItem, input);
}

function editItem(event) {
    event.preventDefault();
    
    const list = document.querySelector('#list-app ul#items');
    const input = document.createElement("input");
    const itemTextContent = event.target.textContent;

    input.classList.add("item-edit");
    input.value = itemTextContent;
    input.title = "Press 'enter' to save or 'esc' to cancel";
    input.onkeydown = (keyboardEvent) => handleInputEnterPress(keyboardEvent, itemTextContent);

    list.replaceChild(input, event.target);
}

function createItem(event) {
    event.preventDefault();
    
    const listItem = document.createElement('li');
    const inputText = document.querySelector('input[type="text"]')
    listItem.textContent = inputText.value;
    listItem.title = "Click to edit";
    listItem.onclick = editItem;

    const list = document.querySelector('#list-app ul#items');
    list.appendChild(listItem);
}
