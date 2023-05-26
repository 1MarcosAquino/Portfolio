import styled from 'styled-components';

export const HeaderStyled = styled.header`
    border: red 1px solid;
    position: fixed;
    height: 80px;
    z-index: 1;
    top: 0;

    width: 100%;

    > .container {
        margin: 0 auto;
        display: grid;
        grid-template-columns: auto auto auto;
        width: 80%;

        padding-top: 20px;
    }

    .nave {
        display: flex;
        flex-direction: row;
        gap: 15px;
    }

    /* 

    border: 1px solid red;

    width: 100%;
    height: 11vh;
    z-index: 2;

    position: fixed;

    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */

    /*
    --stick-x: 2px;
    --stick-y: 20px;



    .menu {
        top: 3vh;
        position: absolute;
        right: 9vh;
        width: auto;
        height: auto;
        padding: 5px;
        transition: 0.1s linear;
    }

    .buttonX,
    .buttonBurger {
        position: relative;
        cursor: pointer;
        padding: 4px;
        border-radius: 100px;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    .stick {
        width: var(--stick-x);
        height: var(--stick-y);
        background-color: black;
        border-radius: 10px;
        position: absolute;
        z-index: 10;
    }

    .stickX {
        transform: rotate(-215deg);
    }
    .stickY {
        transform: rotate(215deg);
    }

    .stickBurger {
        transform: rotate(90deg);
    }

    .stickBurger1 {
        top: 1px;
    }
    .stickBurger2 {
        top: 5px;
    }
    .stickBurger3 {
        top: 9px;
    }
*/
    /*******************************************************/

    .nav {
        width: auto;
        margin: 0 auto;

        display: inherit;
        justify-content: flex-end;
        align-items: flex-end;

        gap: 30px;
    }

    .nav_iten {
        display: inline-block;
        cursor: pointer;
        position: relative;
        padding-top: 5px;
        padding-bottom: 5px;
    }

    .nav_iten::after {
        content: ' ';
        width: 0%;
        height: 2px;
        background-color: #000000;
        position: absolute;
        left: 0;
        bottom: 0;
        transition: 0.4s linear;
    }
    .nav_iten:hover::after {
        width: 100%;
    }

    @media (min-width: 798px) {
        .menu {
            display: none;
        }
    }
`;
