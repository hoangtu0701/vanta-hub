import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span>© {new Date().getFullYear()} Vanta Hub</span>
        <span>Crafted to entertain, engage, and connect — by <strong>Tung Hoang</strong></span>
      </div>
    </footer>
  );
}
