import { HeaderStyled } from './header.styled';

type TheaderProps = {
    theme: boolean;
    setTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ theme, setTheme }: TheaderProps) => {
    return (
        <HeaderStyled>
            <div className="container">
                <h1>Portfolio</h1>
                <ul className="nave">
                    <li className="nave_iten">
                        <a href="#profile">Inicio</a>
                    </li>
                    <li className="nave_iten">
                        <a href="#about">Sobre</a>
                    </li>
                    <li className="nave_iten">
                        <a href="#projects">Projetos</a>
                    </li>
                    <li className="nave_iten">
                        <a href="#contacts">Contato</a>
                    </li>
                </ul>

                <button onClick={() => setTheme(!theme)}>
                    {!theme ? 'Dark' : 'Ligth'}
                </button>
            </div>
        </HeaderStyled>
    );
};

export default Header;
