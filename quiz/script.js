// script.js
  // Function to handle navigation
  function navigateToPage(url) {
    window.location.href = url;
}

// Assign event listeners to each button
document.getElementById("animal").addEventListener("click", function() {
    navigateToPage("./animals.html");
});

document.getElementById("country").addEventListener("click", function() {
    navigateToPage("country.html");
});

document.getElementById("ww2").addEventListener("click", function() {
    navigateToPage("ww2.html");
});

document.getElementById("celebrity").addEventListener("click", function() {
    navigateToPage("celebrity.html");
});

document.getElementById("music").addEventListener("click", function() {
    navigateToPage("music.html");
});

document.getElementById("lit").addEventListener("click", function() {
    navigateToPage("lit.html");
});

document.getElementById("tech").addEventListener("click", function() {
    navigateToPage("tech.html");
});