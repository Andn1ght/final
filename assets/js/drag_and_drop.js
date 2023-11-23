document.addEventListener("DOMContentLoaded", function () {
  // Get the count element
  let countHTML = document.querySelector(".count");

  // Define an array of elements with country and continent information
  const elements = [
    { country: "USA", continent: "North America" },
    { country: "Japan", continent: "Asia" },
    { country: "Brazil", continent: "South America" },
  ];

  // Initialize correct count and update the count display
  let correctCount = 0;
  function updateCount() {
    countHTML.innerText = correctCount;
  }
  updateCount();

  // Add dragstart event listeners to draggable elements
  const draggables = document.querySelectorAll(".draggable");
  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", handleDragStart);
  });

  // Add drop event listener to drop areas
  const dropAreas = document.querySelectorAll(".continent");
  dropAreas.forEach((area) => {
    area.addEventListener("dragover", handleDragOver);
    area.addEventListener("drop", handleDrop);
  });

  // Add reset button event listener
  const resetButton = document.getElementById("resetButton");
  resetButton.addEventListener("click", resetGame);

  // Function to handle drag start event
  function handleDragStart(event) {
    event.dataTransfer.setData("text", event.target.dataset.country);
  }

  // Function to handle drag over event
  function handleDragOver(event) {
    event.preventDefault();
  }

  // Function to handle drop event
  function handleDrop(event) {
    event.preventDefault();

    const droppedCountry = event.dataTransfer.getData("text");
    const targetContinent = event.target.dataset.continent;

    // Check if the dropped country belongs to the target continent
    const isCorrectDrop = elements.some(
      (element) =>
        element.country === droppedCountry &&
        element.continent === targetContinent
    );

    // Handle correct and incorrect drops
    if (isCorrectDrop) {
      if (event.target.classList.contains("wrong-drop")) {
        alert("You already placed it incorrectly.");
        return;
      }
      if (event.target.classList.contains("correct-drop")) {
        alert("You already placed it correctly.");
        return;
      }
      event.target.classList.add("correct-drop");
      correctCount++;
      updateCount();

      // Check if all elements are correctly placed
      if (correctCount === elements.length) {
        alert("Congratulations! You placed all elements correctly.");
      }
    } else {
      if (event.target.classList.contains("correct-drop")) {
        alert("You already placed it correctly.");
        return;
      }
      event.target.classList.add("wrong-drop");
    }
  }

  // Add a click event listener to the reset button
  resetButton.addEventListener("click", resetGame);

  // Function to reset the game
  function resetGame() {
    // Reset correct count and update count display
    correctCount = 0;
    updateCount();

    // Remove classes from drop areas
    const dropAreas = document.querySelectorAll(".continent");
    dropAreas.forEach((area) => {
      area.classList.remove("correct-drop", "wrong-drop");
    });

    // Remove classes from draggables
    const draggables = document.querySelectorAll(".draggable");
    draggables.forEach((draggable) => {
      draggable.classList.remove("correct-drop", "wrong-drop");
    });
  }
});
