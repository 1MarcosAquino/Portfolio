import { Tech } from "../interfaces";

export const techs: Array<Tech> = [
  { CSS: "devicon-css3-plain-wordmark" },
  { HTML: "devicon-html5-plain-wordmark" },
  { JavaScript: "devicon-javascript-plain" },
  { TypeScript: "devicon-typescript-plain" },
  { "C#": "devicon-csharp-plain-wordmark" },
  { react: "devicon-react-original-wordmark" },
  { nodejs: "devicon-nodejs-plain-wordmark" },
  { TSQL: "devicon-microsoftsqlserver-plain" },
  { git: "devicon-git-plain-wordmark" },
  { github: "devicon-github-original-wordmark" },
  { jquery: "devicon-jquery-plain-wordmark" },
  { php: "devicon-php-plain" },
];

export const excluidName = [
  "1MarcosAquino",
  "Json_server_base",
  "dev_in_training",
  "dio-lab-open-source",
  "back-kenzieCars",
  "Background_Color",
  "pagina-login",
  // "trilha-net-testes-unitarios-desafio",
  // "trilha-net-banco-de-dados-desafio",
  // "trilha-net-api-desafio",
  // "trilha-net-poo-desafio",
  "trilha-net-explorando-desafio",
  "trilha-net-fundamentos-desafio",
  "Relogio",
  "sp6-m4-kimoveis-marcos",
  "Kenzie_Hub",
  "Portfolio",
];

export const excluidTach = ["C#"];

type Project = {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
};
export const projects: Array<Project> = [];

// export function replaceString(text: string) {
//   let exit = "";

//   for (let index = 0; index <= text.length; index++) {
//     if (text[index]) {
//       exit += text[index].replace("-", " ").replace("_", " ");
//     }
//   }
//   return exit;
// }

export function replaceString(text: string) {
  return text.replace(/[_-]/g, " ");
}
