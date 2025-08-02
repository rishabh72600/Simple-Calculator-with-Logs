const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button[data-value]');
const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');
const equalsBtn = document.getElementById('equals');
const historyList = document.getElementById('history');
const deleteHistoryBtn = document.getElementById('delete-history');
const toggleDarkModeBtn = document.getElementById('toggle-dark-mode');

let currentInput = '';

// Load dark mode preference from localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    toggleDarkModeBtn.setAttribute('aria-pressed', 'true');
}

function updateDisplay() {
    display.value = currentInput || '0';
}

function appendToInput(value) {
    currentInput += value;
    updateDisplay();
    // Add button press animation
    const button = Array.from(buttons).find(btn => btn.getAttribute('data-value') === value);
    if (button) {
        button.classList.add('pressed');
        setTimeout(() => button.classList.remove('pressed'), 150);
    }
}

function clearInput() {
    currentInput = '';
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(currentInput);
        if (result !== undefined) {
            logCalculation(currentInput + ' = ' + result).then(() => {
                currentInput = result.toString();
                updateDisplay();
                fetchAndDisplayHistory();
            });
        }
    } catch (e) {
        display.value = 'Error';
        currentInput = '';
    }
}

function fetchAndDisplayHistory() {
    fetch('http://localhost:3000/api/logs')
        .then(response => {
            console.log('Fetch history response status:', response.status);
            return response.json();
        })
        .then(data => {
            console.log('Fetched history data:', data);
            historyList.innerHTML = '';
            if (data.length === 0) {
                historyList.textContent = 'No history yet';
            } else {
                data.forEach(log => {
                    const li = document.createElement('li');
                    li.textContent = log.calculation;
                    historyList.appendChild(li);
                });
                // Highlight the last entry briefly
                const lastItem = historyList.lastElementChild;
                if (lastItem) {
                    lastItem.classList.add('highlight');
                    setTimeout(() => lastItem.classList.remove('highlight'), 2000);
                    lastItem.scrollIntoView({ behavior: 'smooth' });
                }
            }
        })
        .catch(err => {
            console.error('Error fetching history:', err);
        });
}

function logCalculation(expression) {
    return fetch('http://localhost:3000/api/log', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ calculation: expression })
    }).catch(err => {
        console.error('Error logging calculation:', err);
    });
}

function deleteHistory() {
    fetch('http://localhost:3000/api/logs', {
        method: 'DELETE'
    }).then(() => {
        fetchAndDisplayHistory();
    }).catch(err => {
        console.error('Error deleting history:', err);
    });
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    toggleDarkModeBtn.setAttribute('aria-pressed', isDarkMode.toString());
    // Save preference
    if (isDarkMode) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '%', '.'].includes(key)) {
        appendToInput(key);
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key.toLowerCase() === 'c') {
        clearInput();
    }
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        appendToInput(button.getAttribute('data-value'));
    });
});

clearBtn.addEventListener('click', () => {
    clearInput();
});

deleteBtn.addEventListener('click', () => {
    deleteLast();
});

equalsBtn.addEventListener('click', () => {
    calculate();
});

deleteHistoryBtn.addEventListener('click', () => {
    deleteHistory();
});

toggleDarkModeBtn.addEventListener('click', () => {
    toggleDarkMode();
});

fetchAndDisplayHistory();
