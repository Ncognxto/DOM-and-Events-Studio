// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    console.log('window loaded');

    let launch = document.getElementById("takeoff");
    launch.addEventListener("click", function () {
        confirm("Confirm that the shuttle is ready for takeoff.");
    }); 
});