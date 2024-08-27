import React from "react";
import Image from "next/image";

interface HeaderLoginProps {
  collapsed: boolean;
}

const HeaderLogin: React.FC<HeaderLoginProps> = ({ collapsed }) => {
  return (
    <header
      className={`fixed bg-white top-0 left-0 transition-all duration-300 ${
        collapsed
          ? "w-[calc(100%-80px)] ml-[80px]"
          : "w-[calc(100%-240px)] ml-[240px]"
      } text-white py-2 px-4 flex items-center justify-between sm:justify-start sm:px-6 md:px-8 lg:px-10`}
    >
      <Image
        alt="connext"
        src="/MyLifeConnext_1200x600px.png"
        width={71}
        height={35}
        className="cursor-pointer"
      />
      <div className="ml-auto">
        <Image
          alt="profile"
          src="/ic_default_profile.svg"
          width={26}
          height={26}
          className="cursor-pointer"
        />
      </div>
    </header>
  );
};

export default HeaderLogin;
