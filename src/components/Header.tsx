import React from "react";

const Header = () => {
  return (
    <header className="w-full h-full flex flex-col items-center justify-center text-black max-w-[1000px] mx-auto p-4 px-10">
      <nav className="w-full flex justify-between">
        <div className="background">
          <p>Logo</p>
        </div>
        <div className="background">
          <p>User</p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
