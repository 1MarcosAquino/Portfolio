import { createGlobalStyle } from 'styled-components';

export const Theme = createGlobalStyle<{ dark?: boolean }>`
:root {
    --primary: ${({ dark }) => (dark ? '#53a3d6' : '#4a90e2')};
    --primary-1: ${({ dark }) => (dark ? '#00e9ff' : '#0066cc')};
    --secondary: ${({ dark }) => (dark ? '#4B33D0' : '#673ab7')};
    --secondary-2: ${({ dark }) => (dark ? '#0073ff' : '#03a9f4')};
    --text: ${({ dark }) => (dark ? '#f8f9fa' : '#333333')};

    --gray-100: ${({ dark }) => (dark ? '#dddddd' : '#f7f7f7')};
    --gray-200: ${({ dark }) => (dark ? '#868e96' : '#e0e0e0')};
    --gray-500: rgba(${({ dark }) => (dark ? '0, 0, 0, 0.581' : '0, 0, 0, 0.1')});
    --gray-600: rgba(${({ dark }) => (dark ? '47, 47, 47, 0.275' : '120, 120, 120, 0.275')});
    --gray-700: ${({ dark }) => (dark ? '#121214' : '#f0f0f0')};

    --background:  ${({ dark }) => (dark ? '#000' : '#ffffff')};
    --background-2: ${({ dark }) => (dark ? '#0F162F' : '#f5f5f5')};

    --focus: ${({ dark }) => (dark ? '#ffcc00' : '#ff8c00')};

    --gradient: linear-gradient(to left, var(--primary), var(--secondary));
    --gradient-2: linear-gradient(to right bottom, var(--primary), var(--secondary));
    --gradient-3: linear-gradient(to right, var(--primary), var(--secondary));
    
    --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-inset: inset 0 2px 4px rgba(0, 0, 0, 0.06);
    --animation-speed: 0.3s;
    --animation-ease: ease-in-out;

    --cardMaxWidth: calc((var(--max-width) - 1rem * 3) / 3);
    --cardHeigth: calc(var(--cardMaxWidth) / 1.65);

    --detailCurve: 50px;

    --width: 90%;
    --max-width: 1250px;

    color: var(--text);
    background-color: var(--background);
    scroll-behavior: smooth;

    font-family: "Poppins", sans-serif;

    .chooseTheme{
        position: fixed;
        top: 15px;
        right: 15px;
        z-index: 10;
        background-color: transparent;

        width: 2rem;
        height: 2rem;

        transition: color 0.5s;
    }

    @media (min-width: 800px) {
        --detailCurve: 200px;
        --width: 80%;   
    }
}`;
