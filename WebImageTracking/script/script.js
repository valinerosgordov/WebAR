const redirectWebSlam = async (userName) => {
    const nextBtn = document.querySelector('.nextBtn')

    try {
        const response = await fetch('https://arplatov-6e62e-default-rtdb.firebaseio.com/baseNames.json')
        const { Names } = await response.json();
        const arrayUsers = Names

        const idxName = arrayUsers.findIndex( i => i.name === userName)
        const url = `https://konti.digitalmarker.ru/slam?${idxName}`
        nextBtn.href = url
        window.location.href = url

    } catch (error) {
        console.error('Error fetching Names:', error)
    }
}
