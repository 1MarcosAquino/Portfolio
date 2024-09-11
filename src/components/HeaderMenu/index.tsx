import { useState } from "react";

const MeuMenu = () => {
  const menuItems = ["Início", "Projetos", "Contato"];

  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <ul className="menu">
      {menuItems.map((item, index) => (
        <li
          key={index}
          className={`item-menu ${selectedItem === index ? "selected" : ""}`}
          onClick={() => setSelectedItem(index)}
        >
          <a href={`#${item.toLowerCase()}`}>{item}</a>
        </li>
      ))}
    </ul>
  );
};

export default MeuMenu;
