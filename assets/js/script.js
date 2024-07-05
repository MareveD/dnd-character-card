document.addEventListener('DOMContentLoaded', () => {
    fetch('../../characters.json')
        .then(response => response.json())
        .then(data => {
            const characterCardsContainer = document.getElementById('character-cards');
            const characterCardTemplate = document.getElementById('character-card-template');

            data.forEach(character => {
                const characterCard = characterCardTemplate.content.cloneNode(true);

                const characterImageDiv = characterCard.querySelector('.character-image');
                characterImageDiv.style.backgroundImage = `url(${character.image})`;
                characterImageDiv.style.backgroundSize = 'cover';
                characterImageDiv.style.backgroundPosition = 'center';

                characterCard.querySelector('.character-name').textContent = character.name;
                characterCard.querySelector('.character-class').textContent = character.class;
                characterCard.querySelector('.character-level').textContent = character.level;
                characterCard.querySelector('.character-race').textContent = character.race;
                characterCard.querySelector('.character-campaign').textContent = character.campaign;
                characterCard.querySelector('.character-alignment').textContent = character.alignment;
                characterCard.querySelector('.character-faith').textContent = character.faith;
                characterCard.querySelector('.character-hair').textContent = character.hair;
                characterCard.querySelector('.character-eyes').textContent = character.eyes;
                characterCard.querySelector('.character-skin').textContent = character.skin;
                characterCard.querySelector('.character-size').textContent = character.size;
                characterCard.querySelector('.character-age').textContent = character.age;
                characterCard.querySelector('.character-height-weight').textContent = character.height_weight;

                const statsContainer = characterCard.querySelector('.character-stats');
                Object.entries(character.stats).forEach(([stat, value]) => {
                    const statElement = document.createElement('div');
                    statElement.className = 'stat';
                    statElement.innerHTML = `<span class="stat-name">${stat}:</span> <span class="stat-value">${value}</span>`;
                    statsContainer.appendChild(statElement);
                });

                characterCardsContainer.appendChild(characterCard);
            });
        })
        .catch(error => console.error('Error fetching character data:', error));
});
