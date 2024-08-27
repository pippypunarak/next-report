import React from "react";
import Image from "next/image";

const HeaderLogin = () => {
  return (
    <header className="fixed bg-white top-0 left-0 w-[calc(100%-235px)] ml-[235px] text-white py-2 px-4 flex justify-between items-center">
      <Image
        alt="connext"
        src="/MyLifeConnext_1200x600px.png"
        width={71}
        height={35}
        className="cursor-pointer"
      />
      <Image
        alt="profile"
        src="/ic_default_profile.svg"
        width={26}
        height={26}
        className="cursor-pointer"
      />
    </header>
  );
};

export default HeaderLogin;
