import React from "react";
import Link from "next/link";
import logo from "../assets/logorectangle.png";
import Image from "next/image";

interface NavProps {
  setHomeComponent: React.Dispatch<React.SetStateAction<string>>;
}

const Nav: React.FC<NavProps> = ({ setHomeComponent }) => {
  return (
    <div className="algo-nav bg-#181818 flex h-[120px] justify-evenly items-center p-1vh mb-10 shadow-md w-[90vw] mx-auto">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Image
          src={logo}
          style={{
            width: "60px",
            height: "auto",
            WebkitFilter: "invert(100%)",
            filter: "invert(100%)",
          }}
          alt="AlgoRhythm logo"
        />

        <span style={{ fontVariant: "small-caps" }}>AlgoRhythm</span>
      </div>
      <button onClick={() => setHomeComponent("MCQ")}>multiple choice</button>
      <button onClick={() => setHomeComponent("CodingQ")}>coding</button>
    </div>
  );
};

export default Nav;
