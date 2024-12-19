import { createGlobalStyle } from 'styled-components';

export const ResetCSS = createGlobalStyle`

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
button,
footer,
div,
nav,
ul,
li,
a,
p,
hr,
h1,
h2,
h3,form,input {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;  
  border: transparent;
  color: var(--text);  
}

button {
  cursor: pointer;
}

li {
  list-style: none;

}

.container {
  width: var(--width);
  max-width: var(--max-width);
 margin: 0 auto ;
}

.tooltip {
    position: relative;
    display: inline-block;
    /* border-bottom: 1px dotted var(--secondary-color); */
}

.tooltip .tooltiptext {
    visibility: hidden;
    width: 6.25rem;
    background-color: var(--gray-100);
    color: var(--gray-700);
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
    font-weight: 600;
    text-transform: uppercase;
}

.tooltip .tooltiptext::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: var(--gray-100) transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
}

`;
