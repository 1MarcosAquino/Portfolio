import styled from 'styled-components';

const NaveMenuStyle = styled.ul`
    width: fit-content;
    height: fit-content;

    font-size: large;

    text-transform: uppercase;

    display: flex;
    column-gap: 1rem;

    @media (min-width: 760px) {
        column-gap: 2rem;
    }
`;

export default NaveMenuStyle;
