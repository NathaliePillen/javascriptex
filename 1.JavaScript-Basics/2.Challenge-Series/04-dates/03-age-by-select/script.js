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

    let age = "calculate age";

    calculateAge.addEventListener(("click"), function() {

        age = currentYear - birthYear.value;
        console.log(age);

        if (currentMonth < (birthMonth.value)) {
            age;
        }

        if (((birthMonth - 1) == currentMonth) && (currentDay < birthDay)) {
            age;
        }


    })

    document.getElementById("run").innerHTML = age;




    // if (today_month < (birth_month - 1)) {
    //     age--;
    // }
    //if (((birth_month - 1) == today_month) && (today_day < birth_day)) {
    //    age--;
    //}
    //return age;



    // your code here

})();