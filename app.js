window.onload = () => {
    const goToPageButton = document.querySelector('#goToPageButton');
    const video = document.querySelector('#myVideo');
    const scene = document.querySelector('a-scene');
  
    // Play the video when Mind AR tracking is initialized
    scene.addEventListener('mindARImageTrackingInitialized', () => {
      video.muted = true; // Make sure it's muted
      video.play(); 
    });
  
    goToPageButton.addEventListener('click', (evt) => {
      if (evt.detail.intersection) {
        window.location.href = "your-other-page.html";
      }
    });
  };