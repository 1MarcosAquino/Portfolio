import styled from 'styled-components';

export const ProfileStyled = styled.section`
    .myAvatarContainer {
        background-image: url('https://avatars.githubusercontent.com/u/114518532?v=4');
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: contain;
        background-position-y: 125px;
        filter: contrast(1.3) grayscale(1);
        overflow: auto;
        width: auto;
        height: auto;

        border: 1px solid red;
    }

    .myAvatar {
        display: none;
    }

    @media (min-width: 700px) {
        .myAvatarContainer {
            filter: contrast(1.2) grayscale(0);
            background-image: none;
        }
        .myAvatar {
            border-radius: 100%;
            width: 20%;
            display: flex;
        }
    }
`;
