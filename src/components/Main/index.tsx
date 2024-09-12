import HardSkills from "../HardSkills";
import ProjectCard from "../ProjectCard";

type SectionProps = {
  id: string;
  titlePart1: string;
  titlePart2: string;
  children: React.ReactNode;
};

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

      <Section id="início" titlePart1="Sobre" titlePart2="mim!">
        <div className="about">
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
