// Get the video element by ID
var video = document.getElementById("full_video");

// Set the video source
video.src = "./video/The Gucci Aria Advertising Campaign.mp4";

// Add a click event listener to the video element
video.addEventListener("click", function () {
  // Check if the video is paused
  if (video.paused) {
    // If paused, play the video
    video.play();
    
    // Hide the play button by adding the 'hidden_video' class
    playPauseBtn.classList.add("hidden_video");
  } else {
    // If playing, pause the video
    video.pause();
    
    // Show the play button by removing the 'hidden_video' class
    playPauseBtn.classList.remove("hidden_video");
  }
});
