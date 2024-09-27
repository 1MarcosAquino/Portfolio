import { GravityUiCurlyBracketsFunction } from "../../image-components/GravityUiCurlyBracketsFunction";
import HeaderMenu from "../HeaderMenu";
import HeaderStyle from "./style";

const Header = () => {
  return (
    <HeaderStyle>
      <div id="top">
        <div className="logo">
          <h2>Marcos Aquino</h2>
          <p>&#60; Desenvolvedor Web &#47;&#62;</p>
        </div>
        <HeaderMenu />
      </div>
      <section className="whoIam">
        <h1>Sou um desenvolvedor web C#, php e typescript.</h1>

        <a className="button" href="#projetos">
          Ver Projetos
        </a>
      </section>
      <GravityUiCurlyBracketsFunction width={"100px"} height={"100px"} />
    </HeaderStyle>
  );
};

export default Header;
