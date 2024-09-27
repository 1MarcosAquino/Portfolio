import { Icon } from "@iconify/react/dist/iconify.js";
import { useMyContext } from "../../provider";
import Iframe from "../Iframe";
import ModalStyle from "./style";

const Modal = () => {
  const { isOpen, setIsOpen } = useMyContext();

  const url = localStorage.getItem("url") ?? "";

  const action = () => {
    setIsOpen(!isOpen);

    localStorage.removeItem("url");
  };

  window.onkeydown = ({ key }) => {
    if (key === "Escape") {
      window.onkeydown = null;
      action();
    }
  };

  return (
    <>
      {isOpen && (
        <ModalStyle>
          <button onClick={action} className="btn-closed">
            <Icon
              icon="line-md:menu-to-close-alt-transition"
              width="32"
              height="32"
            />
          </button>
          <Iframe src={url}></Iframe>
        </ModalStyle>
      )}
    </>
  );
};
export default Modal;
