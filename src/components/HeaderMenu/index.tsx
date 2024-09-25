import { useState } from "react";
import styled from "styled-components";

const menuItems = ["Início", "Sobre mim", "Projetos", "Experiência", "Contato"];

const SMenu = styled.ul`
  all: unset;

  list-style: none;

  font-size: x-large;

  text-transform: uppercase;

  display: flex;
  justify-content: flex-end;
  gap: 2rem;

  li a {
    transition: color 0.5s;
  }

  li:hover a {
    color: var(--primary);
  }
`;

const Menu = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <SMenu>
      {menuItems.map((item, index) => (
        <li
          key={index}
          className={`item-menu ${selectedItem === index ? "selected" : ""}`}
          onClick={() => setSelectedItem(index)}
        >
          <a href={`#${item.toLowerCase()}`}>{item}</a>
        </li>
      ))}
    </SMenu>
  );
};

export default Menu;
