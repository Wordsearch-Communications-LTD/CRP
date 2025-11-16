"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [campusOpen, setCampusOpen] = useState(false); // mobile toggle

  // Main menu items
  const navItems = [
    { label: "Nature", href: "#" },
    { label: "Availability", href: "#" },
    {
      label: "Campus",
      submenu: [
        { label: "Campus overview", href: "/campus" },
        { label: "Amenities", href: "/amenities" },
        { label: "Masterplan", href: "/masterplan" },
        { label: "Transport & access", href: "/access" },
      ],
    },
    { label: "Find us", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md text-white">
      <div
        className="
          max-w-[1920px] mx-auto
          flex items-center justify-between
          px-6 md:px-12
          pt-[10px] pb-[14px]
        "
      >
        {/* --- LOGO --- */}
        <Link href="/">
          <Image
            src="/logo-cambridge.svg"
            alt="Cambridge Research Park"
            width={180}
            height={40}
            className="w-auto h-auto"
          />
        </Link>

        {/* --- DESKTOP NAV --- */}
        <nav className="hidden xl:flex items-center gap-[60px] relative">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              {/* ITEM (Desktop hover if submenu) */}
              <Link
                href={item.href || "#"}
                className="
                  font-archia font-[400] text-[16px] leading-[19.2px]
                  tracking-[0.02em] hover:opacity-80 transition
                  cursor-pointer
                "
              >
                {item.label}
              </Link>

             {/* --- SUBMENU (Desktop only) --- */}
 {/* --- SUBMENU (Desktop only) --- */}
{/* --- SUBMENU (Desktop only) --- */}
 {/* SUBMENU (Desktop) */}
{item.submenu && (
  <div
    className="
      fade-down
      absolute left-1/2 -translate-x-1/2 top-full mt-[0px]
      min-w-[180px]
      rounded-[8px] backdrop-blur-xl bg-white/10
      border border-white/10
      shadow-[0_8px_24px_rgba(0,0,0,0.25)]
      scale-95 opacity-0
      transition-all duration-300 ease-[cubic-bezier(.16,1,.3,1)]
      group-hover:scale-100 group-hover:opacity-100
    "
  >
    {item.submenu.map((sub, i) => (
      <Link
        key={sub.label}
        href={sub.href}
        className={`
          block px-[20px] py-[10px]
          text-[15px] leading-[20px]
          font-archia tracking-[0.01em]
          text-white/90 hover:text-white
          hover:bg-white/10
          transition
          reveal-item-${i}
        `}
      >
        {sub.label}
      </Link>
    ))}
  </div>
)}




            </div>
          ))}
        </nav>

        {/* --- MOBILE MENU BUTTON --- */}
        <button className="xl:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          <svg width="32" height="32" viewBox="0 0 24 24" stroke="white">
            <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" />
          </svg>
        </button>
      </div>

      {/* =======================
          MOBILE MENU
      ======================== */}
      {mobileOpen && (
        <div className="xl:hidden bg-black/85 backdrop-blur-lg px-6 py-6 space-y-4">
          {navItems.map((item) => (
            <div key={item.label}>
              {/* Regular items */}
              {!item.submenu && (
                <Link
                  href={item.href}
                  className="
                    block text-[18px] font-archia tracking-[0.02em] py-3
                    border-b border-white/10
                  "
                >
                  {item.label}
                </Link>
              )}

              {/* CAMPUS item with submenu */}
              {item.submenu && (
                <div>
                  <button
                    onClick={() => setCampusOpen(!campusOpen)}
                    className="
                      w-full text-left text-[18px] py-3
                      font-archia tracking-[0.02em]
                      border-b border-white/10 flex justify-between items-center
                    "
                  >
                    {item.label}
                    <span>{campusOpen ? "−" : "+"}</span>
                  </button>

                  {campusOpen && (
                <div
  className={`mobile-dropdown ${campusOpen ? "open" : "close"} pl-4 mt-2 space-y-2`}
>
  {item.submenu.map((sub, index) => (
    <Link
      key={sub.label}
      href={sub.href}
      className="
        block py-2 text-[16px] font-archia
        text-white/90 hover:text-white
      "
      style={{
        animationDelay: `${index * 0.06}s`,  // subtle stagger
      }}
    >
      {sub.label}
    </Link>
  ))}
</div>

                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
