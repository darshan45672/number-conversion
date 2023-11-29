function convertBinaryToDecimal() {
    // Get the binary input value
    var binaryInput = document.getElementById('binaryInput').value;
    // Check if the input is a valid binary number
    if (/^[01]+$/.test(binaryInput)) {
        // Initialize the decimal result variable
        var decimalResult = 0;
        // Initialize a string to store the steps
        var steps = "";
        // Iterate through each binary digit in reverse order
        for (var i = binaryInput.length - 1, j = 0; i >= 0; i--, j++) {
            // Convert the binary digit to decimal
            var binaryDigit = parseInt(binaryInput[i]);
            // Calculate the power of 2 for the current position
            var powerOf2 = Math.pow(2, j);
            // Calculate the decimal contribution for the current position
            var decimalContribution = binaryDigit * powerOf2;
            // Accumulate the decimal values
            decimalResult += decimalContribution;
            // Append the step to the steps string
            steps += `Step ${j + 1}: ${binaryDigit} * 2^${j} = ${decimalContribution}<br>`;
        }
        // Display the steps and the final result
        document.getElementById('result').innerHTML = steps + '<br>Decimal: ' + decimalResult;
    } else {
        // Display an error message for invalid input
        document.getElementById('result').innerHTML = 'Invalid binary input. Please enter a valid binary number.';
    }
}

function convertOctalToDecimal() {
    // Get the octal input value
    var octalInput = document.getElementById('octalInput').value;

    // Check if the input is a valid octal number
    if (/^[0-7]+$/.test(octalInput)) {
        // Initialize the steps string
        var steps = '';

        // Step 1: Display the original octal number
        steps += 'Step 1: Original Octal Number: ' + octalInput + '<br>';

        // Step 2: Convert each octal digit to decimal
        for (var i = octalInput.length - 1, j = 0; i >= 0; i--, j++) {
            var octalDigit = parseInt(octalInput[i]);
            var powerOf8 = Math.pow(8, j);
            var decimalContribution = octalDigit * powerOf8;

            // Append the step to the steps string
            steps += `   Step ${j + 2}: ${octalDigit} * 8^${j} = ${decimalContribution}<br>`;
        }

        // Step 3: Display the final result
        var decimalResult = parseInt(octalInput, 8);
        steps += 'Step 3: Combine Decimal Values: ' + octalInput + ' (base 8) = ' + decimalResult + ' (base 10)<br>';

        // Display the steps and the final result
        document.getElementById('result').innerHTML = 'Decimal: ' + decimalResult + '<br><br>' + steps;
    } else {
        // Display an error message for invalid input
        document.getElementById('result').innerHTML = 'Invalid octal input. Please enter a valid octal number.';
    }
}


function convertHexToDecimal() {
    // Get the hexadecimal input value
    var hexInput = document.getElementById('hexInput').value;

    // Check if the input is a valid hexadecimal number
    if (/^[0-9A-Fa-f]+$/.test(hexInput)) {
        // Initialize the decimal result variable
        var decimalResult = 0;

        // Initialize a string to store the steps
        var steps = '';

        // Step 1: Display the original hexadecimal number
        steps += 'Step 1: Original Hexadecimal Number: ' + hexInput + '<br>';

        // Iterate through each hex digit in reverse order
        for (var i = hexInput.length - 1, j = 0; i >= 0; i--, j++) {
            // Get the current hex digit
            var hexDigit = hexInput[i].toUpperCase(); // Convert to uppercase for consistency

            // Convert the hex digit to decimal
            var decimalValue = parseInt(hexDigit, 16);

            // Calculate the power of 16 for the current position
            var powerOf16 = Math.pow(16, j);

            // Calculate the decimal contribution for the current position
            var decimalContribution = decimalValue * powerOf16;

            // Accumulate the decimal values
            decimalResult += decimalContribution;

            // Append the step to the steps string
            steps += `Step ${j + 2}: ${hexDigit} * 16^${j} = ${decimalContribution}<br>`;
        }

        // Step 2: Display the final result
        document.getElementById('result').innerHTML = steps + '<br>Decimal: ' + decimalResult;
    } else {
        // Display an error message for invalid input
        document.getElementById('result').innerHTML = 'Invalid hexadecimal input. Please enter a valid hexadecimal number.';
    }
}


function convertDecimalToBinary() {
    // Get the decimal input value
    var decimalInput = document.getElementById('decimalInput').value;

    // Check if the input is a valid decimal number
    if (!isNaN(decimalInput) && decimalInput >= 0) {
        // Convert decimal to binary
        var binaryResult = Number(decimalInput).toString(2);

        // Initialize the steps string
        var steps = '';

        // Step 1: Display the original decimal number
        steps += 'Step 1: Original Decimal Number: ' + decimalInput + '<br>';

        // Step 2: Convert decimal to binary
        steps += 'Step 2: Convert Decimal to Binary: ' + decimalInput + ' (base 10) = ' + binaryResult + ' (base 2)<br>';

        // Display the steps and the final result
        document.getElementById('result').innerHTML = 'Binary: ' + binaryResult + '<br><br>' + steps;
    } else {
        // Display an error message for invalid input
        document.getElementById('result').innerHTML = 'Invalid decimal input. Please enter a non-negative decimal number.';
    }
}


