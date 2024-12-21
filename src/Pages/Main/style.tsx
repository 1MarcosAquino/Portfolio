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
        border-bottom-right-radius: var(--detailCurve);
        border-bottom-left-radius: var(--detailCurve);
    }
    .details-footer {
        border-top-right-radius: var(--detailCurve);
        border-top-left-radius: var(--detailCurve);
    }
`;

export default MainStyle;
