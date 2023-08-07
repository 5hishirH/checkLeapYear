function leapYear() {
    let year = document.getElementById("inputYear").value;
    if (year%400 === 0 || year%4 === 0 && year%100 !== 0) {
        document.getElementById("result").innerText = year + " is a leap year";
    }
    else {
        document.getElementById("result").innerText = year + "is not a leap year";
    }
}

function toClear () {
    document.getElementById("inputYear").value = "";
    document.getElementById("result").innerText = "";
}