"use client";

import Link from "next/link";
import style from "./menu.module.scss";
import { useState } from "react";
import ExportedImage from "next-image-export-optimizer";
import logo from "@assets/images/logo.png";

export function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(open => !open);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`${style.container} grid-pattern`}>
      <nav className={style.menu}>
        <Link
          href='/'
          aria-label='Início'
        >
          <ExportedImage
            src={logo}
            alt="Renata Côrtes Logo"
            width={50}
            height={45}
            priority
          />
        </Link>
        
        <button
          className={style.iconMenu}
          onClick={toggleMenu}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="menu-list"
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <ul
          className={menuOpen ? style.menuOpen : ""}
          onClick={closeMenu}
        >
          <li><Link href="#about">Sobre</Link></li>
          <li><Link href="#services">Serviços</Link></li>
          <li><Link href="#contact">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}