function convertOctalToBinary() {
    // Get the octal input value
    var octalInput = document.getElementById('octalInput').value;

    // Check if the input is a valid octal number
    if (/^[0-7]+$/.test(octalInput)) {
        // Convert octal to binary
        var decimalResult = parseInt(octalInput, 8);
        var binaryResult = decimalResult.toString(2);

        // Initialize the steps string
        var steps = '';

        // Step 1: Display the original octal number
        steps += 'Step 1: Original Octal Number: ' + octalInput + '<br>';

        // Step 2: Convert octal to decimal
        steps += 'Step 2: Convert Octal to Decimal: ' + octalInput + ' (base 8) = ' + decimalResult + ' (base 10)<br>';

        // Step 3: Convert decimal to binary
        steps += 'Step 3: Convert Decimal to Binary: ' + decimalResult + ' (base 10) = ' + binaryResult + ' (base 2)<br>';

        // Display the steps and the final result
        document.getElementById('result').innerHTML = 'Binary: ' + binaryResult + '<br><br>' + steps;
    } else {
        // Display an error message for invalid input
        document.getElementById('result').innerHTML = 'Invalid octal input. Please enter a valid octal number.';
    }
}


function convertDecimalToOctal() {
    // Get the decimal input value
    var decimalInput = document.getElementById('decimalInput').value;

    // Check if the input is a valid decimal number
    if (!isNaN(decimalInput) && decimalInput >= 0) {
        // Convert decimal to octal
        var octalResult = Number(decimalInput).toString(8);

        // Initialize the steps string
        var steps = '';

        // Step 1: Display the original decimal number
        steps += 'Step 1: Original Decimal Number: ' + decimalInput + '<br>';

        // Step 2: Convert decimal to octal
        steps += 'Step 2: Convert Decimal to Octal: ' + decimalInput + ' (base 10) = ' + octalResult + ' (base 8)<br>';

        // Display the steps and the final result
        document.getElementById('result').innerHTML = 'Octal: ' + octalResult + '<br><br>' + steps;
    } else {
        // Display an error message for invalid input
        document.getElementById('result').innerHTML = 'Invalid decimal input. Please enter a non-negative decimal number.';
    }
}


function convertHexToOctal() {
    // Get the hexadecimal input value
    var hexInput = document.getElementById('hexInput').value;

    // Check if the input is a valid hexadecimal number
    if (/^[0-9A-Fa-f]+$/.test(hexInput)) {
        // Convert hexadecimal to decimal
        var decimalResult = parseInt(hexInput, 16);

        // Convert decimal to octal
        var octalResult = decimalResult.toString(8);
        // Initialize the steps string
        var steps = '';
        // Step 1: Display the original hexadecimal number
        steps += 'Step 1: Original Hexadecimal Number: ' + hexInput + '<br>';
        // Step 2: Convert hexadecimal to decimal
        steps += 'Step 2: Convert Hexadecimal to Decimal: ' + hexInput + ' (base 16) = ' + decimalResult + ' (base 10)<br>';
        // Step 3: Convert decimal to octal
        steps += 'Step 3: Convert Decimal to Octal: ' + decimalResult + ' (base 10) = ' + octalResult + ' (base 8)<br>';
        // Display the steps and the final result
        document.getElementById('result').innerHTML = 'Octal: ' + octalResult + '<br><br>' + steps;
    } else {
        // Display an error message for invalid input
        document.getElementById('result').innerHTML = 'Invalid hexadecimal input. Please enter a valid hexadecimal number.';
    }
}


function convertBinaryToOctal() {
    // Get the binary input value
    var binaryInput = document.getElementById('binaryInput').value;

    // Check if the input is a valid binary number
    if (/^[01]+$/.test(binaryInput)) {
        // Convert binary to decimal
        var decimalResult = parseInt(binaryInput, 2);

        // Convert decimal to octal
        var octalResult = decimalResult.toString(8);

        // Initialize the steps string
        var steps = '';

        // Step 1: Display the original binary number
        steps += 'Step 1: Original Binary Number: ' + binaryInput + '<br>';

        // Step 2: Convert binary to decimal
        steps += 'Step 2: Convert Binary to Decimal: ' + binaryInput + ' (base 2) = ' + decimalResult + ' (base 10)<br>';

        // Step 3: Convert decimal to octal
        steps += 'Step 3: Convert Decimal to Octal: ' + decimalResult + ' (base 10) = ' + octalResult + ' (base 8)<br>';

        // Display the steps and the final result
        document.getElementById('result').innerHTML = 'Octal: ' + octalResult + '<br><br>' + steps;
    } else {
        // Display an error message for invalid input
        document.getElementById('result').innerHTML = 'Invalid binary input. Please enter a valid binary number.';
    }
}


