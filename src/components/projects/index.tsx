import { CardProjectStyled } from './project.styled';
import { projects } from '../../database/database.json';

type Ttechnology = { name: string; logo: string };

type Tprojects = {
    id: number;
    name: string;
    image: string;
    url: string;
    technologies: Array<Ttechnology>;
    description: string;
};

const Projects = () => {
    return (
        <CardProjectStyled>
            {projects.map((project: Tprojects) => (
                <a
                    key={project.id}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <li className="card">
                        <div className="header__card">
                            <img
                                className="banner__card"
                                src={project.image}
                                alt={project.name}
                            />
                        </div>
                        <div className="body__card">
                            <h3 className="title__card">{project.name}</h3>
                            <p className="description__card">
                                {project.description}
                            </p>
                            <div className="technologies">
                                {project.technologies.map((tech) => (
                                    <img
                                        src={tech.logo}
                                        alt={tech.name}
                                        className="technology__logo"
                                    />
                                ))}
                            </div>
                        </div>
                    </li>
                </a>
            ))}
        </CardProjectStyled>
    );
};

export default Projects;
