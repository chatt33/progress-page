var i = 10;

var year = 2024;
var month = 08; // Note: January is 0, February is 1, ..., December is 11
var day = 9;
var hour = 0; // 24-hour format
var minute = 0;
var second = 0;
//test
const now3 = new Date();
const lastDate3 = new Date(year, month, day, hour, minute, second);

year = 2025;
month = 8; // Note: January is 0, February is 1, ..., December is 11
day = 9;
hour = 0; // 24-hour format
minute = 0;
second = 0;

const meetingDate3 = new Date(year, month, day, hour, minute, second);

var waitingTime = Number(meetingDate3 - lastDate3);
var alreadyWaitedTime = Number(now3 - lastDate3); 
var remainingTime = Number(meetingDate3 - now3);


var berechnung = waitingTime / alreadyWaitedTime;
var prozentBisher2 = 100.0 / berechnung;
console.log("prozent: " + prozentBisher2);


var elem = document.getElementById("myBar3");
console.log(now3);
elem.style.width = prozentBisher2 + "%";

const daysLeft3 = (remainingTime / (24 * 60 * 60 * 1000)).toFixed(2);
var daysTogether3 = 365 + Number(daysLeft3); 
document.getElementById("zeit3").textContent = "Wir sind schon " + daysTogether3  + " Tage zusammen, das heißt nur noch " + daysLeft3 + " Tage bis zum 2.Jahrestag!";

document.getElementById("prozentNummer3").textContent = prozentBisher2.toFixed(4) + "%";
move();

function move() {
    var elem = document.getElementById("myBar3");
    var width = 1;
    setInterval(frame, 20);
    function frame() {
      if (width < prozentBisher2) {
        width = width + 0.5;
        elem.style.width = width + "%";
      } 
    }
}
