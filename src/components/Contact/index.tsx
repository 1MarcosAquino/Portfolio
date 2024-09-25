import Form from "../form";
import StyleContact from "./style";

const Contact = () => (
  <StyleContact>
    <div>
      <h2>Contato</h2>
      <Form />

      <div className="subtitle">
        <h3>Deixe-me uma mensagem</h3>
        <p>Vamos conversar e desenvolver soluções para sua empresa, juntos!</p>
      </div>

      <a
        className="fone button"
        href="https://api.whatsapp.com/send?phone=5582993233217&text=oi+vim+do+seu+portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="./public/whatsapp.svg" alt="WhatsApp" />

        <span> (82) 9 9323-3217</span>
      </a>

      <a className="email button" id="btnEmail">
        <img className="svg-icon" src="./public/gmail.svg" alt="Gmail" />
        <span> contatomarcosaquino@gmail.com</span>
      </a>
      <a
        className="linkedin button"
        href="https://linkedin.com/in/marcosaquino21"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="./public/linkedin.svg" alt="LinkedIn" />
        <span> Vamos nos conectar.</span>
      </a>

      <a
        className="github button"
        href="https://github.com/1MarcosAquino/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="./public/github.svg" alt="GitHub" />
        <span> 1MarcosAquino</span>
      </a>
    </div>
  </StyleContact>
);

export default Contact;
