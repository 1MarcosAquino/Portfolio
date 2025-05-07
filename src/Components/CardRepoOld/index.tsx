import { Repo } from '../../Interfaces';
import LanguageList from './LanguageList';
import SeeOnGithub from './SeeOnGithub';
import CardRepoStyle from './styles';
import TooltipButton from './TooltipButton';

type CardRepoProps = { repo: Repo; click: (url: string) => void };

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
