// import "./styles/global.css";
// import "./styles/reset.css";
import "./styles/tootip.css";

// import "./styles/index.css";
// import "./styles/parallax.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import HeaderMenu from "./components/HeaderMenu";
import Main from "./components/Main";
import { ThemeDark } from "./styles/dark.theme";

function App() {
  return (
    <>
      <ThemeDark />
      <Header>
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
      </Header>
      <Main />
      <Footer>
        <hr />
        <p>
          &copy; 2024 Portfólio de Marcos Aquino - Todos os direitos reservados!
        </p>
        <a className="backTop" href="#top">
          VOLTA AO TOPO
        </a>
      </Footer>
    </>
  );
}

export default App;
