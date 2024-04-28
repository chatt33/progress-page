var i = 10;

var year = 2024;
var month = 3; // Note: January is 0, February is 1, ..., December is 11
var day = 28;
var hour = 9; // 24-hour format
var minute = 0;
var second = 0;

const now2 = new Date();
const lastDate2 = new Date(year, month, day, hour, minute, second);

year = 2024;
month = 7; // Note: January is 0, February is 1, ..., December is 11
day = 3;
hour = 12; // 24-hour format
minute = 0;
second = 0;

const meetingDate2 = new Date(year, month, day, hour, minute, second);

var waitingTime = Number(meetingDate2 - lastDate2);
var alreadyWaitedTime = Number(now2 - lastDate2); 
var remainingTime = Number(meetingDate2 - now2);


var berechnung = waitingTime / alreadyWaitedTime;
var prozentBisher = 100.0 / berechnung;
console.log("prozent: " + prozentBisher);


var elem = document.getElementById("myBar2");
console.log(now2);
elem.style.width = (prozentBisher+1) + "%";
console.log(elem.style.width);

const daysLeft2 = (remainingTime / (24 * 60 * 60 * 1000)).toFixed(2);
document.getElementById("zeit2").textContent = "Nur noch " + daysLeft2 + " Tage!";

document.getElementById("prozentNummer2").textContent = prozentBisher.toFixed(4) + "%";


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