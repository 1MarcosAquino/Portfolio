import { Icon } from '@iconify/react/dist/iconify.js';
import { skills } from '../../scripts/utils';

const LanguageList = ({ languages }: { languages: string[] }) => (
    <div className="languages">
        {languages.map((language) => (
            <div key={language} className="language tooltip">
                <Icon icon={skills[language]} width="32" height="32" />
                <span className="tooltiptext">{language}</span>
            </div>
        ))}
    </div>
);

export default LanguageList;
