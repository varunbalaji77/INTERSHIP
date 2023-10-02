document.addEventListener("DOMContentLoaded", function () {
    const page = document.querySelector(".about");
  
    // Hide the content initially
    page.style.opacity = "0";
  
    // Apply transition style to control the fade-in effect
    page.style.transition = "opacity 3s";
  
    // Display the content after a brief delay
    setTimeout(function () {
      page.style.opacity = "1";
    }, 10);
  });
  