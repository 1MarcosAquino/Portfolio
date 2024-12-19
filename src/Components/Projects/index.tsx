import { repos } from '../../Api/repos';
import { useMyContext } from '../../Provider';
import CardRepo from '../CardRepo';
import ProjectStyle from './style';

function Projects() {
    const { isOpen, setIsOpen } = useMyContext();

    const openModal = (url: string) => {
        localStorage.setItem('url', url);
        setIsOpen(!isOpen);
    };

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
