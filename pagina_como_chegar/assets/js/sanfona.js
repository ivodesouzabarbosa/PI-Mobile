document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const closeIcon = card.querySelector('.card-content img'); // Seleciona o ícone de fechar

        // Expande o card ao clicar
        card.addEventListener('click', function (event) {
            // Verifica se o clique foi dentro da navegação ou no ícone de fechar e impede que o card feche
            if (event.target.closest('.card-nav') || event.target === closeIcon) {
                return;
            }

            // Fecha todos os outros cards
            cards.forEach(c => {
                if (c !== card) {
                    c.classList.remove('expanded');
                    const content = c.querySelector('.card-content');
                    content.style.maxHeight = '0';
                    content.style.opacity = '0';
                }
            });

            // Expande o card atual
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

        // Fecha o card ao clicar no ícone de fechar
        closeIcon.addEventListener('click', function (event) {
            event.stopPropagation(); // Evita que o evento de clique no ícone feche o card imediatamente
            const content = this.closest('.card-content');
            const card = content.closest('.card');

            card.classList.remove('expanded');
            content.style.maxHeight = '0';
            content.style.opacity = '0';
        });
    });

    // Lógica para a navegação
    const navLinks = document.querySelectorAll('.card-nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Evita o comportamento padrão do link

            // Remove a classe 'active' de todos os parágrafos
            const cardContent = this.closest('.card-content');
            cardContent.querySelectorAll('p').forEach(p => {
                p.classList.remove('active');
            });

            // Adiciona a classe 'active' ao parágrafo correspondente
            const target = cardContent.querySelector(`[data-content="${this.getAttribute('data-target')}"]`);
            if (target) {
                target.classList.add('active');
            }

            // Mantém o card expandido
            const card = this.closest('.card');
            card.classList.add('expanded');
            cardContent.style.maxHeight = cardContent.scrollHeight + 'px';
            cardContent.style.opacity = '1';
        });
    });
});