import { Icon } from '@iconify/react/dist/iconify.js';
import { useState } from 'react';
import Form from '../Form';
import StyleContact from './style';

type ContactsProps = {
    icon: string;
    href: string;
    text: string;
};

const Contact = ({ icon, href, text }: ContactsProps) => {
    return (
        <li>
            <Icon icon={icon} />
            <a className="button" target="_blank" rel="noopener noreferrer" href={href}>
                {text}
            </a>
        </li>
    );
};

const ContactSection = () => {
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

    const zapLink =
        'https://api.whatsapp.com/send?phone=5582993233217&text=oi+vim+do+seu+portfolio';

    return (
        <StyleContact id="contato">
            <div className="container">
                <h2>Contato</h2>

                <div className="subtitle">
                    <h3>Deixe-me uma mensagem ou mande um e-mail</h3>
                    <p>Vamos conversar e desenvolver soluções para sua empresa, juntos!</p>
                </div>

                <ul>
                    <Contact icon="ic:sharp-whatsapp" href={zapLink} text="(82) 9 9323-3217" />

                    <Contact
                        icon="mingcute:linkedin-fill"
                        href="https://linkedin.com/in/marcosaquino21"
                        text="Vamos nos conectar."
                    />

                    <li>
                        <Icon icon={'basil:gmail-outline'} />
                        <div className="tooltip">
                            <span className="tooltiptext">{text}</span>

                            <a className="button" id="btnEmail" onClick={copyEmail}>
                                <span> contatomarcosaquino@gmail.com</span>
                            </a>
                        </div>
                    </li>

                    <Contact
                        icon="mdi:github"
                        href={'https://github.com/1MarcosAquino/'}
                        text="1MarcosAquino"
                    />
                </ul>

                <Form />

                <hr />
            </div>
            <footer>
                <p>&copy; 2024 Portfólio de Marcos Aquino - Todos os direitos reservados!</p>
                <a href="#top">
                    <Icon icon="ep:arrow-up-bold" height={32} width={32} />
                </a>
            </footer>
        </StyleContact>
    );
};

export default ContactSection;
