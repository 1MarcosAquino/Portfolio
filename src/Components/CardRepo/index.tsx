import { ISkill, Repo } from '../../Interfaces';
import CardRepoStyle from './styles';

import { Icon } from '@iconify/react/dist/iconify.js';

const techs: ISkill = {
    CSS: 'tabler:brand-css3',
    HTML: 'icon-park-outline:html-five',
    JavaScript: 'tabler:brand-javascript',
    TypeScript: 'hugeicons:typescript-01',
    'C#': 'devicon-plain:csharp',
    react: 'teenyicons:react-solid',
    nodejs: 'tabler:brand-nodejs',
    TSQL: 'devicon-plain:microsoftsqlserver',
    postgresql: 'simple-icons:postgresql',
    mysql: 'simple-icons:mysql',
    git: 'arcticons:git',
    github: 'line-md:github-loop',
    'github actions': 'devicon-plain:githubactions',
    jquery: 'devicon-plain:jquery-wordmark',
    php: 'bxl:php',
    composer: 'simple-icons:composer',
};

type CardRepoProps = { repo: Repo; click: (url: string) => void };

type TooltipButtonProps = { action: (url: string) => void };

type SeeOnGithubProps = { link: string };

const SeeOnGithub = ({ link }: SeeOnGithubProps) => {
    return (
        <div className=" tooltip github">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <Icon icon="line-md:github-loop" width="32" height="32" />
            </a>

            <span className="tooltiptext">Ver no Github</span>
        </div>
    );
};

const LanguageList = ({ languages }: { languages: string[] }) => (
    <div className="languages">
        {languages.map((language) => (
            <div key={language} className="language tooltip">
                <Icon icon={techs[language]} width="32" height="32" />
                <span className="tooltiptext">{language}</span>
            </div>
        ))}
    </div>
);

const TooltipButton = ({ action }: TooltipButtonProps) => (
    <div className="tooltip deploy">
        <button onClick={() => action}>
            <Icon icon="hugeicons:link-forward" width="32" height="32" />
            <span className="tooltiptext">Ver aplicação</span>
        </button>
    </div>
);

const CardRepo = ({ repo, click }: CardRepoProps) => {
    const { name, description, html_url, homepage, language } = repo;
    return (
        <CardRepoStyle className="card">
            <p className="name">{name}</p>
            <p className="description">{description}</p>

            <SeeOnGithub link={html_url} />

            {homepage && <TooltipButton action={() => click(homepage!)} />}

            <LanguageList languages={language} />
        </CardRepoStyle>
    );
};

export default CardRepo;
