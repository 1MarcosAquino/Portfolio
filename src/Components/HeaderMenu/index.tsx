import { useState } from 'react';
import MenuStyle from './styles';

const Menu = () => {
    const [selectedItem, setSelectedItem] = useState(0);

    const menuItems = ['Sobre_mim', 'Projetos', 'Contato'];

    return (
        <MenuStyle className="menu">
            {menuItems.map((item, index) => (
                <li
                    key={index}
                    className={`item-menu ${selectedItem === index ? 'selected' : ''}`}
                    onClick={() => setSelectedItem(index)}>
                    <a href={`#${item.toLowerCase()}`}>{item.replace('_', ' ')}</a>
                </li>
            ))}
        </MenuStyle>
    );
};

export default Menu;
