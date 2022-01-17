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


// # FUNZIONI
const numbersRange = (min, max) => {
    const rangeArray = [];
    for (let i = min; i <= max; i++) {
        rangeArray.push(i);
    }
    return rangeArray;
}

const createCell = (cellNumber) => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.id = cellNumber;
    cell.innerText = cellNumber;
    return cell;
}


// # Chiamo gli elementi in pagina
const gridElement = document.getElementById('grid');
const difficultyElement = document.getElementById('difficulty');
const buttonElement = document.getElementById('button');

const cells = numbersRange;
const columns = numbersRange;
const totalCells = cells * columns;
const extractedNumbers = [];
// # Aggiungo l'evento al bottone
buttonElement.addEventListener('click', function () {

    // Collego gli input in pagina al JS come .value
    let difficultyValue = difficultyElement.value;

    // Aggiungo alla griglia il numero degli elementi in base alla difficoltà scelta


    for (let i = difficultyValue; i < difficultyValue; i++) {



        switch (difficultyValue) {
            case 'diff-1':
                numbersRange(1, 100);

                break;
            case 'diff-2':
                numbersRange(1, 81);
                break;
            case 'diff-3':
                numbersRange(1, 49);
        }

    }



});










// for (let i = 1; i <= 100; i++) {
// }
