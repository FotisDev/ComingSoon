var countDownDate = new Date("Dec 27, 2024 00:00:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = String(days).padStart(2,"0");
  document.getElementById("hours").innerHTML = String(hours).padStart(2,"00");
  document.getElementById("minutes").innerHTML = String(minutes).padStart(2,"00");
  document.getElementById("seconds").innerHTML = String(seconds).padStart(2,"00");

  

  if(distance < 0){
    clearInterval(x);
    
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }


}, 1000);

function navigateToResult() {
    window.location.href = "/result";
    //prepei na to ftiaksw. einai allo html page
  }