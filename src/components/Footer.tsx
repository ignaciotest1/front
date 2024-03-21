import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full max-w-[1200px] mx-auto my-2">
      <div className="py-5 bg-zinc-800 rounded-3xl flex items-center justify-around flex-col sm:flex-row gap-8 sm:gap-0">
        <div className="flex justify-center items-center gap-8 ">
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
        <div className="">
          <Image
            src="/imgs/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="b "
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
