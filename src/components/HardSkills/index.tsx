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

function HardSkills() {
  return (
    <div className="hardskills">
      {techs.map((tech: Tech, index: number) => {
        return <Tooltip key={index} nameClass="language" tech={tech} />;
      })}
    </div>
  );
}

export default HardSkills;
