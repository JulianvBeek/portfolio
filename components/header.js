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
      
    </header>
  );
}
