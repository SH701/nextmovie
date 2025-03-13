"use client";

import Link from "next/link";
import styles from "../../styles/navigation.module.css";
import { useTheme } from "next-themes";


export default function Navigation() {
  const {theme,setTheme} = useTheme();

  const toggleTheme=()=>{
    setTheme(theme ==="light" ? "dark" : "light");
  }
  
  return (
    <nav className={styles.nav}>
     <Link className={styles.home} href="/" data-hover="Home">Home</Link>
    <button className={styles.btn} onClick={toggleTheme}>Mode</button>
    </nav>
  );
}