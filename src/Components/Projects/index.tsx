import { useCard } from '../../CustomHooks/useCard';
import CardRepo from '../CardRepo';
import ProjectStyle from './style';

function Projects() {
    const [repos, openModal] = useCard();

    return (
        <ProjectStyle id="projetos">
            <h2 className="title">
                Meus <span> Projetos</span>
            </h2>
            <div className="container">
                {repos.map((repo) => (
                    <CardRepo key={repo.id} repo={repo} click={openModal} />
                ))}
            </div>
        </ProjectStyle>
    );
}
export default Projects;
