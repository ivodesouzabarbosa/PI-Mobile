function revealContent(clickedCard) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (card !== clickedCard) {
            card.classList.remove('revealed');
        }
    });
    clickedCard.classList.toggle('revealed');
}
