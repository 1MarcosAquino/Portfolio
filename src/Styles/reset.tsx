import { createGlobalStyle } from 'styled-components';

export const ResetCSS = createGlobalStyle`

* {
  scrollbar-width: thin;
  scrollbar-color: var(--primary-1) var(--background-2); 
}

::-webkit-scrollbar {
    width: 5px;
    background-color: var(--background-2);
}

::-webkit-scrollbar-thumb {
    background: var(--primary-1);
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
  color: var(--text-1);  
  transition: color 0.1s;  
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
 min-height: fit-content;
}

.tooltip {
    position: relative;
    display: inline-block;
}

.tooltip .tooltiptext {
    visibility: hidden;
    width: 6.25rem;
    background-color: var(--background-3);
    color: var(--text-2);
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
    border-color: var(--background-3) transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
}`;
