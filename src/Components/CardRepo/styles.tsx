import styled from 'styled-components';

const CardRepoStyle = styled.div`
    height: auto;
    width: 300px;

    padding: 0.5rem;
    border-radius: 8px;

    background-color: var(--cardRepo-background);

    .card-section {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .card-container-image {
        background-color: var(--cardRepo-container-image-background);
        border-radius: 8px;
        padding: 10px;
    }

    .card-image {
        width: 100%;
    }

    .card-title {
        color: var(--cardRepo-title);

        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        /* font-family: 'Poppins', sans-serif; */
        /* font-family: 'Nunito', sans-serif; */
        font-optical-sizing: auto;
        font-weight: 500;
        font-style: normal;
        font-variation-settings: 'wdth' 100;
    }

    .card-description {
        color: var(--cardRepo-description);

        font-optical-sizing: auto;
        font-weight: 400;
        font-family: 'Nunito', sans-serif;
        letter-spacing: 1px;
    }

    .card-languages {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .languages {
        display: flex;
        justify-content: center;
        align-items: center;

        gap: 0.5rem;
        flex-wrap: wrap;

        background-color: var(--cardRepo-btn-background);
        color: var(--cardRepo-btn-color);

        padding: 0.5rem;
        border-radius: 5px;
    }

    .languages .lang {
        font-size: 0.8rem;
        font-optical-sizing: auto;
        font-weight: 400;
        font-family: 'Nunito', sans-serif;
        letter-spacing: 1px;
    }

    .btn {
        background-color: var(--cardRepo-btn-background);
        color: var(--cardRepo-btn-color);
        padding: 0.5rem;
        border-radius: 5px;
        font-size: 0.8rem;
        font-optical-sizing: auto;
        font-weight: 400;
        font-family: 'Nunito', sans-serif;
        letter-spacing: 1px;
        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
    }

    .link {
        text-decoration: none;
    }
`;

export default CardRepoStyle;
