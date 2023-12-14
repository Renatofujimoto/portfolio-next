"use client";
import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowRightCircle } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

const EmailSection: React.FC = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col bg-[#262630]">
        <div className="container mx-auto md:px-6">
          <div className="relative rounded-lg overflow-hidden bg-cover bg-no-repeat bg-[50%] bg-[url('/images/background.jpeg')] h-[500px]"></div>
          <div className="container mx-auto px-6 md:px-12 xl:px-32">
            <div className="text-center">
              <div className="mt-[-240px] block rounded-lg bg-gray-500 px-6 py-1 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:py-16 md:px-12">
                <h2 className=" text-5xl font-bold leading-tight tracking-tight text-[#fff]">
                  Entre em contato <br />
                  <span className="text-gray-400 dark:text-primary-400">
                    pelas redes sociais
                  </span>
                </h2>
              </div>
              <section className="flex flex-wrap justify-center gap-4 mt-8">
                <button
                  onClick={() => {
                    window.location.href = "https://github.com/Renatofujimoto";
                  }}
                  type="button"
                  className="mb-2 flex items-center rounded bg-[#696969] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                >
                  <FaGithub className="h-5 w-5 mr-2" />
                  Github
                  <FiArrowRightCircle className="h-5 w-5 ml-2" />
                </button>
                <button
                  onClick={() => {
                    window.location.href =
                      "https://www.linkedin.com/in/renato-fujimoto-1321b71b0/";
                  }}
                  type="button"
                  className="mb-2 flex items-center rounded bg-[#0a66c2] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                >
                  <FaLinkedin className="h-6 w-6 mr-2" />
                  linkedin
                  <FiArrowRightCircle className="h-5 w-5 ml-2" />
                </button>
                <button
                  onClick={() => {
                    window.location.href = "mailto:renatofujimoto2@gmail.com";
                  }}
                  type="button"
                  className="mb-2 flex items-center rounded bg-red-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                >
                  <MdEmail className="h-6 w-6 mr-2" />
                  Email
                  <FiArrowRightCircle className="h-5 w-5 ml-2" />
                </button>
              </section>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default EmailSection;
