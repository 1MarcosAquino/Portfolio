import styled from 'styled-components';

const ProjectStyle = styled.section`
    background: var(--gradient);
    /* max-height: 100dvh; */

    display: flex;
    justify-content: center;
    flex-direction: column;

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
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
    }
`;

export default ProjectStyle;
