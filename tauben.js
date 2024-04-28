var i = 10;

var year = 2024;
var month = 3; // Note: January is 0, February is 1, ..., December is 11
var day = 28;
var hour = 9; // 24-hour format
var minute = 0;
var second = 0;

const now4 = new Date();
const lastDate4 = new Date(year, month, day, hour, minute, second);

year = 2027;
month = 9; // Note: January is 0, February is 1, ..., December is 11
day = 9;
hour = 9; // 24-hour format
minute = 9;
second = 9;

const meetingDate4 = new Date(year, month, day, hour, minute, second);

var waitingTime = Number(meetingDate4 - lastDate4);
var alreadyWaitedTime = Number(now4 - lastDate4); 
var remainingTime = Number(meetingDate4 - now4);


var berechnung = waitingTime / alreadyWaitedTime;
var prozentBisher = 100.0 / berechnung;
console.log("prozent: " + prozentBisher);


var elem = document.getElementById("myBar4");
console.log(now4);
elem.style.width = (prozentBisher+1) + "%";

const daysLeft4 = (remainingTime / (24 * 60 * 60 * 1000)).toFixed(2);
document.getElementById("zeit4").textContent = "Nur noch so ungefähr " + daysLeft4 + " Tage!";

document.getElementById("prozentNummer4").textContent = prozentBisher.toFixed(4) + "%";


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