function checkTable(A) {
    // Vérifie que A est un tableau et contient 9 éléments
    if (!Array.isArray(A) || A.length !== 9) {
        return false; // Retourne false si A n'est pas un tableau de 9 éléments
    }

    // Crée un ensemble pour suivre les nombres uniques
    const seenNumbers = new Set();
    
    // Parcourt chaque élément du tableau
    for (let i = 0; i < A.length; i++) {
        const num = A[i];

        // Vérifie si l'élément est un nombre et s'il est entre 1 et 9
        if (typeof num !== 'number' || num < 1 || num > 9) {
            return false; // Retourne false si un nombre invalide est trouvé
        }

        // Vérifie si le nombre a déjà été vu
        if (seenNumbers.has(num)) {
            return false; // Retourne false si un doublon est trouvé
        }

        // Ajoute le nombre à l'ensemble des nombres vus
        seenNumbers.add(num);
    }

    // Retourne true si toutes les vérifications passent
    return true;
}

function validateTableLines(to_check) {
    if (!Array.isArray(to_check) || to_check.length !== 9) {
        console.error("Le tableau 'to_check' doit être un tableau de 9 lignes.");
        return;
    }

    for (let i = 0; i < to_check.length; i++) {
        const line = to_check[i];
        
        if (!checkTable(line)) {
            console.error(`Erreur dans la ligne ${i + 1}: ${line.join(" ")}`);
        }
    }
}

// Exemple de tableau to_check
const to_check = [
    [4, 2, 7, 3, 5, 1, 9, 8, 6],
    [9, 8, 3, 7, 6, 2, 5, 1, 4],
    [1, 5, 6, 8, 9, 4, 7, 2, 3],
    [2, 3, 9, 1, 8, 5, 4, 6, 7],
    [7, 4, 1, 7, 3, 9, 2, 5, 8],
    [5, 6, 8, 2, 4, 7, 1, 3, 9],
    [8, 7, 2, 9, 1, 3, 6, 4, 5],
    [3, 9, 5, 4, 2, 6, 8, 7, 1],
    [6, 1, 4, 5, 7, 8, 3, 9, 2] // Ligne 5 erreur
];

// Appel de la fonction validateTableLines
validateTableLines(to_check);


// Fonction pour vérifier chaque colonne du tableau to_check
function validateTableColumns(to_check) {
    if (!Array.isArray(to_check) || to_check.length !== 9) {
        console.error("Le tableau 'to_check' doit être un tableau de 9 lignes.");
        return;
    }

    for (let col = 0; col < 9; col++) {
        const column = [];
        for (let row = 0; row < 9; row++) {
            column.push(to_check[row][col]);
        }

        if (!checkTable(column)) {
            console.error(`Erreur dans la colonne ${col + 1}: ${column.join(" ")}`);
            return false;
        }
    }

    console.log("Toutes les colonnes sont correctes.");
    return true;
}

validateTableColumns(to_check);//erreur dans la colonne 4

// Fonction pour vérifier chaque région 3x3 du tableau to_check
function validateTableRegions(to_check) {
    if (!Array.isArray(to_check) || to_check.length !== 9) {
        console.error("Le tableau 'to_check' doit être un tableau de 9 lignes.");
        return;
    }

    for (let row = 0; row < 9; row += 3) {
        for (let col = 0; col < 9; col += 3) {
            const region = [];

            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    region.push(to_check[row + i][col + j]);
                }
            }

            if (!checkTable(region)) {
                console.error(`Erreur dans la région commençant à la ligne ${row + 1}, colonne ${col + 1}: ${region.join(" ")}`);
                return false;
            }
        }
    }

    console.log("Toutes les régions 3x3 sont correctes.");
    return true;
}
validateTableRegions(to_check);

function validateTable(to_check) {
    if (validateTableLines(to_check) && validateTableColumns(to_check) && validateTableRegions(to_check)) {
        console.log("the table is correct.");
    } else {
        console.log("Le tableau contient des erreurs.");
    }
}
validateTable(to_check);// le tableau contient des erreurs.

