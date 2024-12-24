import styled from 'styled-components';

const MenuStyle = styled.ul`
    width: fit-content;
    height: fit-content;

    font-size: large;

    text-transform: uppercase;

    display: flex;
    column-gap: 0.95rem;

    li a {
        transition: color 0.5s;
        text-shadow: var(--shadow-2);
    }

    li:hover a {
        color: var(--text-2);
    }

    @media (min-width: 760px) {
        column-gap: 2rem;
    }
`;

export default MenuStyle;
