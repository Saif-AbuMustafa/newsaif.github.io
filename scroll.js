// Add an event listener to change background color smoothly as you scroll
window.addEventListener("scroll", () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    const transitionPoint = 0.2; // Adjust the point at which the transition happens (e.g., 20%)
    const percent = (scrolled / scrollable) * 100;

    if (percent >= transitionPoint) {
        document.body.style.backgroundColor = "#000"; // Transition to black
    } else {
        // Calculate the color based on scroll position
        const ratio = percent / transitionPoint;
        const r = Math.floor(45 + ratio * (0 - 45));
        const s = Math.floor(100 - ratio * (100 - 0));
        const l = Math.floor(50 - ratio * (50 - 0));
        const color = `hsl(${r}, ${s}%, ${l}%)`;
        document.body.style.backgroundColor = color;
    }
});

// Initialize background color at the top of the page
document.body.style.backgroundColor = 'hsl(45, 99%, 33%)'; // Start with metallic golden color
var header = document.getElementById("myHeader");
header.style.backgroundColor = "red";
document.addEventListener("DOMContentLoaded", function() {
    // Your JavaScript code here
  });


 
   


  