import { GravityUiCurlyBracketsFunction } from '../../ImageComponents/GravityUiCurlyBracketsFunction';
import HeaderMenu from '../HeaderMenu';
import HeaderStyle from './styles';

const Header = () => {
    return (
        <HeaderStyle>
            <div className="container">
                <div id="top" className="logo">
                    <h2>Marcos Aquino</h2>
                    <p>&#60; Desenvolvedor Web &#47;&#62;</p>
                </div>

                <HeaderMenu />

                <h1>Sou um desenvolvedor web PHP, C# e typescript.</h1>

                <a className="button" href="#projetos">
                    Ver Projetos
                </a>

                <GravityUiCurlyBracketsFunction width={292} height={292} />
            </div>
        </HeaderStyle>
    );
};

export default Header;
