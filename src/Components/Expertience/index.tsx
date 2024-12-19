import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import { useExperience } from './hook';
import ExpertienceStyle from './style';

function Expertience() {
    const [skills] = useExperience();

    return (
        <ExpertienceStyle>
            <div className="details-header"></div>
            <div className="container">
                {skills.map((tech, idx) => (
                    <React.Fragment key={idx}>
                        {Object.entries(tech).map(([name, icon], index) => {
                            return (
                                <div key={index} className="tooltip">
                                    <Icon icon={icon} width="72" height="72" />
                                    <span className="tooltiptext">{name}</span>
                                </div>
                            );
                        })}
                    </React.Fragment>
                ))}
            </div>
            <div className="details-footer"></div>
        </ExpertienceStyle>
    );
}

export default Expertience;
