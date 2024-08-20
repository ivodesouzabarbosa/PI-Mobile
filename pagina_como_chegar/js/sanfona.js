document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            // Fecha todos os outros cards
            cards.forEach(otherCard => {
                if (otherCard !== this) {
                    otherCard.classList.remove('expanded');
                    const otherContent = otherCard.querySelector('.card-content');
                    otherContent.style.maxHeight = '0';
                    otherContent.style.opacity = '0';
                }
            });

            // Alterna o card clicado
            const isExpanded = this.classList.toggle('expanded');
            const content = this.querySelector('.card-content');

            if (isExpanded) {
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.opacity = '1';
            } else {
                content.style.maxHeight = '0';
                content.style.opacity = '0';
            }
        });
    });
});