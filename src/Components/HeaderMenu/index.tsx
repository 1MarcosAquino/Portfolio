import { useState } from 'react';
import NaveMenuStyle from './styles';

const NaveMenu = () => {
    const [selectedItem, setSelectedItem] = useState(0);

    const menuItems = ['Sobre_mim', 'Projetos', 'Contato'];

    return (
        <NaveMenuStyle>
            {menuItems.map((item, index) => (
                <li key={index} className={`item-menu ${selectedItem === index ? 'selected' : ''}`} onClick={() => setSelectedItem(index)}>
                    <a className="link" href={`#${item.toLowerCase()}`}>
                        {item.replace('_', ' ')}
                    </a>
                </li>
            ))}
        </NaveMenuStyle>
    );
};

export default NaveMenu;
