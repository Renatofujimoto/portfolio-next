import React, { useContext } from "react";
import Marquee from "react-fast-marquee";

import { skillsData } from "./skills.Data";
import { skillsImage } from "./skillsImage";
import Image from "next/image";
function Skills() {
  return (
    <div className="w-full flex items-center justify-center">
      <Marquee
        speed={80}
        pauseOnHover={true}
        pauseOnClick={true}
        delay={0}
        play={true}
        direction="left"
      >
        {skillsData.map((skill, id) => (
          <div className="w-full" key={id}>
            <Image
              src={skillsImage(skill)}
              alt={skill}
              className="w-full h-[50px] object-contain mx-8"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default Skills;
