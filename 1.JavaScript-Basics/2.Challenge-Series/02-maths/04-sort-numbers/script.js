/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {
        let listNumbers = numbers.value;
        console.log(listNumbers);
        let array2 = listNumbers.split(', ');
        console.log(array2);

        array2.sort(function(a, b) {
            return a - b
        });
        console.log(array2);
        document.getElementById("numbers").value = array2;
        console.log(document.querySelector("#numbers"));
        //document.getElementById("numbers").innerHTML = array2;

        // your code here


    });



})();