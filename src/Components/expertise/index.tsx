import { Icon } from '@iconify/react/dist/iconify.js';
import { useEffect, useState } from 'react';
import { skills } from '../../scripts/utils';

const Skill = () => {
    const [index, setInt] = useState(0);

    // const [exp, setExp] = useState<ISkill>({});

    const keys = Object.keys(skills);
    const values = Object.values(skills);

    useEffect(() => {
        setInterval(() => {
            // setExp(Object.values(skills));
            setInt(Math.floor(Math.random() * values.length));
            // setExp(skills);
        }, 3000);
    }, []);

    return (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <span title={keys[index - 1]}>
                <Icon icon={values[index - 1]} width="40" height="40" />
            </span>
            <span title={keys[index]}>
                <Icon icon={values[index]} width="64" height="64" />
            </span>
            <span title={keys[index + 1]}>
                <Icon icon={values[index + 1]} width="40" height="40" />
            </span>
        </div>
    );
};
const ExpertienceGrid = () => {
    return (
        <div style={{ transition: 'fade .2s ease-in-out' }}>
            <Skill />
        </div>
    );
};

export default ExpertienceGrid;
