import styled from 'styled-components';

const HeaderStyle = styled.header`
    padding-top: 2.5rem;
    width: 100%;

    height: max-content;
    min-height: 70dvh;
    max-height: 100dvh;
    background: var(--gradient-1);

    .container {
        min-height: 100%;

        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));
        gap: 2rem 1rem;

        justify-items: center;
    }

    .logo {
        height: fit-content;
        font-size: large;
    }

    .logo h2 {
        text-shadow: var(--shadow-1);
        font-size: 1.5em;
    }

    .logo p {
        font-size: 1.1rem;
        text-shadow: var(--shadow-1);

        font-weight: 600;
    }

    h1 {
        max-width: fit-content;
        max-height: fit-content;

        font-size: 2rem;
        letter-spacing: 0.11em;
        font-weight: 500;
        text-shadow: var(--shadow-1);
    }

    svg {
        display: none;
    }

    .button {
        padding: 0.5rem 2.5rem;
        background: var(--gradient-3);
        box-shadow: var(--shadow-3);

        color: var(--text-3);
        font-weight: bold;
        border-radius: 8px;

        max-height: fit-content;
    }

    @media (min-width: 675px) {
        .container {
            grid-template-rows: auto 50%;
            gap: 0;
        }

        .logo {
            justify-self: start;
        }

        .menu {
            grid-column: 2/4;
            justify-self: end;
        }

        h1 {
            max-width: 650px;
            grid-row: 2/3;
            grid-column: 1/2;
            font-size: 2.5rem;
        }

        svg {
            display: flex;

            grid-row: 2/4;
            grid-column: 2/3;
            justify-self: end;

            width: 292px;
            height: 292px;
        }

        .logo {
            grid-column: 1/2;
        }

        .logo h2 {
            text-shadow: var(--shadow-1);
            font-size: 1.5em;
        }
        .logo p {
            font-size: 1.1rem;
            font-weight: 600;
        }

        .button {
            grid-column: 1;
            grid-row: 3;

            align-self: center;
        }
    }
`;

export default HeaderStyle;
