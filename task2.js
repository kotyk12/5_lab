const table = document.getElementById('myTable');
const runBtn = document.getElementById('runBtn');
let counter = 1;

for (let i = 0; i < 6; i++) {
    const row = table.insertRow();
    for (let j = 0; j < 6; j++) {
        const cell = row.insertCell();
        cell.textContent = counter++;

        cell.addEventListener('mouseover', function() {
            if (cell.textContent === '7') {
                cell.style.backgroundColor = getRandomColor();
            }
        });

        cell.addEventListener('click', function() {
            if (cell.textContent === '7') {
                const color = prompt('Введіть колір (наприклад, red, #ff0000):');
                cell.style.backgroundColor = color || 'blue';
            }
        });

        // dblclick — більше нічого не робить
        cell.addEventListener('dblclick', function() {
            return;
        });
    }
}

// 👉 Логіка, що раніше була в dblclick
runBtn.addEventListener('click', function () {

    // Знаходимо комірку з числом 7
    let startRowIndex = null;
    for (let r = 0; r < table.rows.length; r++) {
        for (let c = 0; c < table.rows[r].cells.length; c++) {
            if (table.rows[r].cells[c].textContent === '7') {
                startRowIndex = r;
            }
        }
    }

    if (startRowIndex === null) return;

    const rows = table.rows;
    for (let k = startRowIndex; k < rows.length; k += 2) {
        for (let l = 0; l < rows[k].cells.length; l++) {
            rows[k].cells[l].style.backgroundColor = getRandomColor();
        }
    }
});


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
