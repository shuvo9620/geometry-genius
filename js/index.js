let increment = 0;
//  Catching value by functions
function getValueById(parameter) {
    const triangleInputField = document.getElementById(parameter);
    const triangleInputString = triangleInputField.value;
    const triangleInputValue = parseInt(triangleInputString);
    return triangleInputValue;

}
//  Getting Title using function
function titleElementValueById(parameter) {
    const triangleFieldName = document.getElementById(parameter);
    const triangleString = triangleFieldName.innerText;
    return triangleString;
}
// Getting multiplication value from function
function multiplicationValue(value1, value2) {
    const result = value1 * value2;
    return result;
}
// Field clear function
function fieldClear(id) {
    const inputField1 = document.getElementById(id);
    const inputField2 = document.getElementById(id);
    inputField1.value = '';
    inputField2.value = '';

}

// random color
const cards = document.querySelectorAll('.randomColor');

function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    const color = `rgb(${red}, ${green}, ${blue})`;

    return color;
}

const originalColors = [];

cards.forEach((randomColor) => {
    originalColors.push(randomColor.style.backgroundColor);
});

cards.forEach((randomColor, index) => {
    // Add an event listener for when the mouse enters the card element
    randomColor.addEventListener('mouseenter', function () {
        // Set the color of the card to a random color
        randomColor.style.backgroundColor = getRandomColor();
    });

    // Add an event listener for when the mouse leaves the card element
    randomColor.addEventListener('mouseleave', function () {
        randomColor.style.backgroundColor = originalColors[index];
    });
});

// Triangle calculation
document.getElementById('triangle-cal-btn').addEventListener('click', function () {
    

    const triangleInputField1 = getValueById('triangle-input-field1');
    const triangleInputField2 = getValueById('triangle-input-field2');

    if (isNaN(triangleInputField1 && triangleInputField2) || (triangleInputField1 && triangleInputField2) <= 0 || (triangleInputField1 && triangleInputField2) === 'string' || (triangleInputField1 && triangleInputField2 === '')) {
        alert('please enter a number');
    } else {
        increment++;
        const areaValue = 0.5 * multiplicationValue(triangleInputField1, triangleInputField2);

        const triangleTitle = titleElementValueById('triangle-title');
        displayValueById(increment, areaValue, triangleTitle);

    }
    fieldClear('triangle-input-field1');
    fieldClear('triangle-input-field2');


});

//  Rectangle calculation
document.getElementById('rectangle-cal-btn').addEventListener('click', function () {
    const rectangleInputField1 = getValueById('rectangle-input-field1');
    const rectangleInputField2 = getValueById('rectangle-input-field2');

    if (isNaN(rectangleInputField1 && rectangleInputField2) || (rectangleInputField1 && rectangleInputField2) <= 0 || (rectangleInputField1 && rectangleInputField2) === 'string' || (rectangleInputField1 && rectangleInputField2 === '')) {
        alert('please enter a number');
    } else {
        increment++;
        const areaValue = multiplicationValue(rectangleInputField1, rectangleInputField2);

        const rectangleTitle = titleElementValueById('rectangle-title');
        displayValueById(increment, areaValue, rectangleTitle);
    }

    fieldClear('rectangle-input-field1');
    fieldClear('rectangle-input-field2');

});

// Parallelogram calculation
document.getElementById('parallelogram-cal-btn').addEventListener('click', function () {
    const parallelogramInputField1 = getValueById('parallelogram-input-field1');
    const parallelogramInputField2 = getValueById('parallelogram-input-field2');
    
    if (isNaN(parallelogramInputField1 && parallelogramInputField2) || (parallelogramInputField1 && parallelogramInputField2) <= 0 || (parallelogramInputField1 && parallelogramInputField2) === 'string' || (parallelogramInputField1 && parallelogramInputField2 === '')) {
        alert('please enter a number');
    } else {
        increment++;
        const areaValue = multiplicationValue(parallelogramInputField1 , parallelogramInputField2);

        const parallelogramTitle = titleElementValueById('parallelogram-title');
        displayValueById(increment, areaValue, parallelogramTitle);
    }

    fieldClear('parallelogramInputField1');
    fieldClear('parallelogramInputField2');
});
// Rhombus calculation
document.getElementById('rhombus-cal-btn').addEventListener('click', function () {
    const rhombusInputField1 = getValueById('rhombus-input-field1');
    const rhombusInputField2 = getValueById('rhombus-input-field2');
    
    if (isNaN(rhombusInputField1 && rhombusInputField2) || (rhombusInputField1 && rhombusInputField2) <= 0 || (rhombusInputField1 && rhombusInputField2) === 'string' || (rhombusInputField1 && rhombusInputField2 === '')) {
        alert('please enter a number');
    } else {
        increment++;
        const areaValue = 0.5 * multiplicationValue(rhombusInputField1, rhombusInputField2);
        const rhombusTitle = titleElementValueById('rhombus-title');
        displayValueById(increment, areaValue, rhombusTitle);
    }

    fieldClear('rhombusInputField1');
    fieldClear('rhombusInputField2');

});

// Pentagon calculation
document.getElementById('pentagon-cal-btn').addEventListener('click', function () {
    const pentagonInputField1 = getValueById('pentagon-input-field1');
    const pentagonInputField2 = getValueById('pentagon-input-field2');
    
    if (isNaN(pentagonInputField1 && pentagonInputField2) || (pentagonInputField1 && pentagonInputField2) <= 0 || (pentagonInputField1 && pentagonInputField2) === 'string' || (pentagonInputField1 && pentagonInputField2 === '')) {
        alert('please enter a number');
    } else {
        increment++;
        const areaValue = 0.5 * multiplicationValue(pentagonInputField1, pentagonInputField2);

        const pentagonTitle = titleElementValueById('pentagon-title');
        displayValueById(increment, areaValue, pentagonTitle);
    }

    fieldClear('pentagon-input-field1');
    fieldClear('pentagon-input-field2');

});

// Ellipse calculation
document.getElementById('ellipse-cal-btn').addEventListener('click', function () {
    const ellipseInputField1 = getValueById('ellipse-input-field1');
    const ellipseInputField2 = getValueById('ellipse-input-field2');
   
    if (isNaN(ellipseInputField1 && ellipseInputField2) || (ellipseInputField1 && ellipseInputField2) <= 0 || (ellipseInputField1 && ellipseInputField2) === 'string' || (ellipseInputField1 && ellipseInputField2 === '')) {
        alert('please enter a number');
    } else {
        increment++;
        const areaValueString = 3.14 * multiplicationValue(ellipseInputField1, ellipseInputField2);
        const areaValue = parseFloat(areaValueString).toFixed(3);

        const ellipseTitle = titleElementValueById('ellipse-title');
        displayValueById(increment, areaValue, ellipseTitle);
    }

    fieldClear('ellipseInputField1');
    fieldClear('ellipseInputField2');

});

// common function
function displayValueById(increment, value, name) {
    const container = document.getElementById('calculation-area');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td class="p-1">${increment}</td>
    <td class="p-1">${name}</td>
    <td class="p-1">${value}<span>cm<sup>2</sup></span></td>
    <td><button class="btn btn-info py-0 size">Convert to m<sup>2</sup></button></td>
    `
    container.appendChild(tr);
}