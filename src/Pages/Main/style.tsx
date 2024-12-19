import styled from 'styled-components';

const MainStyle = styled.section`
    .container {
        height: 70vh;
    }

    .details-header,
    .details-footer {
        height: 15dvh;
        min-width: 100%;
        background: var(--gradient);
    }

    .details-header {
        border-bottom-right-radius: 200px;
        border-bottom-left-radius: 200px;
    }
    .details-footer {
        border-top-right-radius: 200px;
        border-top-left-radius: 200px;
    }
`;

export default MainStyle;
