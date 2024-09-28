
const modelViewer = document.getElementById('modelViewer');

const storeВtn = document.getElementById('store-btn')
const downloadВtn = document.getElementById('download-btn')
const shareВtn = document.getElementById('share-btn')

//? Button: Магазин Konti (Opens store page)
storeВtn.onclick = () => {
    window.location.href = 'https://kontirus.ru';
}

//? Скачать Стикеры (Download stickers file)
downloadВtn.onclick = () => {
    const link = document.createElement('a');
    link.href = 'https://t.me/addstickers/KontiNewyear';
    link.click();
}

//? Поделиться Ссылкой (Share current page link)
shareВtn.onclick = async () => {
    const shareData = {
        title: 'Check out this AR experience',
        text: 'View this AR model in 3D and AR!',
        url: window.location.href
    };
    try {
        await navigator.share(shareData);
    } catch (err) {
        alert('Sharing failed: ' + err.message);
    }
} 

//? Отображение загрузки
modelViewer.addEventListener("model-visibility", event => {
    if (event.detail.visible) {
        document.querySelector('.loading').style.display = 'none'
    }
});

//? ar-status - не работает
modelViewer.addEventListener("ar-status", event => {
    console.log(event)
});


//? Кнопка запускающие audio и AR
const btn = document.querySelector('.btn-active-audio')
btn.onclick = async () => {
    try {
        btn.style.pointerEvents = "none";
        await startPlayAudio() 
        modelViewer.activateAR()
    } catch (error) {
        console.error(error)
    }
}

//? Функция воспроизведения audio
const startPlayAudio = async () => {
    try {
        const response = await fetch('https://arplatov-6e62e-default-rtdb.firebaseio.com/baseNames.json')
        const {Names} = await response.json();
        
        const url = window.location.href
        const newurl = url.split("?")
        const idx = newurl[newurl.length-1]
        const soundname = Names[idx]?.sound

        const playSound = (soundname) =>{
            let audioStart = new Audio(`/slam/firstPart.wav`);
            let audioName = new Audio(`/slam/audio/speech/${soundname}`);
            let audioFinaly = new Audio(`/slam/secondPart.wav`);
        
            audioStart.onloadedmetadata = () => {
                let durationStart = (audioStart.duration*1000) + 1000
                audioStart.play(); 
                setTimeout(() => {
                    let durationName = (audioName.duration*1000) + 200
                    audioName.play(); 
                    setTimeout(() => {
                        audioFinaly.play(); 
                        btn.style.pointerEvents = "auto";
                    }, durationName)  
                }, durationStart)                 
            }
        }

        playSound(soundname)
        
    } catch (error) {
        console.error('Error fetching Names:', error);
    }
}


