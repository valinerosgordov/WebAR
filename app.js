window.addEventListener('load', () => { 
    const video = document.getElementById('myVideo');
    const sceneEl = document.querySelector('a-scene'); 

    sceneEl.addEventListener('mindARImageTrackingInitialized', () => {
        console.log('Mind AR is ready!');

        // Start video playback
        video.muted = true; 
        video.play().catch(error => {
            console.error('Error playing video:', error);
        });
    });
});