import { createGlobalStyle } from 'styled-components';

export const ThemeDark = createGlobalStyle`
:root {
    --primary-1: #00e9ff;
    --primary: #53a3d6;
    --secondary: #4B33D0;
    --secondary-2: #0073ff;
    --text: #f8f9fa;
    --gray-100: #dddddd;
    --gray-200: #868e96;
    --gray-600: rgba(47, 47, 47, 0.275);
    --gray-500: rgba(0, 0, 0, 0.581);
    --gray-700: #121214;

    --background: #000;
    --background-2: #0F162F;
    --gradient: linear-gradient(to left, var(--primary), var(--secondary));
    --gradient-2: linear-gradient(to right bottom, var(--primary), var(--secondary));
    --gradient-3: linear-gradient(to right, var(--primary), var(--secondary));
    
    --focus: #ffcc00;
    --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-inset: inset 0 2px 4px rgba(0, 0, 0, 0.06);
    --animation-speed: 0.3s;
    --animation-ease: ease-in-out;

    --cardMaxWidth: calc((var(--max-width) - 1rem * 3) / 3);
    --cardHeigth: calc(var(--cardMaxWidth) / 1.65);

    --width: 90%;
    --max-width: 1250px;

    color: var(--text);
    background-color: var(--background);
    scroll-behavior: smooth;

    font-family: "Poppins", sans-serif;
}

/* :root {
    --primary-1: #00e9ff;
    --primary: #53a3d6;
    --secondary: #4B33D0;
    --secondary-2: #0073ff;
    --text:#f8f9fa;
    --gray-100: #dddddd;
    --gray-200: #868e96;
    --gray-600: rgba(47, 47, 47, 0.275);
    --gray-500: rgba(0, 0, 0, 0.581);
    --gray-700: #121214;

    --background:#000;
    --background-2:#0F162F;
    --gradient: linear-gradient(to left, var(--primary), var(--secondary));
    --gradient-2: linear-gradient(to right bottom, var(--primary), var(--secondary));
    --gradient-3: linear-gradient(to right, var(--primary), var(--secondary));

    --width: 90%;
    --max-width: 1250px;

    --cardMaxWidth: calc((var(--max-width) - 1rem * 3) / 3);
    --cardHeigth: calc(var(--cardMaxWidth) / 1.65);

    color: var(--text);
    background-color: var(--background);
    scroll-behavior: smooth;

    font-family: "Poppins", sans-serif;} */
`;

// const Dtheme = createGlobalStyle`

// :root {
//     --primary-1: #00e9ff;
//     --primary: #53a3d6;
//     --secondary: #4B33D0;
//     --secondary-2: #0073ff;
//     --text: #f8f9fa;
//     --gray-100: #dddddd;
//     --gray-200: #868e96;
//     --gray-600: rgba(47, 47, 47, 0.275);
//     --gray-500: rgba(0, 0, 0, 0.581);
//     --gray-700: #121214;

//     --background: #000;
//     --background-2: #0F162F;
//     --gradient: linear-gradient(to left, var(--primary), var(--secondary));
//     --gradient-2: linear-gradient(to right bottom, var(--primary), var(--secondary));
//     --gradient-3: linear-gradient(to right, var(--primary), var(--secondary));

//     --focus: #ffcc00;
//     --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//     --shadow-inset: inset 0 2px 4px rgba(0, 0, 0, 0.06);
//     --animation-speed: 0.3s;
//     --animation-ease: ease-in-out;

//     --width: 90%;
//     --max-width: 1250px;

//     color: var(--text);
//     background-color: var(--background);
//     scroll-behavior: smooth;

//     font-family: "Poppins", sans-serif;
// }

// `;

// const Ltheme = createGlobalStyle`

// :root {
//     --primary-1: #00e9ff;
//     --primary: #53a3d6;
//     --secondary: #4B33D0;
//     --secondary-2: #0073ff;
//     --text: #f8f9fa;
//     --gray-100: #dddddd;
//     --gray-200: #868e96;
//     --gray-600: rgba(47, 47, 47, 0.275);
//     --gray-500: rgba(0, 0, 0, 0.581);
//     --gray-700: #121214;

//     --background: #000;
//     --background-2: #0F162F;
//     --gradient: linear-gradient(to left, var(--primary), var(--secondary));
//     --gradient-2: linear-gradient(to right bottom, var(--primary), var(--secondary));
//     --gradient-3: linear-gradient(to right, var(--primary), var(--secondary));

//     --focus: #ffcc00;
//     --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//     --shadow-inset: inset 0 2px 4px rgba(0, 0, 0, 0.06);
//     --animation-speed: 0.3s;
//     --animation-ease: ease-in-out;

//     --width: 90%;
//     --max-width: 1250px;

//     color: var(--text);
//     background-color: var(--background);
//     scroll-behavior: smooth;

//     font-family: "Poppins", sans-serif;
// }
// `;
