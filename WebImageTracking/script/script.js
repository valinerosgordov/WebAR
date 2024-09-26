let arrayUsers = []
const inputName = document.getElementById('userInput')

const redirectWebSlam = async () => {
    await fetchData();
    nextPage()
}

const nextPage = () => {
    const name = inputName.value
    const idxName = arrayUsers.findIndex( i => i.name === name)
    const url = `https://konti.digitalmarker.ru/slam?${idxName}`
    nextBtn.href = url
}

const getUserNames = async () => {
    try {
        const response = await fetch('https://arplatov-6e62e-default-rtdb.firebaseio.com/baseNames.json')
        const { Names } = await response.json();
        arrayUsers = Names            
    } catch (error) {
        console.error('Error fetching Names:', error);
    }
}