import { createElement } from "./createElements.js";
import { techs } from "./techs.ts";

const createSkills = (tech: string, className: string) => {
  const div = createElement("div", null, {
    class: "tooltip",
  });

  const span = createElement("span", tech, {
    class: "tooltiptext",
  });

  const i = createElement("i", null, { class: className });
  div.append(i, span);

  return div;
};

function renderSkills(delay = 1500) {
  let index = 0;
  const container = document.querySelector(".hardskills");

  if (!container) {
    console.error("Elemento com a classe .hardskills não foi encontrado");
    return;
  }

  const interval = setInterval(() => {
    if (delay < 600 && index === techs.length) {
      clearInterval(interval);
      renderSkills();
    }

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
  }, delay);
}

export { renderSkills };
