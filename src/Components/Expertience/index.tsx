// import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
// import Icon from '../../Components/Icon';
import Icon from '../Icon';
import { useExperience } from './hook';

function Expertience() {
    const [skills] = useExperience();

    return (
        <section className="expertience">
            <div className="details-header"></div>
            <div className="container">
                {skills.map((tech, idx) => (
                    <React.Fragment key={idx}>
                        {Object.entries(tech).map(([name, icon], index) => {
                            return (
                                <div key={index} title={name}>
                                    <Icon icon={icon} width="32" height="32" />
                                </div>
                            );
                        })}
                    </React.Fragment>
                ))}
            </div>
            <div className="details-footer"></div>
        </section>
    );
}

export default Expertience;
