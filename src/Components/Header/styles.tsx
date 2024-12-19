import styled from 'styled-components';

const HeaderStyle = styled.header`
    padding-top: 2.5rem;
    width: 100dvw;
    height: 70dvh;

    position: relative;

    background: var(--gradient);

    .container {
        height: 100%;
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: auto 50%;
    }

    h1 {
        grid-row: 2/3;
        grid-column: 1/2;
        justify-self: start;

        font-size: 2.5em;
        letter-spacing: 0.11em;
        font-weight: 500;
        text-shadow: 2px 2px 5px var(--background-2);
    }

    svg {
        grid-row: 2/4;
        grid-column: 2/3;
        justify-self: end;
    }

    .logo {
        grid-column: 1/2;
        height: fit-content;

        display: flex;
        align-items: center;
        flex-direction: column;
        justify-self: start;

        font-size: large;
    }

    .logo h2 {
        text-shadow: 2px 2px 5px var(--background-2);
        font-size: 1.5em;
    }
    .logo p {
        font-size: 1.1rem;
        color: var(--background-2);
        font-weight: 600;
    }

    ul {
        grid-column: 2/4;
    }

    h1 {
        max-width: 650px;
    }

    .button {
        padding: 0.5rem 2.5rem;
        background: linear-gradient(to right, var(--primary), var(--secondary));

        color: var(--gray-700);
        font-weight: bold;
        border-radius: 8px;

        position: absolute;
        top: 75%;
        left: 24%;
        box-shadow: 2px 2px 5px var(--background-2);
    }
`;

export default HeaderStyle;
