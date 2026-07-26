// Select the main container element
var con = document.querySelector("#container");
// Select the heart icon element
var lov = document.querySelector("i");

// Add a double-click event listener to the container
con.addEventListener("dblclick", function() {
    // Make the heart grow and move to the center when double-clicked
    lov.style.transform = "translate(-50%,-50%) scale(2)";
    // Make the heart visible
    lov.style.opacity = 0.8;

    // After 2 seconds, fade the heart out
    setTimeout(function() {
        lov.style.opacity = 0;
    }, 2000);

    // After 4 seconds, reset the heart size back to zero
    setTimeout(function() {
        lov.style.transform = "translate(-50%,-50%) scale(0);"
    }, 4000);
});