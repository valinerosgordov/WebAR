// app.js
window.addEventListener('load', () => {
    const sceneEl = document.querySelector('a-scene');
    const loadingOverlay = document.getElementById('loadingOverlay');
    const startVideoButton = document.getElementById('startVideoButton');
    const videoPlane = sceneEl.querySelector('a-plane'); 

    // Hide overlay after 8 seconds 
    setTimeout(() => {
        loadingOverlay.classList.add('hidden');
    }, 8000); 

    sceneEl.addEventListener('mindARImageTrackingInitialized', () => {
        console.log('Mind AR is ready!');

        backgroundMusic.play(); 
        loadingOverlay.classList.add('hidden'); 

        if (videoPlane) {
            videoPlane.setAttribute('visible', true);

            startVideoButton.addEventListener('click', () => {
                videoPlane.components.material.material.map.image.play();
            });
        } else {
            console.error('Error: Could not find the a-plane element!');
        }
    });
});