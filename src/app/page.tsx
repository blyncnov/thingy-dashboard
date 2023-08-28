"use client";

import React, { useState } from "react";

// React Icon
import {
  AiFillApple,
  AiFillForward,
  AiFillBackward,
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineSetting,
} from "react-icons/ai";
import { BiUserVoice } from "react-icons/bi";
import { TfiHelp } from "react-icons/tfi";
import { MdOutlinePassword } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";

const Navbardata = [
  {
    id: 1,
    title: "Dashboard",
    icon: AiOutlineHome,
  },
  {
    id: 2,
    title: "Customers",
    icon: BiUserVoice,
  },
  {
    id: 3,
    title: "Messages",
    icon: AiOutlineMessage,
  },
  {
    id: 4,
    title: "Help",
    icon: TfiHelp,
  },
  {
    id: 5,
    title: "Settings",
    icon: AiOutlineSetting,
  },
  {
    id: 6,
    title: "Password",
    icon: MdOutlinePassword,
  },
  {
    id: 7,
    title: "Sign Out",
    icon: IoLogOutOutline,
  },
];

export default function Home() {
  const [isWide, setIsWide] = useState(false);

  const handleWideScreen = () => {
    setIsWide(!isWide);
  };

  return (
    <main>
      <section
        className={`bg-[#FAFAFA] w-full h-screen max-h-screen min-h-screen transition-all grid  p-2 ${
          isWide ? "grid-cols-[250px_1fr]" : "grid-cols-[80px_1fr]"
        }`}
      >
        <div className="bg-halfdark rounded-xl shadow-sm border border-r-[#37313113]">
          <div>
            <header>
              <div
                className={`w-full border-b border-[#37313113] p-4 text-center flex items-center gap-2 cursor-pointer ${
                  isWide ? "justify-start" : "justify-center"
                }`}
              >
                <h1 className="font-bold">
                  <AiFillApple className="text-[2.5em] text-white cursor-pointer" />
                </h1>
                {isWide ? (
                  <h1 className="font-bold text-[1.5em] text-white">
                    Not-Apple
                  </h1>
                ) : (
                  ""
                )}
              </div>
            </header>
            <section className="p-4">
              <ul className="flex flex-col gap-4">
                {Navbardata.map((data) => {
                  return (
                    <li
                      key={data.id}
                      className={`flex items-center gap-2 cursor-pointer rounded py-3 px-2 bg-[] text-white hover:bg-white hover:text-halfdark ${
                        isWide ? "justify-start" : "justify-center"
                      }`}
                    >
                      <span>{<data.icon className="text-[1.5em]" />}</span>
                      {isWide ? <span> {data.title}</span> : ""}
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
        </div>
        <div className="p-4">
          <button
            className="p-2 px-4 bg-halfdark primary rounded text-white"
            onClick={handleWideScreen}
          >
            {isWide ? (
              <AiFillBackward className="text-[1.5em]" />
            ) : (
              <AiFillForward className="text-[1.5em]" />
            )}
          </button>
        </div>
      </section>
    </main>
  );
}
