import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-full max-w-[1200px] mx-auto my-4">
      <div className="py-5 bg-white rounded-3xl flex items-center justify-around">
        <div className="flex justify-center items-center gap-8">
          <button className="transform hover:scale-110 transition duration-500 ease-in-out p-2">
            <Image
              src="/icons/instagram.svg"
              alt="logo"
              width={30}
              height={30}
            ></Image>
          </button>
          <button className="transform hover:scale-110 transition duration-500 ease-in-out p-2">
            <Image
              src="/icons/messanger.svg"
              alt="logo"
              width={30}
              height={30}
            ></Image>
          </button>
          <button className="transform hover:scale-110 transition duration-500 ease-in-out p-2">
            <Image
              src="/icons/twitter.svg"
              alt="logo"
              width={30}
              height={30}
            ></Image>
          </button>
        </div>
        <div className="bg-slate-700 hover:bg-slate-800 p-3 rounded-2xl transition duration-500 ease-in-out">
          <Image
            src="/imgs/logo.png"
            alt="logo"
            width={80}
            height={80}
            className="b "
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
