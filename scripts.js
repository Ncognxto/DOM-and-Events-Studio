// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(){
    let takeOffButton = document.getElementById("takeoff");
    let status = document.getElementById("flightStatus");
    let background = document.getElementById("shuttleBackground");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");

    takeOffButton.addEventListener("click", function(){
        if(confirm("Confirm that the shuttle is ready for takeoff.") == true) {
            status.innerHTML = "Shuttle in flight."; 
            background.style.backgroundColor = "blue";
            shuttleHeight.innerHTML += "10000";
        }
    });

});