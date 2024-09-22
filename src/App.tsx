import "./styles/global.css";
import "./styles/index.css";
import "./styles/parallax.css";
import "./styles/reset.css";
import "./styles/tootip.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import HeaderMenu from "./components/HeaderMenu";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Header>
        <div className="container">
          <div className="logo">
            <h2>Marcos Aquino</h2>
            <p>&#60; Desenvolvedor Web &#47;&#62;</p>
          </div>
          <HeaderMenu />
        </div>
        <hr />
      </Header>
      <Main />
      <Footer />
    </>
  );
}

export default App;
