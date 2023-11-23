// Get the scrollToTop button element by its ID
var scrollToTopButton = document.getElementById("scrollToTop");

// Show the button when the user scrolls down
window.addEventListener("scroll", function () {
  // Check if the user has scrolled down more than 20 pixels
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    // If scrolled down, make the button visible
    scrollToTopButton.style.opacity = "1";
  } else {
    // If not scrolled down, hide the button
    scrollToTopButton.style.opacity = "0";
  }
});

// Scroll to the top when the button is clicked
scrollToTopButton.addEventListener("click", function () {
  // For smooth scrolling, use the behavior property
  window.scrollTo({ top: 0, behavior: "smooth" });
});
