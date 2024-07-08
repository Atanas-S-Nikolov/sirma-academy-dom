function changeContent() {
    const row = parseInt(document.getElementById("row-select").value);
    const col = parseInt(document.getElementById("col-select").value);
    const content = document.getElementById("content").value;

    const tableBody = document.querySelector("#myTable > tbody");
    const rowToEdit = tableBody.children.item(row);
    rowToEdit.children.item(col).textContent = content;
}
