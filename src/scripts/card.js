import { createElement } from "./createElements.js";
import { techs } from "./techs.js";

const excluid = [
  "1MarcosAquino",
  "Json_server_base",
  "dev_in_training",
  "dio-lab-open-source",
  "back-kenzieCars",
  "Background_Color",
  "pagina-login",
  // "trilha-net-testes-unitarios-desafio",
  // "trilha-net-api-desafio",
  // "trilha-net-banco-de-dados-desafio",
  // "trilha-net-poo-desafio",
  // "trilha-net-explorando-desafio",
  // "trilha-net-fundamentos-desafio",
];

async function renderTech(tech) {
  if (tech) {
    for (const index in techs) {
      if (Object.keys(techs[index]).includes(tech)) {
        if (Object.values(techs[index])) return [Object.values(techs[index])];
      }
    }
  }
  return ["Error!"];
}

function replace(text) {
  let exit = "";

  for (let index = 0; index <= text.length; index++) {
    if (text[index]) {
      exit += text[index].replace("-", " ").replace("_", " ");
    }
  }
  return exit.toUpperCase();
}

async function createCard(repo) {
  const { name, description, language, homepage, html_url } = repo;

  if (!excluid.includes(name)) {
    const card = createElement("div", null, { class: "card" });
    const content = createElement("div", null, { class: "content" });
    const repoName = createElement("h2", replace(name), {
      class: "name",
    });

    const desc = description ? description : "Sem descrição";
    const repoDescpt = createElement("div", desc, {
      class: "description",
    });

    const [tech] = await renderTech(language);

    const span = createElement("span", language, {
      class: "tooltiptext",
    });

    const repoLanguage = createElement("div", null, {
      class: "language tooltip",
    });
    const i = createElement("i", null, { class: tech });

    repoLanguage.append(i, span);

    if (homepage) {
      const imgVerDemo = createElement("img", null, {
        src: "public/typcn_arrow-forward.svg",
        title: "Ver demonstração",
      });

      const repoHomepage = createElement("a", imgVerDemo, {
        href: homepage,
        class: "homepage",
        target: "_blank",
      });
      content.appendChild(repoHomepage);
    }

    const imgGithub = createElement("img", null, {
      src: "public/grommet-icons_github.svg",
      title: "< Código no GitHub />",
    });

    const repoHtmlUrl = createElement("a", imgGithub, {
      href: html_url,
      class: "html_url",
      target: "_blank",
    });

    content.append(repoName, repoDescpt, repoLanguage, repoHtmlUrl);

    card.appendChild(content);

    return card;
  }
}

async function renderCard(repos) {
  const container = document.querySelector(".projects");
  for (const repo of repos.sort(
    (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
  )) {
    const children = await createCard(repo);
    if (children) container.appendChild(children);
  }
}

export { renderCard };
