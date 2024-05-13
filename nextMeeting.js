var i = 10;

var year = 2024;
var month = 4; // Note: January is 0, February is 1, ..., December is 11
var day = 12;
var hour = 16; // 24-hour format
var minute = 0;
var second = 0;

const now = new Date();
const lastDate = new Date(year, month, day, hour, minute, second);

year = 2024;
month = 4; // Note: January is 0, February is 1, ..., December is 11
day = 15;
hour = 21; // 24-hour format
minute = 0;
second = 0;

const meetingDate = new Date(year, month, day, hour, minute, second);

var waitingTime = Number(meetingDate - lastDate);
var alreadyWaitedTime = Number(now - lastDate); 
var remainingTime = Number(meetingDate - now);


var berechnung = waitingTime / alreadyWaitedTime;
var prozentBisher1 = 100.0 / berechnung;
console.log("prozent: " + prozentBisher1);


var elem = document.getElementById("myBar1");
console.log(now);
// elem.style.width = prozentBisher + "%";

const daysLeft = (remainingTime / (24 * 60 * 60 * 1000)).toFixed(2);
document.getElementById("zeit1").textContent = "Nur noch " + daysLeft + " Tage!";

document.getElementById("prozentNummer1").textContent = prozentBisher1.toFixed(4) + "%";
move();

function move() {
    var elem = document.getElementById("myBar1");
    var width = 1;
    setInterval(frame, 20);
    function frame() {
      if (width < prozentBisher1) {
        width = width + 0.5;
        elem.style.width = width + "%";
      } 
    }
}