function convertDecimalToHex() {
    // Get the decimal input value
    var decimalInput = document.getElementById('decimalInput').value;

    // Check if the input is a valid decimal number
    if (!isNaN(decimalInput) && decimalInput >= 0) {
        // Convert decimal to hexadecimal
        var hexResult = Number(decimalInput).toString(16).toUpperCase();

        // Initialize the steps string
        var steps = '';

        // Step 1: Display the original decimal number
        steps += 'Step 1: Original Decimal Number: ' + decimalInput + '<br>';

        // Step 2: Convert decimal to hexadecimal
        steps += 'Step 2: Convert Decimal to Hexadecimal: ' + decimalInput + ' (base 10) = ' + hexResult + ' (base 16)<br>';

        // Display the steps and the final result
        document.getElementById('result').innerHTML = 'Hexadecimal: ' + hexResult + '<br><br>' + steps;
    } else {
        // Display an error message for invalid input
        document.getElementById('result').innerHTML = 'Invalid decimal input. Please enter a non-negative decimal number.';
    }
}

function convertOctalToHex() {
    // Get the octal input value
    var octalInput = document.getElementById('octalInput').value;

    // Check if the input is a valid octal number
    if (/^[0-7]+$/.test(octalInput)) {
        // Convert octal to decimal
        var decimalResult = parseInt(octalInput, 8);

        // Convert decimal to hexadecimal
        var hexResult = decimalResult.toString(16).toUpperCase();

        // Initialize the steps string
        var steps = '';

        // Step 1: Display the original octal number
        steps += 'Step 1: Original Octal Number: ' + octalInput + '<br>';

        // Step 2: Convert octal to decimal
        steps += 'Step 2: Convert Octal to Decimal: ' + octalInput + ' (base 8) = ' + decimalResult + ' (base 10)<br>';

        // Step 3: Convert decimal to hexadecimal
        steps += 'Step 3: Convert Decimal to Hexadecimal: ' + decimalResult + ' (base 10) = ' + hexResult + ' (base 16)<br>';

        // Display the steps and the final result
        document.getElementById('result').innerHTML = 'Hexadecimal: ' + hexResult + '<br><br>' + steps;
    } else {
        // Display an error message for invalid input
        document.getElementById('result').innerHTML = 'Invalid octal input. Please enter a valid octal number.';
    }
}

function convertBinaryToHex() {
    // Get the binary input value
    var binaryInput = document.getElementById('binaryInput').value;

    // Check if the input is a valid binary number
    if (/^[01]+$/.test(binaryInput)) {
        // Convert binary to decimal
        var decimalResult = parseInt(binaryInput, 2);

        // Convert decimal to hexadecimal
        var hexResult = decimalResult.toString(16).toUpperCase();

        // Initialize the steps string
        var steps = '';

        // Step 1: Display the original binary number
        steps += 'Step 1: Original Binary Number: ' + binaryInput + '<br>';

        // Step 2: Convert binary to decimal
        steps += 'Step 2: Convert Binary to Decimal: ' + binaryInput + ' (base 2) = ' + decimalResult + ' (base 10)<br>';

        // Step 3: Convert decimal to hexadecimal
        steps += 'Step 3: Convert Decimal to Hexadecimal: ' + decimalResult + ' (base 10) = ' + hexResult + ' (base 16)<br>';

        // Display the steps and the final result
        document.getElementById('result').innerHTML = 'Hexadecimal: ' + hexResult + '<br><br>' + steps;
    } else {
        // Display an error message for invalid input
        document.getElementById('result').innerHTML = 'Invalid binary input. Please enter a valid binary number.';
    }
}

function convertHexToBinary() {
    // Get the hexadecimal input value
    var hexInput = document.getElementById('hexInput').value;

    // Check if the input is a valid hexadecimal number
    if (/^[0-9A-Fa-f]+$/.test(hexInput)) {
        // Initialize a string to store the steps
        var steps = '';

        // Convert each hex digit to binary
        for (var i = 0; i < hexInput.length; i++) {
            var hexDigit = hexInput[i].toUpperCase(); // Convert to uppercase for consistency
            var binaryDigit = parseInt(hexDigit, 16).toString(2);
            steps += `Step ${i + 1}: Hex ${hexDigit} = Binary ${binaryDigit}<br>`;
        }

        // Display the steps and the final result
        document.getElementById('result').innerHTML = steps + '<br>Binary: ' + parseInt(hexInput, 16).toString(2);
    } else {
        // Display an error message for invalid input
        document.getElementById('result').innerHTML = 'Invalid hexadecimal input. Please enter a valid hexadecimal number.';
    }
}
