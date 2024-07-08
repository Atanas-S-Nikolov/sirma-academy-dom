function createTable() {
    const rowsCount = parseInt(document.getElementById("rows").value);
    const colsCount = parseInt(document.getElementById("cols").value);

    const table = document.getElementById("myTable");
    const tableChilds = table.children;

    const tableBody = tableChilds.length === 1
        ? table.children.item(0)
        : document.createElement("tbody");

    for (let rowIndex = 0; rowIndex < rowsCount; rowIndex++) {
        const tableRow = document.createElement("tr");
        for (let colIndex = 0; colIndex < colsCount; colIndex++) {
            const tableCell = document.createElement("td");
            tableCell.textContent = `Row-${rowIndex} Column-${colIndex}`;
            tableRow.appendChild(tableCell);
        }
        tableBody.appendChild(tableRow);
    }

    table.appendChild(tableBody);
}

function resetTable() {
    const table = document.getElementById("myTable");
    const tableBody = document.querySelector("#myTable > tbody")
    table.removeChild(tableBody);
}
