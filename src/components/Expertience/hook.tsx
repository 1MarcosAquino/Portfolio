import { useEffect, useState } from "react";
import { Tech } from "../../interfaces";
import { techs } from "../../scripts/utils";

export const useExperience = (delay = 1000) => {
  const [skills, setSkills] = useState<Tech[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (delay < 600 && index === techs.length) {
        clearInterval(interval);
        setIndex(0);
      }

      setSkills((prevSkills) => {
        if (prevSkills.length === techs.length) {
          return prevSkills.slice(1);
        }
        return [...prevSkills, techs[index]];
      });

      setIndex((prevIndex) => (prevIndex + 1) % techs.length);
    }, delay);

    return () => clearInterval(interval);
  }, [delay, index]);

  return [skills];
};
