import styled from 'styled-components';

const ProjectStyle = styled.section`
    background: var(--gradient-1);
    height: 120dvh;
    padding-top: 10%;

    .title {
        margin-bottom: 3rem;
    }

    .title {
        text-transform: uppercase;
        text-align: center;
        font-size: 2em;
        letter-spacing: 0.11em;
    }

    .container {
        overflow-x: auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 1rem;
    }

    @media (min-width: 800px) {
        padding-top: 5%;
    }
`;

export default ProjectStyle;
