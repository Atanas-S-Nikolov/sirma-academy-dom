function insertRow() {
    const rowEls = document.getElementsByTagName("tr");
    const cellsPerRowCount = rowEls.item(0).children.length;

    const row = document.createElement("tr");
    for (let cellIndex = 1; cellIndex <= cellsPerRowCount; cellIndex++) {
        const td = document.createElement("td");
        td.textContent = `Row${rowEls.length + 1} cell${cellIndex}`
        row.appendChild(td);
    }    

    const tableBody = document.querySelector("#sampleTable > tbody");
    tableBody.appendChild(row);
}
