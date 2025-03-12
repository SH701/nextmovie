"use client";

import Link from "next/link";
import styles from "../../styles/navigation.module.css";
import { useTheme } from "next-themes";


export default function Navigation() {
  
  return (
    <nav className={styles.nav}>
     <Link className={styles.home} href="/" data-hover="Home">Home</Link>
    </nav>
  );
}