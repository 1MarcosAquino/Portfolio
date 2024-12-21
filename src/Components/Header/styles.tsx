import styled from 'styled-components';

const HeaderStyle = styled.header`
    padding-top: 2.5rem;
    width: 100dvw;
    height: 70dvh;
    background: var(--gradient);

    .container {
        height: 100%;

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
        text-shadow: 2px 2px 5px var(--background-2);
        font-size: 1.5em;
    }

    .logo p {
        font-size: 1.1rem;
        text-shadow: 2px 2px 5px var(--background-2);

        font-weight: 600;
    }

    h1 {
        max-width: fit-content;
        max-height: fit-content;

        font-size: 2.5em;
        letter-spacing: 0.11em;
        font-weight: 500;
        text-shadow: 2px 2px 5px var(--background-2);
    }

    svg {
        display: none;
        width: 150px;
        height: 150px;
    }

    .button {
        padding: 0.5rem 2.5rem;
        background: linear-gradient(to right, var(--primary), var(--secondary));
        box-shadow: 2px 2px 5px var(--background-2);

        color: var(--gray-700);
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
            justify-self: end;
            /* grid-column: 2/4; */
        }

        h1 {
            grid-row: 2/3;
            grid-column: 1/2;
            /* justify-self: start; */
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
            /* 
            height: fit-content;

            display: flex;
            align-items: center;
            flex-direction: column;
            justify-self: start;

            font-size: large; 
            */
        }

        .logo h2 {
            text-shadow: 2px 2px 5px var(--background-2);
            font-size: 1.5em;
        }
        .logo p {
            font-size: 1.1rem;
            font-weight: 600;
        }

        ul {
            grid-column: 2/4;
        }

        h1 {
            max-width: 650px;
        }

        .button {
            grid-column: 1;
            grid-row: 3;

            align-self: center;
        }
    }
`;

export default HeaderStyle;
