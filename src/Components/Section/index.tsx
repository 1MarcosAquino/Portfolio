import { ReactNode } from 'react';

import Icon from '../Icon';
import StyleSection from './style';

interface ISection {
    id?: string;
    children: ReactNode;
    title: string;
}

const Section = ({ children, title, id }: ISection) => {
    return (
        <StyleSection id={id} className="section">
            <div className="container">
                <h2 className="section-title">
                    <Icon icon="token:wing" height="32" width="32" />
                    {title}
                    <Icon className="invert" icon="token:wing" height="32" width="32" />

                    <hr />
                </h2>
                <div className="row">{children}</div>
            </div>
        </StyleSection>
    );
};

export default Section;
