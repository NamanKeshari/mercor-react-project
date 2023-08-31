import React from "react";

function OutlinedButton({ title, logo }: { title: string; logo: string }) {
  return (
    <button className="cursor-pointer p-3 bg-black rounded-6xs box-border w-[170px] h-[50px] flex flex-row items-center justify-between border-[1px] border-solid border-white">
      <img className="relative w-[19.45px] h-[21.22px]" alt="" src={logo} />
      <label className="cursor-pointer relative text-xs tracking-[0.5px] leading-[18px] uppercase font-hero-text text-white text-center">
        {title}
      </label>
    </button>
  );
}

export default OutlinedButton;
