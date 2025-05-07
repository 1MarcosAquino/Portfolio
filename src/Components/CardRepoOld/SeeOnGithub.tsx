import { Icon } from '@iconify/react/dist/iconify.js';

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

export default SeeOnGithub;
