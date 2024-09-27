import { Icon } from "@iconify/react/dist/iconify.js";
import { otechs } from "../../scripts/utils";
import ExpertienceStyle from "./style";

function Expertience() {
  return (
    <ExpertienceStyle>
      {Object.entries(otechs).map(([name, icon], index) => {
        return (
          <div key={index} className="tooltip">
            <Icon icon={icon} width="72" height="72" />
            <span className="tooltiptext">{name}</span>
          </div>
        );
      })}
    </ExpertienceStyle>
  );
}

export default Expertience;
