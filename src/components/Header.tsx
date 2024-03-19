import React from "react";
import Login from "./Login";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full h-full flex flex-col items-center justify-center text-black mx-auto py-3 pb-6 lg:px-0">
      <nav className="w-full flex justify-between">
        <Link href="/">
          <div className="bg-slate-700 hover:bg-slate-800 px-1 md:py-2 md:px-5 rounded-2xl transition duration-500 ease-in-out w-full">
            <Image
              src="/imgs/logo.png"
              alt="logo"
              width={80}
              height={80}
              className="b "
            />
          </div>
        </Link>
        <Login />
      </nav>
    </header>
  );
};

export default Header;
