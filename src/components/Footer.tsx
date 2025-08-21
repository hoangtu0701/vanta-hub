import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span>© {new Date().getFullYear()} Vanta Hub</span>
        <span>Crafted to entertain, engage, and connect — <strong>By Tung Hoang</strong></span>
      </div>
    </footer>
  );
}
