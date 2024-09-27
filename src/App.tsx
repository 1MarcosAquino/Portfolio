import Contact from "./components/Contact";
import Expertience from "./components/Expertience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Section from "./components/Section";
import { MyProvider } from "./provider";
import { ThemeDark } from "./styles/dark.theme";

function App() {
  return (
    <>
      <ThemeDark />
      <Header />

      <Section id="início">
        <h2 className="title">
          Sobre <span> mim</span>
        </h2>
        <div className="about">
          <p>
            Sou um <strong>desenvolvedor web</strong> com{" "}
            <strong>experiência</strong> em criar{" "}
            <strong>soluções personalizadas</strong> que atendem às{" "}
            <strong>necessidades específicas</strong> de cada cliente. Dominando
            um amplo conjunto de <strong>tecnologias</strong>, desde{" "}
            <strong>bancos de dados</strong> até{" "}
            <strong>frameworks front-end</strong>, construo{" "}
            <strong>aplicações escaláveis.</strong>
            Desenvolvi diversos <strong>projetos</strong>,{" "}
            <strong>otimizando processos</strong> e entregando{" "}
            <strong>resultados</strong> que superaram as{" "}
            <strong>expectativas dos clientes</strong>.
          </p>
        </div>
      </Section>

      <Section>
        <Expertience />
      </Section>

      <MyProvider>
        <Main />
      </MyProvider>
      <Contact />

      <Footer />
    </>
  );
}

export default App;
