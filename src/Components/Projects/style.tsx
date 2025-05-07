import styled from 'styled-components';

const ProjectStyle = styled.section`
    background: var(--gradient-1);
    padding-top: 10%;

    /* height: 120dvh; */

    .title {
        margin-bottom: 3rem;
        text-transform: uppercase;
        text-align: center;
        font-size: 2em;
        letter-spacing: 0.11em;
    }

    .container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1rem;
    }

    /*
     @media (min-width: 800px) {
        padding-top: 5%;
    } 
     */
`;

export default ProjectStyle;
