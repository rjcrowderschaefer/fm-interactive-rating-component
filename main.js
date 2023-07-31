function thankYou() {
    let thankYouDisplay = document.getElementById('thank-you-container');
    let ratingDisplay = document.getElementById('rating-state-container');
    thankYouDisplay.style.display = "block";
    ratingDisplay.style.display = "none";
}

const ratingButtons = document.querySelectorAll('.rating-num');
const selectedRatingElement = document.getElementById('rating-num-selection');

ratingButtons.forEach(button => {
    button.addEventListener('click', () => {
        const ratingValue = button.textContent;
        selectedRatingElement.textContent = ratingValue
    })
})