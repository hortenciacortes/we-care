"use client";

import Link from "next/link";
import style from "./menu.module.scss";
import { useState } from "react";
import ExportedImage from "next-image-export-optimizer";
import logo from "@assets/images/logo.svg";
import { usePathname } from "next/navigation";

export function Menu() {
  /**
   * Pathname hook to get the current path
   */
  const pathName = usePathname()?.replace(/[/]/g, '');

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(open => !open);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`${style.container} grid-pattern`}>
      <nav className={style.menu}>
        <Link
          href='/'
          aria-label='Inicio'
        >
          <ExportedImage
            src={logo}
            alt="We Care Logo"
            width={120}
            height={60}
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
          <li>
            <Link href="/" className={!pathName ? style.active : ''}>
              Início 
            </Link>
          </li>
          <li>
            <Link href="#about" className={pathName === 'odontology' ? style.active : ''}>
              Odontologia Digital
            </Link>
          </li>
          <li>
            <Link href="#services" className={pathName === 'medicine' ? style.active : ''}>
              Medicina
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}