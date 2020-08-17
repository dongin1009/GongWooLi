/* clock.js */
function printClock() {
    var clock = document.getElementById("date");
    var currentDate = new Date();
    var calendar = currentDate.getFullYear() + '.' + (currentDate.getMonth() + 1) + "." + currentDate.getDate();

    date.innerHTML = "<span style='font-weight:bold; color:#fff;'>" + calendar + "</span>";
    /* + " " + currentHours + ':' + currentMinute + ':' + currentSeconds + " <span style='font-size:1rem;'>" + amPm + "</span>" */

    setTimeout("printClock()", 1000);
}