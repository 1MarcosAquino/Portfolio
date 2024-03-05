import { api } from './api.js';
import { renderSkills } from './hardskills.js';
import { renderCard } from './card.js';

(async () => {
    const response = await api();
    renderCard(response);
})();

renderSkills();
