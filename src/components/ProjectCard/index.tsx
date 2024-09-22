import { useEffect, useState } from "react";
import Tooltip from "../Tooltip";
import { Repo, Tech } from "../../interfaces";
import { excluid, techs } from "../../scripts/utils";
import { api } from "../../scripts/api";

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

  const controller = new AbortController();

  useEffect(() => {
    try {
      (async function () {
        const response = await api("http://127.0.0.1:5173/database.json", {
          signal: controller.signal,
        });

        console.log(response);

        const reposOrdenads = response.sort(
          (a: Repo, b: Repo) =>
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        );

        setRepos(reposOrdenads);
      })();
    } catch (error) {
      console.error(error);
    }

    return () => {};
  }, []);

  return (
    <>
      {repos.map((repo) => {
        if (!excluid.includes(repo.name)) {
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
        }
      })}
    </>
  );
}

export default ProjectCard;
