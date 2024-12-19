import styled from 'styled-components';

const MenuStyle = styled.ul`
    justify-self: end;

    width: fit-content;
    height: fit-content;

    font-size: large;

    text-transform: uppercase;

    display: flex;
    column-gap: 2rem;

    li a {
        transition: color 0.5s;
        text-shadow: 1px 1px 1px var(--background-2);
    }

    li:hover a {
        color: var(--background-2);
    }
`;

export default MenuStyle;
