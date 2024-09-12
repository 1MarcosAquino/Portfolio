import { useEffect, useState } from "react";
import Tooltip from "../Tooltip";

interface Tech {
  [key: string]: string;
}

const techs: Array<Tech> = [
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

type Repo = {
  id: number;
  name: string;
  description: string;
  language: string;
  homepage: string | null;
  html_url: string;
  created_at: string | Date | number;
  updated_at: string | Date | number;
};

function replaceString(text: string) {
  let exit = "";

  for (let index = 0; index <= text.length; index++) {
    if (text[index]) {
      exit += text[index].replace("-", " ").replace("_", " ");
    }
  }
  return exit;
}

function ProjectCard() {
  const [repos, setRepos] = useState<Array<Repo>>([]);

  useEffect(() => {
    let baseUrl = "https://api.github.com/users/1MarcosAquino/repos";

    if (location.hostname == "127.0.0.1" || location.hostname == "localhost") {
      baseUrl = "http://127.0.0.1:5173/database.json";
    }

    fetch(baseUrl)
      .then(async (res) => {
        const response = await res.json();

        setRepos(
          response.sort(
            (a: Repo, b: Repo) =>
              new Date(b.updated_at).getTime() -
              new Date(a.updated_at).getTime()
          )
        );
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {repos.map((repo) => {
        const repoName = replaceString(repo.name);

        return (
          <div key={repo.id} className="card">
            <div className="content">
              {repo.homepage && (
                <a href={repo.homepage} className="homepage" target="_blank">
                  <img
                    src="public/typcn_arrow-forward.svg"
                    title="Ver demonstração"
                  />
                </a>
              )}

              <h2 className="name">{repoName.toUpperCase()}</h2>

              {repo.description && (
                <div className="description">{repo.description}</div>
              )}

              {techs.map((tech: Tech, index: number) => {
                if (Object.keys(tech)[0] === repo.language)
                  return (
                    <Tooltip key={index} nameClass="language" tech={tech} />
                  );
              })}

              <a href={repo.html_url} className="html_url" target="_blank">
                <img
                  src="public/grommet-icons_github.svg"
                  title="< Código no GitHub />"
                />
              </a>
            </div>
            {repos[0].updated_at === repo.updated_at && (
              <span className="novo">NOVO!</span>
            )}
          </div>
        );
      })}
    </>
  );
}

export default ProjectCard;
