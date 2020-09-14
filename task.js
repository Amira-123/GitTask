/* start code of Q3 */

var countDownDate = new Date("decem, 2020 1:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("time4").innerHTML =  seconds  +  `<div>second</div>` ;
  document.getElementById("time3").innerHTML =  minutes  +  `<div>minutes</div>`;
  document.getElementById("time2").innerHTML =  hours  +  `<div>hours </div>`;
  document.getElementById("time1").innerHTML =  days  +  `<div>days</div>` ;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time4").innerHTML = "EXPIRED";
    document.getElementById("time3").innerHTML = "EXPIRED";
    document.getElementById("time2").innerHTML = "EXPIRED";
    document.getElementById("time1").innerHTML = "EXPIRED";
  }
}, 1000);
/* End code of Q3 */