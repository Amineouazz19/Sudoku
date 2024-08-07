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
// Exemple d'utilisation de la fonction checkTable
const example1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(checkTable(example1)); 

const example2 = [1, 2, 3, 4, 5, 6, 7, 7, 10];
console.log(checkTable(example2)); 

const example3 =[1,4,15,8,9,1,2,3,4,5];
console.log(checkTable(example2)); 