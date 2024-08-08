window.onload = () => {
    const goToPageButton = document.querySelector('#goToPageButton');

    goToPageButton.addEventListener('click', (evt) => {
        if (evt.detail.intersection) {
            window.location.href = "your-other-page.html"; // Replace with your actual page URL
        }
    });
};