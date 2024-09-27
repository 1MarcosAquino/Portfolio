import { Icon } from "@iconify/react/dist/iconify.js";
import { useMyContext } from "../../provider";
import { otechs } from "../../scripts/utils";
import Section from "../Section";
import { useCard } from "./hook";
import ProjectStyle from "./style";

function Projects() {
  const { isOpen, setIsOpen } = useMyContext();
  const [repos] = useCard();

  const click = (url: string | null) => {
    if (url) {
      localStorage.setItem("url", url);
    }

    setIsOpen(!isOpen);
  };

  return (
    <Section>
      <h2 className="title">
        Meus <span> Projetos</span>
      </h2>
      <ProjectStyle className="container">
        {repos.map((repo) => {
          return (
            <div className="card" key={repo.id}>
              <p className="name">{repo.name}</p>
              <p className="description">{repo.description}</p>

              <div className="htmlUrl_homepage">
                <div className=" tooltip">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon icon="line-md:github-loop" width="32" height="32" />
                  </a>
                  <span className="tooltiptext">Ver no Github</span>
                </div>

                {repo.homepage && (
                  <div className="tooltip">
                    <button onClick={() => click(repo.homepage)}>
                      <Icon
                        icon="hugeicons:link-forward"
                        width="32"
                        height="32"
                      />
                      <span className="tooltiptext">Ver aplicação</span>
                    </button>
                  </div>
                )}
              </div>
              <div className="languages">
                {repo.language.map((r, i) => (
                  <div key={r + i} className="language tooltip">
                    <Icon icon={otechs[r]} width="32" height="32" />
                    <span className="tooltiptext">{r}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </ProjectStyle>
    </Section>
  );
}
export default Projects;
