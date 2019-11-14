/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let year = document.getElementById("year");
    console.log(year);

    let calculate = document.getElementById("run");
    console.log(calculate);

    calculate.addEventListener(("click"), function() {

        //vraag de dagen op van dit specifiek jaar
        let currentDate = new Date();
        console.log(currentDate);


        currentDate.setFullYear(year.value);
        console.log(currentDate);

        let month = currentDate.getMonth();
        console.log(month);
        let day = currentDate.getDay();
        console.log(day);

        for (var i = 0; i <= 11; i++) {
            let date = currentDate.getDate(currentDate, month, 13);
            if (day == 5) {
                alert("hello");
            }
        }



    })



    // your code here

})();