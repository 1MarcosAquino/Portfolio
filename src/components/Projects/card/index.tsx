import { Icon } from "@iconify/react";
import { GravityUiArrowShapeTurnUpRight } from "../../../image-components/GravityUiArrowShapeTurnUpRight";
import { PhGithubLogoBold } from "../../../image-components/PhGithubLogoBold";
import { Repo } from "../../../interfaces";
import { otechs } from "../../../scripts/utils";
import CardStyle from "./style";

const Card = ({ repo }: { repo: Repo }) => {
  console.clear();
  console.log([repo]);

  return (
    <CardStyle>
      <p>{repo.name}</p>
      {/* <p>{repo.description}</p> */}
      {/* <p>{repo.updated_at}</p> */}
      {/* <p>{repo.created_at}</p> */}
      {/* <p>{repo.language}</p> */}

      <div className="language tooltip">
        <Icon icon={otechs[repo.language]} width="32" height="32" />
        <Icon icon="line-md:github-loop" width="96" height="96" />
        {/* <i className={otechs[repo.language]}></i> */}
        <span className="tootiptext">{repo.language}</span>
      </div>

      {/* <p>{repo.languages_url}</p> */}
      <p>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          <PhGithubLogoBold />
        </a>
      </p>
      {repo.homepage && (
        <button onClick={() => click(repo.homepage)}>
          <GravityUiArrowShapeTurnUpRight />
        </button>
      )}
    </CardStyle>
  );
};

export default Card;
