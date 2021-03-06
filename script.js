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

// FUNZIONI DA USARE
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// # Chiamo gli elementi in pagina
const gridElement = document.getElementById('grid');
const difficultyElement = document.getElementById('difficulty');
const buttonElement = document.getElementById('button');

const startEvent = () => {
buttonElement.innerText = "RICOMINCIA";

gridElement.innerText = '';
gridElement.style.display = 'flex';

let cells;
let columns;
const totalCells = cells * columns;
const extractedNumbers = [];

 switch (difficultyElement.value) {
    case 'diff-1':
        cells = 100;
        columns = 100;

        for (let i = 1; i <= 100; i++) {
            const cellNumber = getRandomNumber(1, 100, extractedNumbers);
            const cell = createCell(totalCells);
            extractedNumbers.push(cellNumber);
            gridElement.appendChild(cell);
            cell.innerText = cellNumber;
            console.log(cellNumber);
        }

        break;
        case 'diff-2':
            cells = 81;
            columns = 81;
    
            for (let i = 1; i <= 81; i++) {
                const cellNumber = getRandomNumber(1, 81, extractedNumbers);
                const cell = createCell(totalCells);
                extractedNumbers.push(cellNumber);
                gridElement.appendChild(cell);
                cell.innerText = cellNumber;
                console.log(cellNumber);
            }
    
            break;
            case 'diff-3':
                cells = 49;
                columns = 49;
        
                for (let i = 1; i <= 49; i++) {
                    const cellNumber = getRandomNumber(1, 49, extractedNumbers);
                    const cell = createCell(totalCells);
                    extractedNumbers.push(cellNumber);
                    gridElement.appendChild(cell);
                    cell.innerText = cellNumber;
                    console.log(cellNumber);
                }
        
                break;
 }

    // CREO LE CELLE
    function createCell(cellNumber, cellsPerRow) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.innerText = cellNumber;
        const wh = `calc(100% / ${cellsPerRow})`;
        cell.style.height = wh;
        cell.style.width = wh;
        return cell;
    }
};

button.addEventListener("click", () => startEvent());