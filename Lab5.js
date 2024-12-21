let currentRow = 1;
const maxRows = 3;
let mathTotal = 0;
let englishTotal = 0;
let gradeEntries = 0;

function submitGrades() {
    const mathInput = parseFloat(document.getElementById('mathGrade').value);
    const englishInput = parseFloat(document.getElementById('englishGrade').value);

    if (currentRow <= maxRows) {
        document.getElementById(`math${currentRow}`).textContent = mathInput;
        document.getElementById(`english${currentRow}`).textContent = englishInput;

        const average = ((mathInput + englishInput) / 2).toFixed(2);
        document.getElementById(`average${currentRow}`).textContent = average;

        mathTotal += mathInput;
        englishTotal += englishInput;
        gradeEntries++;

        updateFooter();
        currentRow++;
    } 
    document.getElementById('mathGrade').value = '';
    document.getElementById('englishGrade').value = '';
}

function updateFooter() {
    const mathAverage = (mathTotal / gradeEntries).toFixed(2);
    const englishAverage = (englishTotal / gradeEntries).toFixed(2);
    const overallAverage = ((mathTotal + englishTotal) / (2 * gradeEntries)).toFixed(2);

    document.getElementById('mathAverage').textContent = mathAverage;
    document.getElementById('englishAverage').textContent = englishAverage;
    document.getElementById('totalAverage').textContent = overallAverage;
}
