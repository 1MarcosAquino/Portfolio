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

                <div className="subtitle">
                    <h3>Deixe-me uma mensagem ou mande um e-mail</h3>
                    <p>Vamos conversar e desenvolver soluções para sua empresa, juntos!</p>
                </div>

                <ul>
                    <li>
                        <Icon icon={'ic:sharp-whatsapp'} />
                        <a
                            className="fone button"
                            href="https://api.whatsapp.com/send?phone=5582993233217&text=oi+vim+do+seu+portfolio"
                            target="_blank"
                            rel="noopener noreferrer">
                            <span> (82) 9 9323-3217</span>
                        </a>
                    </li>
                    <li>
                        <Icon icon={'basil:gmail-outline'} />
                        <div className="tooltip">
                            <span className="tooltiptext">{text}</span>

                            <a className="email button" id="btnEmail" onClick={copyEmail}>
                                <span> contatomarcosaquino@gmail.com</span>
                            </a>
                        </div>
                    </li>
                    <li>
                        <Icon icon={'mingcute:linkedin-fill'} />
                        <a
                            className="linkedin button"
                            href="https://linkedin.com/in/marcosaquino21"
                            target="_blank"
                            rel="noopener noreferrer">
                            <span> Vamos nos conectar.</span>
                        </a>
                    </li>
                    <li>
                        <Icon icon={'mdi:github'} />
                        <a
                            className="github button"
                            href="https://github.com/1MarcosAquino/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <span> 1MarcosAquino</span>
                        </a>
                    </li>
                </ul>

                <Form />

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
