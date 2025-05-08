// import { Icon } from '@iconify/react/dist/iconify.js';
import { Repo } from '../../Interfaces';
import { skills } from '../../scripts/utils';
import Icon from '../Icon';

import './styles.css';

type CardRepoProps = { repo: Repo; click: (url: string) => void };

const CardRepo = ({ repo, click }: CardRepoProps) => {
    const { name, description, html_url, homepage, language } = repo;
    const maxLength = 100;
    return (
        <div className="cardRepo">
            <div className="cardRepo-container-image">
                <img className="cardRepo-image" src="source-Code.jpg" alt="cardRepo-image" />
            </div>

            <h3 className="cardRepo-title cardRepo-section">{name}</h3>
            {description.length <= maxLength && <p className="cardRepo-description">{description}</p>}
            {description.length > maxLength && <p className="cardRepo-description cardRepo-section">{description.substring(0, maxLength) + '...'}</p>}

            <span className="cardRepo-section cardRepo-languages">
                {language.map((lang) => (
                    <div className="languages" key={lang}>
                        <Icon icon={skills[lang]} width="16" height="16" />
                        <span className="lang">{lang}</span>
                    </div>
                ))}
            </span>

            <div className="cardRepo-section row g-2">
                {homepage && (
                    <div className="col-md-6">
                        <button className="btn w-100" onClick={() => click(homepage)}>
                            <Icon icon="hugeicons:link-forward" width="24" height="24" />
                            <span>Ver demo</span>
                        </button>
                    </div>
                )}

                <div className={homepage ? 'col-md-6' : 'col-md-12'}>
                    <a className="btn link w-100" href={html_url} target="_blank" rel="noopener noreferrer">
                        <Icon icon="line-md:github-loop" width="24" height="24" />
                        <span>Repositório</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CardRepo;
