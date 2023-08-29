"use client";

import React, { useState } from "react";

// dashboard layout components
import MainContentSection from "@/components/main";
import SidebarNaviagtion from "@/components/sidebar";
import TopbarNavigation from "@/components/topbar";

// React Icon
import {
  AiFillApple,
  AiFillForward,
  AiFillBackward,
  AiOutlineTeam,
  AiOutlineMessage,
  AiOutlineSetting,
} from "react-icons/ai";
import { CgOpenCollective } from "react-icons/cg";
import { RiHomeLine } from "react-icons/ri";
import { TbBrandBooking } from "react-icons/tb";
import { MdPayment } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";

const Navbardata = [
  {
    id: 1,
    title: "Dashboard",
    icon: RiHomeLine,
  },
  {
    id: 2,
    title: "Teams",
    icon: AiOutlineTeam,
  },
  {
    id: 3,
    title: "Services",
    icon: AiOutlineMessage,
  },
  {
    id: 4,
    title: "Bookings",
    icon: TbBrandBooking,
  },
  {
    id: 5,
    title: "Payments",
    icon: MdPayment,
  },
  {
    id: 6,
    title: "Settings",
    icon: AiOutlineSetting,
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
        className={`bg-white w-full h-screenh max-h-screenh min-h-screenh grid transition-all ${
          isWide ? "grid-cols-[240px_1fr]" : "grid-cols-[88px_1fr]"
        }`}
      >
        <div className="bg-halfdark rounded-xl shadow-sm border border-white">
          <div>
            <header>
              <div
                className={`w-full border-b border-[#c3b8b821] p-4 text-center flex items-end gap-1 cursor-pointer ${
                  isWide ? "justify-start" : "justify-center"
                }`}
              >
                <h1 className="font-bold">
                  <CgOpenCollective className="text-[2.5em] text-white cursor-pointer" />
                </h1>
                {isWide ? (
                  <h1 className="font-bold text-[1.5em] text-white">Voicze</h1>
                ) : null}
              </div>
            </header>
            <section className="p-4">
              <ul className="flex flex-col gap-4">
                {Navbardata.map((data) => {
                  return (
                    <li
                      key={data.id}
                      className={`flex items-center gap-2 cursor-pointer rounded py-3 px-2 text-white
                      hover:bg-white hover:text-halfdark ${
                        isWide ? "justify-start" : "justify-center"
                      }`}
                    >
                      <span>{<data.icon className="text-[1.5em]" />}</span>
                      {isWide ? <span> {data.title}</span> : null}
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
        </div>
        <div className="p-4 bg-[#FAFAFA] rounded-xl">
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
