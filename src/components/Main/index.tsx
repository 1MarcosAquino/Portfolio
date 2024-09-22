import { SectionProps } from "../../interfaces";
import HardSkills from "../HardSkills";
import ProjectCard from "../ProjectCard";

function Section({ titlePart1, titlePart2, id, children }: SectionProps) {
  return (
    <section id={id}>
      <h2 className="title">
        {titlePart1} <span> {titlePart2}</span>
      </h2>

      {children}
    </section>
  );
}

function Main() {
  return (
    <main id="top" className="container">
      <aside className="parallax">
        <div className="parallax-content">
          <h3>Bem vindo!</h3>
          <h2 className="title"></h2>
        </div>
      </aside>

      <Section id="início" titlePart1="Sobre" titlePart2="mim">
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
        <HardSkills />
      </Section>

      <Section id="projetos" titlePart1="Meus" titlePart2="Projetos">
        <div className="projects">
          <ProjectCard />
        </div>
      </Section>

      <Section id="contato" titlePart1="Fale" titlePart2="comigo">
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
      </Section>
    </main>
  );
}

export default Main;
