/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

var num1 = document.getElementById("op-one");
var num2 = document.getElementById("op-two");
var operators = document.querySelector(".actions");
console.log(operators);


operators.addEventListener(("click"), function(event) {
    console.log(event);
    var result;
    switch (event.target.id) {
        case "addition":
            result = Number(num1.value) + Number(num2.value);
            console.log(result);
            break;
        case "substraction":
            result = Number(num1.value) - Number(num2.value);
            console.log(result);
            break;
        case "multiplication":
            result = Number(num1.value) * Number(num2.value);
            console.log(result);
            break;
        case "division":
            result = Number(num1.value) / Number(num2.value);
            console.log(result);
            break;
        default:
            alert("Dit is een error!!")
            break;
    }

    displayresult = document.getElementById("result");
    displayresult.value = result;

})