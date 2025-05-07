import { ReactNode } from 'react';
import './style.css';

interface ISection {
    id?: string;
    children: ReactNode;
    title: string;
}
const Section = ({ children, title, id }: ISection) => {
    return (
        <section id={id} className="section">
            <div className="container">
                <h2 className="mt-4 mb-4 text-uppercase">
                    {title}
                    <hr />
                </h2>
                {children}
            </div>
        </section>
    );
};

export default Section;
