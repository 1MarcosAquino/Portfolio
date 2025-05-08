import { useCard } from '../../CustomHooks/useCard';
import CardRepo from '../CardRepo';
import Section from '../Section';

function Projects() {
    const [repos, openModal] = useCard();

    // Agrupa os repositórios em grupos de até 3
    const groupRepos = (perPage = 3) => {
        const grouped = [];
        for (let i = 0; i < repos.length; i += perPage) {
            grouped.push(repos.slice(i, i + perPage));
        }
        return grouped;
    };

    const groupedRepos = groupRepos(2);

    return (
        <Section id="projetos" title="O que eu já fiz">
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {groupedRepos.map((group, i) => (
                        <div style={{ minWidth: '100%' }} key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                            <div className="row justify-content-center g-2">
                                {group.map((repo) => (
                                    <div key={repo.id} className="col-md-4 d-flex justify-content-center g-2">
                                        <CardRepo repo={repo} click={openModal} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Controles */}
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Próximo</span>
                </button>

                {/* Indicadores */}
                <div className="carousel-indicators mt-3">
                    {groupedRepos.map((_, i) => (
                        <button
                            key={i}
                            type="button"
                            data-bs-target="#myCarousel"
                            data-bs-slide-to={i}
                            className={i === 0 ? 'active' : ''}
                            aria-current={i === 0 ? 'true' : undefined}
                            aria-label={`Slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
}

export default Projects;
