import "./styles/global.css";
import "./styles/reset.css";
import "./styles/parallax.css";
import "./styles/tootip.css";
import "./styles/index.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header userName="Marcos Aquino" />
      <img src="./public/spin.svg" alt="spin" className="spin" />
      <Main />
      <Footer />
    </>
  );
}

export default App;

function Main() {
  return (
    <main id="top" className="container">
      <aside className="parallax">
        <div className="parallax-content">
          <h3>Bem vindo!</h3>
          <h2 className="title"></h2>

          <button className="tuor">Fazer tuor</button>
        </div>
      </aside>

      <section id="about">
        <div className="about">
          <h2 className="title">
            Sobre
            <span>mim!</span>
          </h2>
          <p>
            Tenho habilidade para
            <strong>criar aplicações completas</strong>, desde a
            <strong>estruturação do banco de dados</strong> até a elaboração da{" "}
            <strong>interface do usuário.</strong> Meu domínio abrange não
            apenas as linguagens de programação, mas também as tecnologias web,
            permitindo-me desenvolver projetos desde sua concepção até a
            <strong>integração com diversas ferramentas existentes</strong>,
            como frameworks, bibliotecas e plataformas de hospedagem.
          </p>
        </div>

        <div className="hardskills"></div>
      </section>

      <section id="projects">
        <h2 className="title">
          Meus <span>Projetos</span>
        </h2>
        <div className="projects"></div>
      </section>

      <section id="contact">
        <h2 className="title">
          Fale <span>comigo</span>
        </h2>
        <p>
          Vamos conversar e desenvolver soluções para sua empresa,
          <span>juntos</span>!
        </p>
        <div className="contact">
          <div className="background">Contatos</div>

          <a
            className="button"
            href="https://wa.me/+5582993233217"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./public/whatsapp.svg" alt="WhatsApp" />
            <span className="tooltiptext">Meu WhatsApp</span>
            <img src="./public/arrow.svg" alt="Ir para o site" />
          </a>

          <button className="button" id="btnEmail">
            <img className="svg-icon" src="./public/gmail.svg" alt="Gmail" />
            <span>Copiar e-mail</span>
            <img src="./public/clipboard.svg" alt="Copiar e-mail" />
          </button>
          <a
            className="button"
            href="https://linkedin.com/in/marcosaquino21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./public/linkedin.svg" alt="LinkedIn" />
            <span className="tooltiptext">LinkedIn</span>
            <img src="./public/arrow.svg" alt="Ir para o site" />
          </a>

          <a
            className="button"
            href="https://github.com/1MarcosAquino/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./public/github.svg" alt="GitHub" />
            <span className="tooltiptext">GitHub</span>
            <img src="./public/arrow.svg" alt="Ir para o site" />
          </a>
        </div>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container">
        &copy; 2024 Portfólio de Marcos Aquino - Todos os direitos reservados!
      </div>
      <a className="backTop" href="#top">
        VOLTA AO TOPO
      </a>
    </footer>
  );
}
