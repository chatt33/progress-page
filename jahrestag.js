var i = 10;

var year = 2023;
var month = 8; // Note: January is 0, February is 1, ..., December is 11
var day = 9;
var hour = 0; // 24-hour format
var minute = 0;
var second = 0;

const now3 = new Date();
const lastDate3 = new Date(year, month, day, hour, minute, second);

year = 2024;
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
var prozentBisher = 100.0 / berechnung;
console.log("prozent: " + prozentBisher);


var elem = document.getElementById("myBar3");
console.log(now3);
elem.style.width = prozentBisher + "%";

const daysLeft3 = (remainingTime / (24 * 60 * 60 * 1000)).toFixed(2);
const daysTogether3 = 365 - daysLeft3; 
document.getElementById("zeit3").textContent = "Wir sind schon " + daysTogether3  + " Tage zusammen, das heißt nur noch " + daysLeft3 + " Tage bis zum 1.Jahrestag!";

document.getElementById("prozentNummer3").textContent = prozentBisher.toFixed(4) + "%";


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