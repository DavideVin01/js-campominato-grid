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

// DICHIARO VARIABILI
let cells;
let columns;
const totalCells = cells * columns;
const extractedNumbers = [];
// # Aggiungo l'evento al bottone
buttonElement.addEventListener('click', function () {

    // Collego gli input in pagina al JS come .value
    let difficultyValue = difficultyElement.value;

    // Aggiungo alla griglia il numero degli elementi in base alla difficoltà scelta
    switch (difficultyValue) {
        case 'diff-1':
            cells = 100;
            columns = 100;
            for (let i = 1; i <= 100; i++) {
                const cell = createCell(totalCells);
                gridElement.appendChild(cell);
                // cell.classList.toggle('clicked');
            }
            break;
        case 'diff-2':
            cells = 81;
            columns = 81;
            for (let i = 1; i <= 81; i++) {
                const cell = createCell(totalCells);
                gridElement.appendChild(cell);
                // cell.classList.toggle('clicked');
            }
            break;
        case 'diff-3':
            cells = 49;
            columns = 49;
            for (let i = 1; i <= 49; i++) {
                const cell = createCell(totalCells);
                gridElement.appendChild(cell);
                // cell.classList.toggle('clicked');
            }
    }



});









// for (let i = 1; i <= 100; i++) {
// }
