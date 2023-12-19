"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectTag from "../../components/ProjectsSection/ProjectTag";
import ProjectCard from "../../components/ProjectsSection/ProjectCard";
import Footer from "../../components/Footer/Footer";
import AchievementsSection from "../../components/ProjectsSection/AchievementsSection";

const projectsData = [
  {
    id: 1,
    title: "Netflix Clone ",
    description: "Este é um clone do netflix utilizando React",
    image: "/images/projects/netflix.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Renatofujimoto/netflix-clone",
    previewUrl: "https://netflix-clone-xet8.vercel.app/",
  },
  {
    id: 2,
    title: "Secret Word",
    description:
      "Um jogo para que os jogadores descubram uma palavra secreta. Utilizando React",
    image: "/images/projects/secret.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Renatofujimoto/secret-word",
    previewUrl: "https://secret-word-dun.vercel.app/",
  },
  {
    id: 3,
    title: "Quiz App",
    description:
      "Um jogo de perguntas e respostas sobre programação. Utilizando React",
    image: "/images/projects/Quiz.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Renatofujimoto/quiz",
    previewUrl: "https://quiz-seven-pi.vercel.app/",
  },
  {
    id: 4,
    title: "Capputeeno e-commerce",
    description:
      "Um e-commerce ficticio usando uma api fake para listar produtos. Utilizando NextJS, styled-components, React query e axios",
    image: "/images/projects/capputeno.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Renatofujimoto/e-commerce-capputeeno",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Diario de Habitos",
    description:
      "Um site de gerenciamento de habitos. Utilizando NextJS, tailwind e vercel kv para persistir os dados",
    image: "/images/projects/habitos.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Renatofujimoto/habits-diary",
    previewUrl: "https://habits-diary.vercel.app/",
  },
  {
    id: 6,
    title: "Randow Password",
    description:
      "Um app de gerar senha aleatoria. Utilizando React Native, expo-cli",
    image: "/images/projects/password.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Renatofujimoto/random-password",
    previewUrl: "https://github.com/Renatofujimoto/random-password",
  },
  {
    id: 7,
    title: "Recipe App",
    description:
      "Um app de receitas utilizando React Native. Utilizando React Native, expo-cli",
    image: "/images/projects/recipe.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Renatofujimoto/recipe-app",
    previewUrl: "https://github.com/Renatofujimoto/recipe-app",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: React.SetStateAction<string>) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <>
      <main className="flex h-full flex-col bg-[#121212]">
        <section>
          <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
            My Projects
          </h2>
          <AchievementsSection />
          <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
            <ProjectTag
              onClick={handleTagChange}
              name="All"
              isSelected={tag === "All"}
            />
            <ProjectTag
              onClick={handleTagChange}
              name="Web"
              isSelected={tag === "Web"}
            />
            <ProjectTag
              onClick={handleTagChange}
              name="Mobile"
              isSelected={tag === "Mobile"}
            />
          </div>
          <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
            {filteredProjects.map((project, index) => (
              <motion.li
                key={index}
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: index * 0.4 }}
              >
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
                  gitUrl={project.gitUrl}
                  previewUrl={project.previewUrl}
                />
              </motion.li>
            ))}
          </ul>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default ProjectsSection;
