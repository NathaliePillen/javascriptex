/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function test() {
    return true;
}



(function() {
    return true;
})();

switch (ch) {
    case 1:
        d = a + b + c;
        System.out.println("The result is " + d);
        break;
    case 2:
        d = a * b * c;
        System.out.println("The result is " + d);
        break;
    case 3:
        d = a - b - c;
        System.out.println(" The result is" + d);
        break;
    case 4:
        d = a + b + c / 2;
        System.out.println("The result is " + d);
        break;
    default:
        System.out.println(" Oops! wrong choice");
        break;
}
}


document.getElementById("demo").innerHTML = "Today is " + day;

document.getElementById("addition").addEventListener("click", function() {
    number1 = document.getElementById("op-one");
    number2 = document.getElementById("op-two");

    operator = parseInt(number1.value) + parseInt(number2.value);

    console.log(operator);


    result = document.getElementById("result");
    result.innerText = operator;


    // perform an addition
});

document.getElementById("substraction").addEventListener("click", function() {

    number1 = document.getElementById("op-one");
    number2 = document.getElementById("op-two");

    operator = parseInt(number1.value) - parseInt(number2.value);

    console.log(operator);


    result = document.getElementById("result");
    result.innerText = operator;
    // perform an substraction
});

document.getElementById("multiplication").addEventListener("click", function() {

    number1 = document.getElementById("op-one");
    number2 = document.getElementById("op-two");

    operator = parseInt(number1.value) * parseInt(number2.value);

    console.log(operator);


    result = document.getElementById("result");
    // result.setAttribute("value", operator);
    result.value = operator;
    console.log("howdie partner!");
    // perform an multiplication
});

document.getElementById("division").addEventListener("click", function() {

    number1 = document.getElementById("op-one");
    number2 = document.getElementById("op-two");

    operator = parseInt(number1.value) / parseInt(number2.value);

    console.log(operator);

    result = document.getElementById("result");
    result.innerText = operator;
    // perform an division
});