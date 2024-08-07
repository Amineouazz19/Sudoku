

var array_number = new Array(9);
array_number[0]= "4 2 7 3 5 1 9 8 6";
array_number[1]= "9 8 3 7 6 2 5 1 4";
array_number[2]= "1 5 6 8 9 4 7 2 3";
array_number[3]= "2 3 9 1 8 5 4 6 7";
array_number[4]= "7 4 1 6 3 9 2 5 8";
array_number[5]= "5 6 8 2 4 7 1 3 9";
array_number[6]= "8 7 2 9 1 3 6 4 5";
array_number[7]= "3 9 5 4 2 6 8 7 1";
array_number[8]= "6 1 4 5 7 8 3 9 6";


//question 1: créer un tableau de dimension 2 9*9
var to_verify = new Array(9);
for (var i = 0; i < 9; i++) {
    to_verify[i] = new Array(9);
}
console.log(to_verify);

//question 2: 

// Entrer le tableau array_number pour le test, split est pour séparer les données des lignes sous-forme de chaines de caractères, et map(number) est pour les rendre sous-forme de nombres.
function readTable(array_number) {
    for (var i = 0; i < 9; i++) {
        // Convertit chaque ligne de données en un tableau de nombres et l'assigne à la ligne correspondante de to_verify
        to_verify[i] = array_number[i].split(" ").map(Number);
    }
    return to_verify;
}

to_verify= readTable(array_number);
console.log(to_verify);

 //Fonction pour afficher le tableau "to_verify" sous forme de tableau HTML
 function displayTableAsHTML(to_verify) {
    var tableContainer = document.getElementById('table-container');
    var html = '<table>';
    for (var i = 0; i < to_verify.length; i++) {
        html += '<tr>';
        for (var j = 0; j < to_verify[i].length; j++) {
            html += '<td>' + to_verify[i][j] + '</td>';
        }
        html += '</tr>';
    }
    html += '</table>';
    tableContainer.innerHTML = html;
}



// Affichage du tableau en HTML
displayTableAsHTML(to_verify);
