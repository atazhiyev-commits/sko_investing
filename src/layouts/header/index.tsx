"use client";
import { useEffect } from "react";

import clsx from "clsx";

import HeaderUp from "./HeaderTop/HeaderTop";
import HeaderDown from "./HeaderBottom";
import Container from "@/components/container/Container";

import "./header.scss";
import { usePathname } from "next/navigation";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const location = usePathname();
  console.log(location)

  useEffect(() => {
    const header = document.querySelector(".header");
    if (!header) return;

    const segments = location.split("/").filter(Boolean);
    const isRoot = segments.length === 1;

    const applyState = () => {
      if (!isRoot) {
        header.classList.add("blue");
      } else {
        header.classList.toggle("blue", window.scrollY > 20);
      }
    };

    applyState();

    window.addEventListener("scroll", applyState);
    return () => window.removeEventListener("scroll", applyState);
  }, [location.pathname]);

  return (
    <header className={clsx("header", className)}>
      <Container>
        <HeaderUp />
        <HeaderDown />
      </Container>
    </header>
  );
};

export default Header;
