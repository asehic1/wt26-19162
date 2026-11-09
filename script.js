
// ======================================
// ZADATAK 1 - LISTA ZADATAKA
// ======================================

const taskList = document.getElementById("taskList");
const taskCheckboxes = taskList.querySelectorAll('input[type="checkbox"]');
const taskSummary = document.getElementById("taskSummary");
const resetTasks = document.getElementById("resetTasks");

function updateTaskSummary() {
    const completedTasks = taskList.querySelectorAll(
        'input[type="checkbox"]:checked'
    ).length;

    taskSummary.textContent =
        `Završeno: ${completedTasks} od ${taskCheckboxes.length} zadataka`;
}

taskCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", updateTaskSummary);
});

resetTasks.addEventListener("click", function () {
    taskCheckboxes.forEach(function (checkbox) {
        checkbox.checked = false;
    });

    updateTaskSummary();
});


// ======================================
// ZADATAK 2 - KREIRANJE OBAVIJESTI
// ======================================

const announcementForm = document.getElementById("announcementForm");
const announcementTitle = document.getElementById("announcementTitle");
const announcementText = document.getElementById("announcementText");
const announcementCategory = document.getElementById("announcementCategory");
const announcementPreview = document.getElementById("announcementPreview");

announcementForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = announcementTitle.value.trim();
    const message = announcementText.value.trim();
    const category = announcementCategory.value;

    if (title === "" || message === "") {
        alert("Molimo unesite naslov i tekst obavijesti.");
        return;
    }

    announcementPreview.className = "preview " + category;
    announcementPreview.replaceChildren();

    const heading = document.createElement("h3");
    heading.textContent = title;

    const paragraph = document.createElement("p");
    paragraph.textContent = message;

    announcementPreview.appendChild(heading);
    announcementPreview.appendChild(paragraph);

    announcementForm.reset();
});


// ======================================
// ZADATAK 3 - EVIDENCIJA TROŠKOVA
// ======================================

const expenseForm = document.getElementById("expenseForm");
const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const expenseTable = document.getElementById("expenseTable");
const totalAmount = document.getElementById("totalAmount");
const expenseCount = document.getElementById("expenseCount");

function updateExpenseSummary() {
    const rows = expenseTable.querySelectorAll("tr");

    let total = 0;

    rows.forEach(function (row) {
        const amount = Number(row.cells[1].textContent);
        total += amount;
    });

    totalAmount.textContent = total.toFixed(2) + " KM";
    expenseCount.textContent = "Broj troškova: " + rows.length;
}

expenseForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = expenseName.value.trim();
    const amount = Number(expenseAmount.value);

    if (name === "") {
        alert("Unesite naziv troška.");
        return;
    }

    if (
        expenseAmount.value.trim() === "" ||
        !Number.isFinite(amount) ||
        amount < 0
    ) {
        alert("Unesite ispravan iznos koji nije negativan.");
        return;
    }

    const newRow = expenseTable.insertRow();

    const nameCell = newRow.insertCell();
    const amountCell = newRow.insertCell();

    nameCell.textContent = name;
    amountCell.textContent = amount.toFixed(2);

    updateExpenseSummary();

    expenseForm.reset();
});


// Početni obračun troškova
updateExpenseSummary();
