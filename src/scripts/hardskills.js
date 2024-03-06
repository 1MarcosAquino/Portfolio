import { createElement } from './createElements.js';
import { techs } from './techs.js';

const createSkills = (tech, className) => {
    const div = createElement('div', null, {
        class: 'tooltip',
    });

    const span = createElement('span', tech, {
        class: 'tooltiptext',
    });

    const i = createElement('i', null, { class: className });
    div.append(i, span);

    return div;
};

function renderSkills() {
    let index = 0;
    const container = document.querySelector('.hardskills');

    setInterval(() => {
        if (container.children.length === techs.length) {
            container.removeChild(container.children[0]);
        }

        if (index === techs.length) {
            index = 0;
        }

        for (const key of Object.keys(techs[index])) {
            const skill = createSkills(key, techs[index][key]);
            container.appendChild(skill);
        }
        index++;
    }, 1500);
}

export { renderSkills };
