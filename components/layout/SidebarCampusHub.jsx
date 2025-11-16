"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SidebarCampusHub() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* -----------------------------
          FLOATING VERTICAL BUTTON
      ------------------------------ */}
      <button
        onClick={() => setOpen(true)}
        className="
        fixed right-4 top-[60%] -translate-y-1/2 
          rotate-90 origin-right
          z-40
          bg-[#C8FF16] text-black
          font-archia tracking-[0.14em]
          px-4 py-2
          rounded-bl-[10px] rounded-br-[10px]
          shadow-md
          hover:brightness-95 transition
          c-3
        "
      >
        CAMPUS HUB
      </button>

      {/* -----------------------------
          OVERLAY BACKDROP
      ------------------------------ */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="
            fixed inset-0 bg-black/30 backdrop-blur-sm
            z-40
          "
        />
      )}

      {/* -----------------------------
          SLIDING PANEL
      ------------------------------ */}
      <aside
        className={`
          fixed top-0 right-0 h-full w-[360px]
          max-w-[90%]
          bg-gradient-to-b from-[#F9FBFE] to-[#CACFEA]
          shadow-2xl
          z-50
          px-6 py-8
          transform transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)]
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setOpen(false)}
          className="
            absolute top-5 right-5 text-[#4A5ABD]
            text-3xl font-light
          "
        >
          ×
        </button>

        {/* -----------------------------
            PANEL TITLE
        ------------------------------ */}
        <h2
          className="
            text-[#4A5ABD]
            font-silka font-[400]
            text-[42px] leading-[50.4px]
            tracking-[1.26px]
            mb-8
          "
        >
          Campus hub
        </h2>

        <div className="space-y-6">
          {/* SHUTTLE BUS */}
          <div className="bg-white/60 p-4 rounded-xl shadow-sm">
            <p className="text-body-3 text-[#4A5ABD] font-archia mb-1">
              Shuttle bus
            </p>

            <div className="mt-2 w-[260px] overflow-hidden rounded-lg zoom-parent">
              <Image
                src="/google-play-appstore.png"
                width={260}
                height={100}
                alt=""
                className="w-full h-auto zoom-child"
              />
            </div>

            <Link
              href="#"
              className="block mt-3 text-[11.44px] uppercase tracking-[1.83px] text-[#4E5DBC] font-[500] font-archia"
            >
              View timetable →
            </Link>
          </div>

          {/* CAFÉ */}
          <div className="bg-white/60 p-4 rounded-xl shadow-sm">
            <p className="text-body-3 text-[#4A5ABD] font-archia mb-1">Café</p>

            <span className="inline-block bg-[#F24D4D] text-white px-2 py-1 rounded text-[12px] font-archia">
              742.4
            </span>

            <Link
              href="#"
              className="block mt-3 text-[11.44px] uppercase tracking-[1.83px] text-[#4E5DBC] font-[500] font-archia"
            >
              View this week's menu →
            </Link>
          </div>

          {/* MEETING ROOMS */}
          <div className="bg-white/60 p-4 rounded-xl shadow-sm">
            <p className="text-body-3 text-[#4A5ABD] font-archia mb-1">
              Meeting rooms
            </p>

            <span className="inline-block bg-[#FF8A00] text-white px-2 py-1 rounded text-[12px] font-archia">
              1209
            </span>

            <Link
              href="#"
              className="block mt-3 text-[11.44px] uppercase tracking-[1.83px] text-[#4E5DBC] font-[500] font-archia"
            >
              Book a slot →
            </Link>
          </div>

          {/* CAMPUS MAP */}
          <div className="bg-white/60 p-4 rounded-xl shadow-sm">
            <p
              className="
                text-[#4A5ABD]
                font-archia font-[300]
                text-[26.14px] leading-[31.3px]
                tracking-[0.78px]
                mb-2
              "
            >
              Campus map
            </p>

            <Link
              href="#"
              className="block text-[11.44px] uppercase tracking-[1.83px] text-[#4E5DBC] font-[500] font-archia"
            >
              View map →
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
