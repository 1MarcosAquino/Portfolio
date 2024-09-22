import styled from "styled-components";

export const CardProjectStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  min-width: 302px;
  max-width: 302px;

  margin: 0 auto;

  @media (min-width: 618px) {
    max-width: 618px;
  }
  @media (min-width: 931px) {
    max-width: 931px;
  }
  @media (min-width: 1245px) {
    max-width: 1245px;
  }

  .card {
    width: 280px;
    height: 390px;
    padding-top: 20px;

    border-radius: 8px;
    background-color: #282a36;
    overflow: hidden;
  }
  .header__card {
    margin: 0 auto;
    height: 45%;
    width: 86%;

    border-top-left-radius: 4px;
    border-top-right-radius: 4px;

    overflow: hidden;
  }

  .banner__card {
    background: transparent;
    width: 100%;
  }

  .body__card {
    background-color: #282a36;
    color: white;
    height: 55%;

    position: relative;
  }

  .title__card,
  .description__card {
    font-size: 2rem;
    color: inherit;
    background-color: inherit;
    padding-top: 8px;
    padding-left: 20px;
  }
  .title__card {
    color: var(--primary-color);
  }

  .description__card {
    font-size: 1.5rem;
    text-align: justify;
    text-indent: 30px;
    padding-right: 20px;
    color: #b5b1b5;
  }

  .technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    position: absolute;

    bottom: 10%;
    left: 8%;

    background-color: inherit;
  }
  .technology {
    padding: 2px 8px;
    border-radius: 10px;
    font-size: small;

    color: white;
    background-color: #636263;
  }
  .technology__logo {
    width: 40px;
    background-color: transparent;
    fill: #00d8ff;
  }
`;
