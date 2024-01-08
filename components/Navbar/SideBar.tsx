"use client";
import React, { createElement } from "react";
import DialogComponent from "./DialogComponent";
import Link from "next/link";
import Image from "next/image";
import {
  HiHome,
  HiInformationCircle,
  HiOutlineArrowRightOnRectangle,
  HiOutlineShare,
  HiPhone,
} from "react-icons/hi2";
import { useSideBarDrawer } from "@/app/lib/store";
import { CubeTransparentIcon } from "@heroicons/react/20/solid";

const Links = [
  { title: "Home", icon: HiHome, url: "/" },
  { title: "Sobre", icon: HiInformationCircle, url: "/about" },
  { title: "Projetos", icon: HiOutlineShare, url: "/projects" },
  { title: "Contatos", icon: HiPhone, url: "/contact" },
];

const SideBar = () => {
  const { isSideBarOpen, onSideBarClose } = useSideBarDrawer();
  return (
    <DialogComponent isVisible={isSideBarOpen} onClose={onSideBarClose}>
      <div className="flex flex-col gap-y-6 px-6 pt-8 text-gray-300">
        <div className="flex items-center justify-center font-semibold">
          <Image
            src="/images/perfil2.jpg"
            alt="logo"
            width={100}
            height={100}
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col space-y-2 text-xs text-center font-bold pb-6">
          <span className="pl-4">Renato Fujimoto</span>
        </div>

        {Links.map((link) => (
          <Link
            href={link.url}
            className="flex items-center p-3 transition-all font-semibold hover:text-gray-500 hover:bg-gray-100 rounded-md"
            key={link.title}
          >
            {createElement(link.icon, {
              className: "h-5 w-5 mr-4 shrink-0",
            })}
            <span className="pl-2">{link.title}</span>
          </Link>
        ))}
      </div>
    </DialogComponent>
  );
};

export default SideBar;
