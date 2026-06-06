const display = document.getElementById("display");

// Add values to display
function appendValue(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate result
// function calculate() {

//     try {
//         display.value = eval(display.value);
//     } catch (error) {
//         display.value = "Error";
//     }

// }

function calculate() {
    try {

        let expression = display.value;

        // Replace √number with Math.sqrt(number)
        expression = expression.replace(/√(\d+(\.\d+)?)/g, "Math.sqrt($1)");

        display.value = eval(expression);

    } catch (error) {
        display.value = "Error";
    }
}