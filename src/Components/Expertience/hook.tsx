import { useEffect, useState } from 'react';
import { ISkill } from '../../Interfaces';
import { skills } from '../../scripts/utils';

export const useExperience = (delay = 1000) => {
    const [askills, setSkills] = useState<ISkill[]>([]);
    const [index, setIndex] = useState(0);

    const techs = Object.entries(skills).map(([key, value]) => {
        return { [key]: value };
    });

    useEffect(() => {
        const interval = setInterval(() => {
            if (delay < 600 && index === techs.length) {
                clearInterval(interval);
                setIndex(0);
            }

            setSkills((prevSkills) => {
                if (prevSkills.length === techs.length) {
                    return prevSkills.slice(1);
                }
                return [...prevSkills, techs[index]];
            });

            setIndex((prevIndex) => (prevIndex + 1) % techs.length);
        }, delay);

        return () => clearInterval(interval);
    }, [delay, index]);

    return [askills];
};
