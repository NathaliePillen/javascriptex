/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.




document.getElementById("red").style.backgroundColor = "red";
document.getElementById("green").style.backgroundColor = "green";
document.getElementById("yellow").style.backgroundColor = "yellow";
document.getElementById("blue").style.backgroundColor = "blue";



var chooseColor = document.querySelector(".actions");
console.log(chooseColor);
chooseColor.addEventListener(("click"), function(event) {
    console.log(event);
    var color;
    switch (event.target.id) {
        case "red":
            document.body.style.backgroundColor = "red";
            break;
        case "green":
            document.body.style.backgroundColor = "green";
            break;
        case "yellow":
            document.body.style.backgroundColor = "yellow";
            break;
        case "blue":
            document.body.style.backgroundColor = "blue";
            break;
        default:
            alert("Dit is een error!!")
            break;

    }
})