// Get the values from the page
// Starts or controller function
function getValues() {
    // Get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    // Parse into Integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if(Number.isInteger(startValue) && Number.isInteger(endValue)) {
        // We call generateNumbers
        let numbers = generateNumbers(startValue, endValue);
        // We call displayNumbers
        displayNumbers(numbers)
    } else {
        alert("You must enter integers");
    }

}

// Generate Numbers from start value and end value
// Logic function(s)
function generateNumbers(startValue, endValue){
    let numbers = [];

    // we want to get all numbers from start to end
    for(let i = startValue; i <= endValue; i++){

        // This will execute in a loop until i = endValue
        numbers.push(i);
    }

    return numbers;
}

// Display the numbers in bold if they are even
// Display or view function
function displayNumbers(numbers){
    let templateRows = "";

    let className = "even";

    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];

        if(number % 2 == 0){
            className = "even";
        } else {
            className = "odd";
        }

        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
        }

    document.getElementById("results").innerHTML = templateRows;
}
