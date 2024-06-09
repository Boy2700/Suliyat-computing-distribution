// role to descriptive 

function handleButtonClick1(message) {
    if (confirm(`Are you sure you want to ${message}?`)) {
        window.location.href = 'discriptive.html';
    }
}
// role to binomial
function handleButtonClick2(message) {
    if (confirm(`Are you sure you want to ${message}?`)) {
        window.location.href = 'binomial.html';
    }
}
// role to normal
function handleButtonClick3(message) {
    if (confirm(`Are you sure you want to ${message}?`)) {
        window.location.href = 'normal.html';
    }
}
// role to uniform
function handleButtonClick4(message) {
    if (confirm(`Are you sure you want to ${message}?`)) {
        window.location.href = 'uniform.html';
    }
}


var numbers = [];
var inputField = document.getElementById("inputNumber");
var numbersDisplay = document.getElementById("numbers");
var statisticsDisplay = document.getElementById("statistics");

function addNumber() {
    var value = parseInt(inputField.value.trim());
    if (!isNaN(value)) {
        numbers.push(value);
        inputField.value = "";
        displayNumbers();
        calculateStatistics();
    } else {
        alert("Please enter a valid number.");
    }
}

function displayNumbers() {
    numbersDisplay.innerHTML = "<strong>Input Numbers:</strong><br>";
    for (var i = 0; i < numbers.length; i++) {
        numbersDisplay.innerHTML += numbers[i] + " ";
    }
}

function calculateStatistics() {
    var sum = 0;
    var mean = 0;
    var mode = 0;
    var sortedNumbers = [...numbers].sort((a, b) => a - b);
    var middle = Math.floor(sortedNumbers.length / 2);
    // Calculate sum
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    // Calculate mean
    mean = sum / numbers.length;
    // Calculate mode
    var modeMap = {};
    var maxCount = 0;
    for (var i = 0; i < numbers.length; i++) {
        var num = numbers[i];
        modeMap[num] = (modeMap[num] || 0) + 1;
        if (modeMap[num] > maxCount) {
            mode = num;
            maxCount = modeMap[num];
        }
    }
    // Calculate median
    var median = sortedNumbers.length % 2 === 0 ? (sortedNumbers[middle - 1] + sortedNumbers[middle]) / 2 : sortedNumbers[middle];
    // Display statistics
    statisticsDisplay.innerHTML = "<strong>Summary Statistics:</strong><br>" + "Mean: " + mean.toFixed(2) + "<br>" + "Median: " + median + "<br>" + "Mode: " + mode + "<br>" + "Minimum: " + sortedNumbers[0] + "<br>" + "Maximum: " + sortedNumbers[sortedNumbers.length - 1] + "<br>" + "Sum: " + sum;
}

function editNumbers() {
    var newNumbers = prompt("Enter new numbers separated by space:");
    if (newNumbers !== null) {
        numbers = newNumbers.split(" ").map(Number);
        displayNumbers();
        calculateStatistics();
    }
}

function restart() {
    numbers = [];
    inputField.value = "";
    numbersDisplay.innerHTML = "";
    statisticsDisplay.innerHTML = "";
}



function logout(message) {
    if (confirm(`Are you sure you want to logout ?`)) {
        window.location.href = '../index.html';

    }
}









// scripts.js to calculate normal 

function calculate() {
    const a = parseFloat(document.getElementById("minValue").value);
    const b = parseFloat(document.getElementById("maxValue").value);
    const x = parseFloat(document.getElementById("xValue").value);

    if (a >= b) {
        document.getElementById("result").innerHTML = "<p>Minimum value (a) must be less than Maximum value (b).</p>";
        return;
    }

    if (x < a || x > b) {
        document.getElementById("result").innerHTML = "<p>The value (X) must be within the range [a, b].</p>";
        return;
    }

    const cdf = (x - a) / (b - a);
    document.getElementById("result").innerHTML = `<p>The Cumulative Distribution Function (CDF) value at X = ${x} for the uniform distribution with range [${a}, ${b}] is: <strong>${cdf.toFixed(4)}</strong>.</p>`;
}

function reset() {
    document.getElementById("minValue").value = "";
    document.getElementById("maxValue").value = "";
    document.getElementById("xValue").value = "";
    document.getElementById("result").innerHTML = "";

}