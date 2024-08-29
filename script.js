document.getElementById('expense-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const expenseName = document.getElementById('expense-name').value;
    const expenseAmount = parseFloat(document.getElementById('expense-amount').value);

    if (expenseName && expenseAmount) {
        addExpense(expenseName, expenseAmount);
        updateTotalAmount();
        document.getElementById('expense-form').reset();
    }
});

function addExpense(name, amount) {
    const expenseList = document.getElementById('expense-list');

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${name}</td>
        <td>${amount.toFixed(2)}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;
    
    row.querySelector('.delete-btn').addEventListener('click', function() {
        row.remove();
        updateTotalAmount();
    });

    expenseList.appendChild(row);
}

function updateTotalAmount() {
    const expenses = document.querySelectorAll('#expense-list tr');
    let total = 0;

    expenses.forEach(function(row) {
        const amount = parseFloat(row.children[1].textContent.replace('$', ''));
        total += amount;
    });

    document.getElementById('total-amount').textContent = total.toFixed(2);
}