// import { Icon } from '@iconify/react/dist/iconify.js';
import { GravityUiCurlyBracketsFunction } from '../../imageComponents/GravityUiCurlyBracketsFunction';
import HeaderMenu from '../HeaderMenu';
import HeaderStyle from './styles';

const Header = () => {
    return (
        <HeaderStyle id="top">
            <div className="container">
                <div className="logo">
                    <h2>Marcos Aquino</h2>
                    <p>&#60; Desenvolvedor Web &#47;&#62;</p>
                </div>

                <HeaderMenu />

                <h1>Sou um desenvolvedor web PHP, React Typescript.</h1>

                <a className="button" href="#projetos">
                    Ver Projetos
                </a>
                {/* <Icon icon={'gravity-ui:curly-brackets-function'} width={32} height={32} /> */}
                <GravityUiCurlyBracketsFunction />
            </div>
        </HeaderStyle>
    );
};

export default Header;
