const redirectWebSlam = async (userName) => {
    try {
        const response = await fetch('https://arplatov-6e62e-default-rtdb.firebaseio.com/baseNames.json')
        const { Names } = await response.json();
        const arrayUsers = Names

        const idxName = arrayUsers.findIndex( i => i.name === userName)
        const url = `https://konti.digitalmarker.ru/slam?${idxName}`
        nextBtn.href = url

    } catch (error) {
        console.error('Error fetching Names:', error);
    }
}
