// Event listener for clicking on tab links
document.querySelectorAll("a.nav-link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
      // Prevent the default link behavior
      e.preventDefault();

      // Extract the target element ID from the href attribute
      const targetId = this.getAttribute("href").substring(1);

      // Get the target element by its ID
      const targetElement = document.getElementById(targetId);

      // Scroll smoothly to the target element if it exists
      if (targetElement) {
          window.scrollTo({
              top: targetElement.offsetTop,
              behavior: "smooth",
          });
      }
  });
});

// Set up Bootstrap tab for the default tab (Men's Clothing)
const defaultTab = new bootstrap.Tab(document.getElementById("mens-tab"));

// Show the default tab
defaultTab.show();

// Event listeners for tab switching
document.getElementById("mens-tab").addEventListener("click", () => {
    defaultTab.show();
});

document.getElementById("womens-tab").addEventListener("click", () => {
    // Switch to the Women's Clothing tab
    const womensTab = new bootstrap.Tab(document.getElementById("womens-tab"));
    womensTab.show();
});