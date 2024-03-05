import { createElement } from './createElements.js';
import { techs } from './techs.js';

function renderSkills() {
    const container = document.querySelector('.hardskills');
    for (const tech of techs) {
        for (const key of Object.keys(tech)) {
            const span = createElement('span', key, {
                class: 'tooltiptext',
            });
            const div = createElement('div', null, {
                class: 'tooltip',
            });
            const i = createElement('i', null, { class: tech[key] });
            div.append(i, span);
            container.appendChild(div);
        }
    }
}

export { renderSkills };
