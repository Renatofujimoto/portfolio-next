"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <>
      <section className="lg:mt-36 sm:mt-14 lg:h-[560px] lg:py-10 mx-8 flex  flex-col justify-center">
        <div className="grid grid-cols-1 mt-20 mb-20 lg:mb-20 sm:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
            <h2 className="text-white my-4 text-3xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">
                Olá, Eu sou
              </span>
              <br></br>
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  2000,
                  "Front Developer",
                  2000,
                  "Mobile Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
            <p className="text-[#ADB7BE] mt-9 my-4 text-base sm:text-lg lg:text-xl text-left">
              Bem vindo, meu nome é Renato e sou Desenvolvedor FrontEnd, formado
              em Analise e Desenvolvimento de Sistemas, apaixonado por
              tecnologia, autodidata, proativo, fascinado em adquirir
              conhecimento.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 place-self-center my-4 lg:mt-0"
          >
            <div className="mt-3 rounded-full bg-gray-700 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
              <Image
                src="/images/hero-image.png"
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
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

export default HomePage;
