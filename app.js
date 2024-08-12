
window.addEventListener('load', () => {
    const sceneEl = document.querySelector('a-scene');
    const loadingOverlay = document.getElementById('loadingOverlay');

    // Hide the overlay after 8 seconds
    setTimeout(() => {
        loadingOverlay.classList.add('hidden');
    }, 8000);

    sceneEl.addEventListener('mindARImageTrackingInitialized', () => {
        console.log('Mind AR is ready!');
        loadingOverlay.classList.add('hidden'); 
    });
});