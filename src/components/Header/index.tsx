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
      <div className="whoIam">
        <section>
          <h1>
            Sou um desenvolvedor web <br />
            C#, PHP e typescript.
          </h1>
        </section>
        <a className="button" href="#projetos">
          Ver Projetos
        </a>
        <GravityUiCurlyBracketsFunction width={292} height={292} />
      </div>
    </HeaderStyle>
  );
};

export default Header;
