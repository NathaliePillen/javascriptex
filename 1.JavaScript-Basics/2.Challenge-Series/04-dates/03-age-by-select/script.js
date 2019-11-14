/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let currentDate = new Date();
    console.log(currentDate);
    let currentYear = currentDate.getFullYear();
    console.log(currentYear);
    let currentMonth = currentDate.getMonth();
    console.log(currentMonth);
    let currentDay = currentDate.getDate();
    console.log(currentDay);

    let birthDay = document.getElementById("dob-day");
    console.log(birthDay);
    let birthMonth = document.getElementById("dob-month");
    console.log(birthMonth);
    let birthYear = document.getElementById("dob-year");
    console.log(birthYear);

    let calculateAge = document.getElementById("run");
    console.log(calculateAge);

    calculateAge.addEventListener(("click"), function() {

        let age;


        if (birthMonth.value < currentMonth) {
            age = currentYear - birthYear.value;
            console.log(age);
            document.getElementById("run").innerHTML = age;
        }


        if (birthMonth.value == currentMonth && birthDay.value < currentDay) {
            age = (currentYear - 1) - birthYear.value;
            console.log(age);
            document.getElementById("run").innerHTML = age;
        }

        if (birthMonth.value > currentMonth) {
            age = (currentYear - 1) - birthYear.value;
            console.log(age);
            document.getElementById("run").innerHTML = age;
        }



    })

    // your code here*/

})();