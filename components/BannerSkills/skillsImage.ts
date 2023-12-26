import html from "public/images/skills/html.svg";
import css from "public/images/skills/css.svg";
import javascript from "public/images/skills/javascript.svg";
import nextJS from "public/images/skills/nextJS.svg";
import react from "public/images/skills/react.svg";
import typescript from "public/images/skills/typescript.svg";
import tailwind from "public/images/skills/tailwind.svg";
import git from "public/images/skills/git.svg";
import figma from "public/images/skills/figma.svg";
import jest from "public/images/skills/jest.svg";
export const skillsImage = (skill: string) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;

    case "typescript":
      return typescript;

    case "css":
      return css;

    case "javascript":
      return javascript;

    case "next js":
      return nextJS;

    case "react":
      return react;

    case "typescript":
      return typescript;

    case "tailwind":
      return tailwind;

    case "git":
      return git;

    case "figma":
      return figma;
    case "jest":
      return jest;
    default:
      break;
  }
};
