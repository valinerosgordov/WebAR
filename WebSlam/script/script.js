let soundname= undefined;
        
const startPlayAudio = async () => {
    try {
        const response = await fetch('https://arplatov-6e62e-default-rtdb.firebaseio.com/baseNames.json')
        const {Names} = await response.json();
        
        console.log(Names); 
        
        const url = window.location.href
        const newurl = url.split("?")
        const idx = newurl[newurl.length-1]
        soundname = Names[idx]?.sound

        console.log(soundname)

        playSound()
        
    } catch (error) {
        console.error('Error fetching Names:', error);
    }
}

const playSound = () =>{
    let audioStart = new Audio(`/slam/firstPart.wav`);
    let audioName = new Audio(`/slam/audio/speech/${soundname}`);
    let audioFinaly = new Audio(`/slam/secondPart.wav`);

    audioStart.onloadedmetadata = () => {
        let durationStart = (audioStart.duration*1000) + 500
        audioStart.play(); 
        setTimeout(() => {
            let durationName = (audioName.duration*1000) + 200
            audioName.play(); 
            setTimeout(() => {
                audioFinaly.play(); 
            }, durationName)  
        }, durationStart)                 
    }
}