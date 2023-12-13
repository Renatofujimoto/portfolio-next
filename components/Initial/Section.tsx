"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import DownloadButton from "./DownloadButton";
import Footer from "../Footer/Footer";
const Section = () => {
  return (
    <>
      <section className="flex-grow lg:py-16 mx-5 flex flex-col justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">
                Olá, Eu sou
              </span>
              <br></br>
              <TypeAnimation
                sequence={[
                  "Renato",
                  2000,
                  "Frontend",
                  2000,
                  "Mobile Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
              Bem vindo, meu nome é Renato e sou Desenvolvedor FrontEnd, formado
              em Analise e Desenvolvimento de Sistemas, apaixonado por
              tecnologia, autodidata, proativo, fascinado em adquirir
              conhecimento.
            </p>
            <div className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-gray-400 to-gray-600 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                <DownloadButton />
              </span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 place-self-center mt-4 lg:mt-0"
          >
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
              <Image
                src="/images/hero-image.png"
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={400}
                height={400}
                priority={true}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Section;
