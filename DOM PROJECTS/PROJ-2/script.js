// Select the main container element
let main = document.querySelector("#main")
// Select the custom cursor element
let crsr = document.querySelector(".cursor")

// Run this code whenever the mouse moves inside the main area
main.addEventListener("mousemove", function(val) {
    // Move the cursor horizontally to the mouse's x position
    crsr.style.left = val.x + "px";
    // Move the cursor vertically to the mouse's y position
    crsr.style.top = val.y + "px";
})