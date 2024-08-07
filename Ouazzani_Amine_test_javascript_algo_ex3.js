

// Stocke les erreurs détectées
let errors = [];

function checkTable(A) {
    if (!Array.isArray(A) || A.length !== 9) {
        return false;
    }

    const seenNumbers = new Set();
    
    for (let i = 0; i < A.length; i++) {
        const num = A[i];

        if (typeof num !== 'number' || num < 1 || num > 9 || seenNumbers.has(num)) {
            return false;
        }

        seenNumbers.add(num);
    }

    return true;
}

function validateTableLines(to_check) {
    for (let i = 0; i < to_check.length; i++) {
        const line = to_check[i];
        
        if (!checkTable(line)) {
            errors.push(`Erreur dans la ligne ${i + 1}: ${line.join(" ")}`);
        }
    }
    return true;
}

function validateTableColumns(to_check) {
    for (let col = 0; col < 9; col++) {
        const column = [];
        for (let row = 0; row < 9; row++) {
            column.push(to_check[row][col]);
        }

        if (!checkTable(column)) {
            errors.push(`Erreur dans la colonne ${col + 1}: ${column.join(" ")}`);
            return false;
        }
    }

    return true;
}

function validateTableRegions(to_check) {
    for (let row = 0; row < 9; row += 3) {
        for (let col = 0; col < 9; col += 3) {
            const region = [];

            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    region.push(to_check[row + i][col + j]);
                }
            }

            if (!checkTable(region)) {
                errors.push(`Erreur dans la région commençant à la ligne ${row + 1}, colonne ${col + 1}: ${region.join(" ")}`);
                return false;
            }
        }
    }

    return true;
}

function validateTable(to_check) {
    errors = [];
    validateTableLines(to_check);
    validateTableColumns(to_check);
    validateTableRegions(to_check);

    if (errors.length === 0) {
        errors.push("The table is correct.");
    }

    displayErrors();
}

function displayErrors() {
    const errorContainer = document.getElementById("error-container");
    errorContainer.innerHTML = ""; // Clear previous errors

    const table = document.createElement("table");
    const headerRow = document.createElement("tr");

    const headers = ["Erreur", "Élément 1", "Élément 2", "Élément 3", "Élément 4", "Élément 5", "Élément 6", "Élément 7", "Élément 8", "Élément 9"];
    headers.forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    errors.forEach(error => {
        const row = document.createElement("tr");
        const errorData = error.split(": ");
        const errorCell = document.createElement("td");
        errorCell.textContent = errorData[0];
        row.appendChild(errorCell);

        if (errorData[1]) {
            errorData[1].split(" ").forEach(number => {
                const td = document.createElement("td");
                td.textContent = number;
                row.appendChild(td);
            });
        }
        table.appendChild(row);
    });

    errorContainer.appendChild(table);
}

// Exemple de tableau to_check
const to_check = [
    [4, 2, 7, 3, 5, 1, 9, 8, 6],
    [9, 8, 3, 7, 6, 2, 5, 1, 4],
    [1, 5, 6, 8, 9, 4, 7, 2, 3],
    [2, 3, 9, 1, 8, 5, 4, 6, 7],
    [7, 4, 1, 6, 3, 9, 2, 5, 8],
    [5, 6, 8, 2, 4, 7, 1, 3, 9],
    [8, 7, 2, 9, 1, 3, 6, 4, 5],
    [3, 9, 5, 4, 2, 6, 8, 7, 1],
    [6, 1, 4, 5, 7, 8, 3, 9, 6] 
];

validateTable(to_check);
