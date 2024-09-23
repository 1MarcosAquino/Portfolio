import { useState } from "react";
import { SectionProps } from "../../interfaces";
import Contact from "../Contact";
import HardSkills from "../HardSkills";
import Iframe from "../Iframe";
import Modal from "../Modal";
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
  const [isOpen, setIsOpen] = useState(false);
  const [url, setsetUrl] = useState("");

  const click = (url: string | null) => {
    if (url) setsetUrl(url);
    setIsOpen(true);
  };

  return (
    <main id="top" className="container">
      <aside className="parallax">
        <div className="parallax-content">
          <h3>Bem vindo!</h3>
          <h2 className="title"></h2>
        </div>
      </aside>

      {isOpen && (
        <Modal>
          <button
            onClick={() => setIsOpen(false)}
            className="btn-closed"
            children={"X"}
          />

          <Iframe src={url}></Iframe>
        </Modal>
      )}

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
        <ProjectCard click={click} />
      </Section>

      <Section id="contato" titlePart1="Fale" titlePart2="comigo">
        <Contact>
          <div className="background">Contatos</div>
          <h2>
            Vamos conversar e desenvolver <br />
            soluções para sua empresa,
            <span> juntos</span>!
          </h2>
          <div className="cont">
            <a
              className="button"
              href="https://api.whatsapp.com/send?phone=5582993233217&text=oi+vim+do+seu+portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./public/whatsapp.svg" alt="WhatsApp" />
            </a>

            <button className="button" id="btnEmail">
              <img className="svg-icon" src="./public/gmail.svg" alt="Gmail" />
            </button>
            <a
              className="button"
              href="https://linkedin.com/in/marcosaquino21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./public/linkedin.svg" alt="LinkedIn" />
            </a>

            <a
              className="button"
              href="https://github.com/1MarcosAquino/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./public/github.svg" alt="GitHub" />
            </a>
          </div>
        </Contact>
      </Section>
    </main>
  );
}

export default Main;
