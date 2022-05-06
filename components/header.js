import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./header.module.css";

export function Header() {
  const router = useRouter();

  const [activeMenu, setActiveMenu] = useState(false);

  const handleMenuClick = () => {
    setActiveMenu(activeMenu ? false : true);
  };

  // const handleLinkClick = () => {
  //   setActiveMenu(false);
  // }

  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <span className={styles.name}>Julian van Beek</span>
        <span className={styles.function}>Web Designer</span>
      </div>
      <div className={styles.hamburger + " " + (activeMenu ? styles.active : "")} onClick={handleMenuClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={styles.navigation + " " + (activeMenu ? styles.active : "")}>
        <ul>
          <li>
            <Link href="/">
              <a className={router.pathname == "/" ? styles.active : ""}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
            <a className={router.pathname == "/portfolio" ? styles.active : ""}>Portfolio</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
            <a className={router.pathname == "/about" ? styles.active : ""}>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
            <a className={router.pathname == "/contact" ? styles.active : ""}>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
