import { ReposStyled } from './repos.styled';
import { projects } from '../../database/database.json';

type Tprojects = {
    id: number;
    name: string;
    image: string;
    url: string;
    technologies: string[];
    description: string;
};

const Repositories = () => {
    return (
        <ReposStyled id="projects">
            <ul>
                {projects.map((project: Tprojects) => (
                    <li key={project.id}>
                        <img src={project.image} alt={project.name} />
                        <h3>{project.name}</h3>
                        <p>{project.technologies}</p>
                        <p>{project.description}</p>
                        <p>
                            Para ver o projeto funcionando clicque
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Aqui!
                            </a>
                        </p>
                    </li>
                ))}
            </ul>
        </ReposStyled>
    );
};

export default Repositories;
