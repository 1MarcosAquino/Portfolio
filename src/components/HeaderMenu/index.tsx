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

// import { useState } from "react";

// const MeuMenu = () => {
//   const menuItems = ["Início", "Projetos", "Contato"];
//   const [selectedItem, setSelectedItem] = useState(null);

//   const handleItemClick = (index) => {
//     setSelectedItem(index);
//   };

//   return (
//     <ul className="menu">
//       {menuItems.map((item, index) => (
//         <li
//           key={index}
//           className={`item-menu ${selectedItem === index ? "selected" : ""}`}
//           onClick={() => handleItemClick(index)}
//         >
//           <a href={`#${item.toLowerCase()}`}>{item}</a>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default MeuMenu;

// /*
//   const [activeItems, setActiveItems] = useState(
//     Array(menuItems.length).fill(false)
//   );

//     const toggleClass = (index) => {
//     const newActiveItems = [...activeItems];
//     newActiveItems[index] = !newActiveItems[index];
//     setActiveItems(newActiveItems);
//   };

//   */

// /*

//   const MeuMenu = () => {
//   const menuItems = ["Início", "Projetos", "Contato"];

//   return (
//     <ul className="menu">
//       {menuItems.map((item, index) => (
//         <li key={index} className={`item-menu selected`}>
//           <a href={`#${item.toLowerCase()}`}>{item}</a>
//         </li>
//       ))}
//     </ul>
//   );
// };

// */

// // export default MeuMenu;

// function HeaderMenu() {
//   const menu = ["Início", "Projetos", "Contato"];

//   const [selected, setSelected] = useState(true);

//   const myClass = selected ? "selected" : "";

//   return (
//     <ul className="menu">
//       {menu.map((item: string, index: number) => (
//         <li
//           onClick={() => setSelected(!selected)}
//           key={index}
//           className={`item-menu ${myClass}`}
//         >
//           <a id={item.toLowerCase()} href={`#${item.toLowerCase()}`}>
//             {item}
//           </a>
//         </li>
//       ))}
//     </ul>
//   );
// }

// // export default HeaderMenu;
