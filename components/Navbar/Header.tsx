"use client";
import Link from "next/link";
import { HiBars3, HiOutlineShoppingCart } from "react-icons/hi2";
import { useSideBarDrawer } from "@/app/lib/store";
const Header = () => {
  const { onSideBarOpen } = useSideBarDrawer();
  return (
    <header className="grid grid-cols-2 py-5 px-4 md:px-12 items-center sticky top-0 z-10 bg-[#121212] border border-gray-700 border-t-0 border-r-0 border-l-[#121212]">
      <div className="flex justify-between items-center gap-[170%] ">
        <div className="flex items-center gap-x-8">
          <button
            onClick={onSideBarOpen}
            className="p-2 rounded-full bg-slate-200 text-gray-500 hover:bg-gray-200 hover:text-gray-600"
          >
            <HiBars3 size={28} className="cursor-pointer shrink-0" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
