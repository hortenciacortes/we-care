import Link from "next/link";
import style from "./menu.module.scss";

export function Menu() {
  return (
    <header className={`${style.container} grid-pattern`}>
      <nav className={style.menu}>
        <Link
          href='/'
          aria-label='Início'
          className={style.logo}
        >
          <img src="/logo.png" alt="Renata Côrtes Logo" className={style.logo} />
        </Link>


        <label
          className={style.iconMenu}
          htmlFor='toggle'
        >
          <span></span>
          <span></span>
          <span></span>
        </label>

        <input
          type='checkbox'
          name='toggle'
          className={style.toggle}
          id='toggle'
        />

        <ul>
          <li><Link href="/about">Sobre</Link></li>
          <li><Link href="/services">Serviços</Link></li>
          <li><Link href="/contact">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}