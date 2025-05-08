import styled from 'styled-components';

const StyledJobs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;

    @media ((min-width: 768px)) {
        flex-direction: row;
        flex-wrap: wrap;
    }

    .card-job {
        width: 300px;
        max-height: 150px;
        padding: 1rem;

        border-radius: 4px;
        border: 1px solid var(--border);

        display: grid;
        grid-template-rows: 1fr 2fr;
        grid-template-columns: 1fr 2fr;
        /* gap: 0.1rem; */
    }

    .img-job {
        width: 60px;
        height: 60px;
        background-color: #1f242a;

        border-radius: 4px;

        display: grid;
        place-items: center; /* Centraliza o filho no eixo X e Y */

        grid-row: 1;
        grid-column: 1/2;
    }
    .img-job svg {
        width: 40px;
        height: 40px;
        color: var(--info);
    }

    .title-job {
        font-size: 1rem;
        font-weight: bold;
        color: var(--text);

        grid-row: 1/3;
        grid-column: 2/3;
    }

    .description-job {
        color: var(--muted);
        font-size: 0.9rem;

        grid-row: 2/3;
        grid-column: 1/3;
    }
`;
export default StyledJobs;
//  style={{ width: '50%', padding: '1rem', backgroundColor: '#1F242A' }}
