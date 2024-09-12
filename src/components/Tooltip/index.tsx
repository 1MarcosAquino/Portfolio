interface Tech {
  [key: string]: string;
}

type TooltipProps = {
  nameClass?: string;
  tech: Tech;
};

function Tooltip({ tech, nameClass }: TooltipProps) {
  return (
    <div className={`${nameClass} tooltip`}>
      <i className={Object.values(tech)[0]}></i>
      <span className="tooltiptext">{Object.keys(tech)[0]}</span>
    </div>
  );
}

export default Tooltip;
