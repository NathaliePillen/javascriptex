/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    console.log(fruits);
    let calculate = document.getElementById("run");

    calculate.addEventListener(("click"), function() {

            let removeEnd = fruits.pop();
            console.log(removeEnd);

            let removeStart = fruits.shift();
            console.log(removeStart);
            console.log(fruits);

            let addStart = fruits.unshift("Banana");
            let addEnd = fruits.push("kiwi");


            document.getElementById("run").innerHTML = fruits;

        })
        // your code here

})();