import { useState } from "react";
import styled from "styled-components";

const menuItems = ["Sobre_mim", "Projetos", "Contato"];

const SMenu = styled.ul`
  all: unset;

  list-style: none;

  font-size: large;

  text-transform: uppercase;

  display: flex;
  justify-content: flex-end;
  gap: 2rem;

  li a {
    transition: color 0.5s;
    text-shadow: 1px 1px 1px var(--background-2);
  }

  li:hover a {
    color: var(--background-2);
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
          <a href={`#${item.toLowerCase()}`}>{item.replace("_", " ")}</a>
        </li>
      ))}
    </SMenu>
  );
};

export default Menu;
