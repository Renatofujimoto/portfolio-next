"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CodeBracketIcon } from "@heroicons/react/20/solid";
const Navbar = () => {
  return (
    <nav className="w-full h-[100px] mx-auto border-solid border-white border-b top-0 left-0 right-0 z-10 bg-[#262630] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <CodeBracketIcon className="w-15 h-[60px] bg-gray-400 rounded-full p-1" />
      </div>
    </nav>
  );
};

export default Navbar;
