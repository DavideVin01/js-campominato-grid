// L'utente indica TRAMITE DOM un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

/*
1 - Richiamare elementi in pagina
2 - Generare la griglia al click di un bottone
- Collego gli input in pagina al JS come .value
3 - Creare una griglia con dentro le celle in base al numero di difficoltà (costrutto switch)
Per generare celle: 
Creiamo un ciclo for
Aggiungiamo un nuovo elemento con grid.appendChil(cell)



- Al click di ogni cella, diventa azzurra
*/

// # Chiamo gli elementi in pagina
const gridElement = document.getElementById('grid');
const difficultyElement = document.getElementById('difficulty');
const buttonElement = document.getElementById('button');

// # Aggiungo l'evento al bottone
buttonElement.addEventListener('click', function () {

    // Collego gli input in pagina al JS come .value
    const difficultyValue = difficultyElement.value;




});