setInterval(myTimer, 1000);
function myTimer() {
      const d = new Date();
      document.getElementById("H").innerHTML = d.toLocaleTimeString();
}
 
