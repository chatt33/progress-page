var i = 10;

var year = 2024;
var month = 3; // Note: January is 0, February is 1, ..., December is 11
var day = 28;
var hour = 9; // 24-hour format
var minute = 0;
var second = 0;

const now = new Date();
const lastDate = new Date(year, month, day, hour, minute, second);

year = 2024;
month = 4; // Note: January is 0, February is 1, ..., December is 11
day = 8;
hour = 22; // 24-hour format
minute = 0;
second = 0;

const meetingDate = new Date(year, month, day, hour, minute, second);

var waitingTime = Number(meetingDate - lastDate);
var alreadyWaitedTime = Number(now - lastDate); 
var remainingTime = Number(meetingDate - now);


var berechnung = waitingTime / alreadyWaitedTime;
var prozentBisher = 100.0 / berechnung;
console.log("prozent: " + prozentBisher);


var elem = document.getElementById("myBar1");
console.log(now);
elem.style.width = prozentBisher + "%";

const daysLeft = (remainingTime / (24 * 60 * 60 * 1000)).toFixed(2);
document.getElementById("zeit1").textContent = "Nur noch " + daysLeft + " Tage!";

document.getElementById("prozentNummer1").textContent = prozentBisher.toFixed(4) + "%";


// function move() {
//   if (i == 0) {
//     i = 1;
//     var elem = document.getElementById("myBar");
//     var width = 1;
//     var id = setInterval(frame, 10);
//     function frame() {
//       if (width >= 100) {
//         clearInterval(id);
//         i = 0;
//       } else {
//         width++;
//         elem.style.width = width + "%";
//       }
//     }
//   }
// }