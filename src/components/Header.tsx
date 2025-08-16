'use client';
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          Vanta
        </Link>
        <nav className={styles.nav}>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}
