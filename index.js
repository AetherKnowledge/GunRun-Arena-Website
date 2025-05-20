// Scroll to top when button is clicked
document.getElementById("back-to-top").addEventListener("click", function() {
    window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
    });

    console.log("Back to top button clicked");
});
