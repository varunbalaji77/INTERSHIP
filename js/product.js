document.addEventListener("DOMContentLoaded", function () {
    const cart = document.querySelector(".product");
  
    // Hide the content initially
    cart.style.opacity = "0";
  
    // Apply transition style to control the fade-in effect
    cart.style.transition = "opacity 4s";
  
    // Display the content after a brief delay
    setTimeout(function () {
      cart.style.opacity = "1";
    }, 10);
  });
  