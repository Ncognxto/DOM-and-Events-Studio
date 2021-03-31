// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(){
    let takeOffButton = document.getElementById("takeoff");
    let status = document.getElementById("flightStatus");
    let background = document.getElementById("shuttleBackground");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    let landButton = document.getElementById("landing");
    let abortButton = document.getElementById("missionAbort");

    takeOffButton.addEventListener("click", function(){
        if(confirm("Confirm that the shuttle is ready for takeoff.") == true) {
            status.innerHTML = "Shuttle in flight."; 
            background.style.backgroundColor = "blue";
            shuttleHeight.innerHTML = "10000";
        }
    })

    landButton.addEventListener("click", function(){
        alert("The shuttle is landing. Landing gear engaged.");
        status.innerHTML = "The shuttle has landed.";
        background.style.backgroundColor = "green";
        shuttleHeight.innerHTML = "0";
    })


});