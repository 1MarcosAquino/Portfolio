import { createGlobalStyle } from "styled-components";

export const ThemeDark = createGlobalStyle`

:root {

    scroll-behavior: smooth;
      margin: 0;
  padding: 0;
  box-sizing: border-box;

    --primary-1: #00e9ff;
    --primary: #53a3d6;
    --secondary: #4B33D0;
    --text:#f8f9fa;
    --gray-100: #dddddd;
    --gray-200: #868e96;
    --gray-600: rgba(47, 47, 47, 0.275);
    --gray-500: rgba(0, 0, 0, 0.581);
    --gray-700: #121214;

    --background:#0F162F;
    /* --background:#0F162F; */
    --gradient: linear-gradient(to left, var(--primary), var(--secondary));
    --gradient-2: linear-gradient(to right bottom, var(--primary), var(--secondary));

    --width: 90%;
    --max-width: 1250px;

    color: var(--text);
    background-color: var(--background);
}

::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: var(--gray-700);
}

::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: 10px;
}


body,
main,
header,
button,footer,
div,
nav,
ul,
li,
a,
p,
hr,
h1,
h2,
h3 {
  
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;

  list-style: none;
  font-family: "Poppins", sans-serif;
  color: var(--text);
  border: transparent;
}
button {
  cursor: pointer;
}
`;
