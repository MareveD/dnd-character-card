document.addEventListener('DOMContentLoaded', () => {
    fetch('../../characters.json')
        .then(response => response.json())
        .then(data => {
            const characterCardsContainer = document.getElementById('character-cards');
            const characterCardTemplate = document.getElementById('character-card-template').content;

            data.forEach(character => {
                // Clone the template
                const characterCard = document.importNode(characterCardTemplate, true);

                // Populate the template with data
                characterCard.querySelector('.character-image img').src = character.image;
                characterCard.querySelector('.character-image img').alt = character.name;
                characterCard.querySelector('.character-name').textContent = character.name;
                characterCard.querySelector('.character-class').textContent = character.class;
                characterCard.querySelector('.character-description').textContent = character.description;

                const statsContainer = characterCard.querySelector('.character-stats');
                Object.entries(character.stats).forEach(([stat, value]) => {
                    const statElement = document.createElement('div');
                    statElement.className = 'stat';
                    statElement.innerHTML = `<span class="stat-name">${stat}:</span> <span class="stat-value">${value}</span>`;
                    statsContainer.appendChild(statElement);
                });

                // Append the populated template to the container
                characterCardsContainer.appendChild(characterCard);
            });
        })
        .catch(error => console.error('Error fetching character data:', error));
});