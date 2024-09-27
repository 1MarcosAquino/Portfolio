import styled from "styled-components";

const CardStyle = styled.div`
  & {
    display: flex;
  }

  button {
    background-color: transparent;
  }
  /* button {
    all: unset;
    cursor: pointer;

    color: var(--text);
  }

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  row-gap: 1rem; */

  /* .card {
    position: relative;
    border-radius: 4px;
    box-shadow: 0 4px 8px var(--gray-600);
    overflow: hidden;

    width: 100%;
    max-width: 400px;
    height: 200px;
    transition: linear 0.5s;

    background-image: url("../../public/OIP.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  } */

  position: relative;
  border-radius: 4px;
  box-shadow: 0 4px 8px var(--gray-600);
  overflow: hidden;

  width: 100%;
  max-width: 400px;
  height: 200px;
  transition: linear 0.5s;

  background-image: url("../../public/OIP.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  .content {
    margin: 0 auto;
    background-color: #3876a06e;
    width: 100%;
    height: 100%;

    padding: 1rem 0.5rem;

    position: relative;
  }

  .name {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  .description {
    width: 100%;
    height: 70%;

    padding: 0.2rem;

    text-indent: 1rem;
    text-align: justify;
    margin-bottom: 15px;
    font-size: 0.9rem;
    line-height: 1.2;
    overflow-y: auto;
  }

  .language {
    background-size: contain;

    right: 5px;
    bottom: 8px;
    position: absolute;
    transition: linear 0.3s;
  }
  .language i {
    font-size: 2.5rem;
  }

  .homepage {
    left: 45px;
  }
  .homepage,
  .html_url {
    display: inline-block;
    padding: 4px 8px;
    background-color: var(--gray-100);
    color: var(--gray-700);
    text-decoration: none;
    border-radius: 4px;

    position: absolute;

    bottom: 8px;

    transition: linear 0.3s;
  }

  .contact {
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    column-gap: 1.2rem;
    row-gap: 0.5rem;
  }
  .contact .background {
    display: none;
  }

  .contact .button {
    padding: 0.8rem 0.5rem;
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    font-size: 1em;
    min-width: 210px;

    background-color: transparent;
  }
  .contact .button:hover {
    color: var(--primary-color);
  }
  .contact .button img {
    width: 1rem;
  }

  .contact .tooltiptext {
    width: fit-content;
    padding: 0.25rem 0.5rem;
  }
  .contact img {
    width: 2rem;
    height: 2rem;
  }

  @media (min-width: 535px) {
    body {
      padding-top: 7rem;
    }
    header div {
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem 0;
    }

    .language {
      bottom: 0px;
    }

    .html_url {
      bottom: 5px;
    }

    .homepage {
      bottom: 5px;
    }
  }
`;

export default CardStyle;
