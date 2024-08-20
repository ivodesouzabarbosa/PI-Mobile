 document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            const isExpanded = this.classList.toggle('expanded');
            const content = this.querySelector('.card-content');

            if (isExpanded) {
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.opacity = '1';
            } else {
                content.style.maxHeight = '0';
                content.style.opacity = '0';
            }

            // Opcional: fechar outros cards na mesma coluna
            const column = this.closest('.column');
            column.querySelectorAll('.card').forEach(otherCard => {
                if (otherCard !== this && otherCard.classList.contains('expanded')) {
                    otherCard.classList.remove('expanded');
                    const otherContent = otherCard.querySelector('.card-content');
                    otherContent.style.maxHeight = '0';
                    otherContent.style.opacity = '0';
                }
            });
        });
    });
});