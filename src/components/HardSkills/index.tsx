import { Tech } from "../../interfaces";
import { techs } from "../../scripts/utils";
import Tooltip from "../Tooltip";

function HardSkills() {
  return (
    <>
      {/* <div className="spinner"></div> */}
      <div className="hardskills">
        <div className="hardSkillContent">
          {techs.map((tech: Tech, index: number) => {
            return <Tooltip key={index} nameClass="language" tech={tech} />;
          })}
        </div>
      </div>
    </>
  );
}

export default HardSkills;
