"use client";
import React, { useState } from "react";
import { useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

interface TabData {
  title: string;
  id: string;
  content: JSX.Element;
}

const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>React</li>
        <li>Next Js</li>
        <li>Jest/Testing Library</li>
        <li>React Query</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Universidade Anhanguera - Análise e Desenvolvimento de Sistemas</li>
        <li>DNC - Python</li>
        <li>Rockeseat - Discover</li>
        <li>Curso Em Vídeo - JavaScript ES6</li>
        <li>Curso Em Vídeo - HTML 5 e CSS 3</li>
        <li>Bootcamp Santander FullStack Developer</li>
        <li>Udemy - React</li>
      </ul>
    ),
  },
];

const AboutSection: React.FC = () => {
  const [tab, setTab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/perfil2.jpg"
          width={500}
          height={500}
          alt={""}
          className="rounded-full shadow-2xl"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">
            About Me
          </h2>
          <p className="text-base text-justify lg:text-lg">
            Sou um desenvolvedor FrontEnd apaixonado por criar aplicações web
            interativas e responsivas. eu tenho experiencia trabalhando com
            JavaScript, React, NextJs, ReactQuery, Jest/Testing Library e Git.
            <br></br>
            Eu aprendo rápido e estou sempre buscando expandir meu conhecimento
            e conjunto de habilidades.
            <br></br>Meu foco principal é não apenas criar interfaces atraentes
            e funcionais, mas também garantir a otimização e a acessibilidade em
            todos os projetos. <br></br>Além do desenvolvimento de front-end,
            também possuo habilidades em integração de APIs, UX/UI design e
            colaboração em equipes multidisciplinares, o que me permite
            contribuir de forma abrangente em projetos complexos.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
