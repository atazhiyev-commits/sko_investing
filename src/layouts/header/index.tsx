"use client";
import { useEffect, useState } from "react";
import { usePathname } from "@/i18n/navigation";

import clsx from "clsx";

import HeaderUp from "./HeaderTop/HeaderTop";
import HeaderDown from "./HeaderBottom";
import Container from "@/components/container/Container";

import "./header.scss";
import { useA11yStore } from "@/shared/store/a11y";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const location = usePathname();
  const { a11yMode } = useA11yStore() as { a11yMode: boolean };

  useEffect(() => {
    const header = document.querySelector(".header");
    if (a11yMode) {
      header?.classList.add("blue");
      return
    }
    if (!header) return;

    const segments = location && location.split("/").filter(Boolean);
    const isRoot = segments && segments.length > 0;

    const applyState = () => {
      if (isRoot) {
        header.classList.add("blue");
      } else {
        header.classList.toggle("blue", window.scrollY > 20);
      }
    };

    applyState();

    window.addEventListener("scroll", applyState);
    return () => window.removeEventListener("scroll", applyState);
  }, [location, a11yMode]);

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
