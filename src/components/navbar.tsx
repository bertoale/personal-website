"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Home,
  User,
  MapPin,
  Code,
  LayoutDashboard,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const navItems = [
    { label: "Home", href: "#hero", icon: Home },
    { label: "About", href: "#about", icon: User },
    { label: "My Journey", href: "#journey", icon: MapPin },
    { label: "Skills", href: "#skill", icon: Code },
    { label: "Project", href: "#project", icon: LayoutDashboard },
  ];

  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      setOpen(false);
    }
  };

  // Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      navItems.forEach((item) => {
        if (item.href === "#") return;
        const section = document.querySelector(item.href);
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          current = item.href.substring(1);
        }
      });
      if (current) setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center pointer-events-none">
      <div className="pointer-events-auto w-auto rounded-2xl p-2 backdrop-blur-md bg-card/70 shadow-md border border-border">
        {/* Desktop + Tablet */}
        <nav className="hidden md:flex items-center justify-center gap-1 px-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const name = item.href.substring(1);
            const isActive = active === name;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`
                  flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-accent hover:text-accent-foreground text-foreground/80"
                  }
                `}
              >
                <Icon size={16} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile */}
        <div className="md:hidden relative">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md  text-foreground hover:bg-accent hover:text-accent-foreground transition"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-48 rounded-md bg-card shadow-lg border border-border flex flex-col">
              {navItems.map((item) => {
                const Icon = item.icon;
                const name = item.href.substring(1);
                const isActive = active === name;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`
                      flex items-center gap-2 px-4 py-2 text-sm transition-colors
                      ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-accent hover:text-accent-foreground text-foreground/80"
                      }
                    `}
                  >
                    <Icon size={16} />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
