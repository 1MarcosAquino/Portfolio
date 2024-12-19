import { Icon } from '@iconify/react/dist/iconify.js';
import { useState } from 'react';
import Form from '../Form';
import StyleContact from './style';

const Contact = () => {
    const [text, setText] = useState('Clique para copiar.');

    function copyEmail() {
        navigator.clipboard
            .writeText('contatomarcosaquino@gmail.com')
            .then(function () {
                setText('COPIADO!');
            })
            .catch(function () {
                setText('Não foi copiado!');
            })
            .finally(function () {
                setTimeout(() => {
                    setText('Clique para copiar.');
                }, 3000);
            });
    }

    return (
        <StyleContact id="contato">
            <div className="container">
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
                    rel="noopener noreferrer">
                    <Icon icon={'ic:sharp-whatsapp'} width="32" height="32" />

                    <span> (82) 9 9323-3217</span>
                </a>

                <div className="tooltip">
                    <span className="tooltiptext">{text}</span>

                    <a className="email button" id="btnEmail" onClick={copyEmail}>
                        <Icon icon={'basil:gmail-outline'} width="32" height="32" />
                        <span> contatomarcosaquino@gmail.com</span>
                    </a>
                </div>

                <a
                    className="linkedin button"
                    href="https://linkedin.com/in/marcosaquino21"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Icon icon={'mingcute:linkedin-fill'} width="32" height="32" />
                    <span> Vamos nos conectar.</span>
                </a>

                <a
                    className="github button"
                    href="https://github.com/1MarcosAquino/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Icon icon={'mdi:github'} width="32" height="32" />
                    <span> 1MarcosAquino</span>
                </a>

                <hr />
                <footer>
                    <p>&copy; 2024 Portfólio de Marcos Aquino - Todos os direitos reservados!</p>
                    <a className="backTop" href="#top">
                        VOLTA AO TOPO
                    </a>
                </footer>
            </div>
        </StyleContact>
    );
};

export default Contact;
