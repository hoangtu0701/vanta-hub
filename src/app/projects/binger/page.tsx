"use client";

import { useEffect } from "react";
import styles from "./Binger.module.css";

export default function BingerPage() {
  useEffect(() => {
    const rows = document.querySelectorAll(`.${styles.featureRow}`);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.show);
          }
        });
      },
      { threshold: 0.2 }
    );

    rows.forEach((row) => observer.observe(row));
    return () => rows.forEach((row) => observer.unobserve(row));
  }, []);

  return (
    <main className={styles.binger}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.overlay} />
        <h1 className={styles.title}>Binger</h1>
        <p className={styles.subtitle}>
          A <span>Chrome extension</span> to turn movie streaming social.
        </p>
      </section>

      {/* Alternating Feature Sections */}
      <section className={styles.featureRow}>
        <div className={styles.text}>
          <h2>Watch Together</h2>
          <p>
            Sync playback perfectly with friends — whether it’s Netflix binges,
            anime marathons, or late-night movies.
          </p>
        </div>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(/assets/binge_together.png)` }}
        />
      </section>

      <section className={`${styles.featureRow} ${styles.reverse}`}>
        <div className={styles.text}>
          <h2>Real-time Chat</h2>
          <p>
            Chat overlays sit right beside the movie — no more juggling tabs or
            losing context mid-scene.
          </p>
        </div>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(/assets/chat.png)` }}
        />
      </section>

      <section className={styles.featureRow}>
        <div className={styles.text}>
          <h2>Video Calls</h2>
          <p>
            Laugh, cheer, and react live with friends. See every expression as
            the story unfolds.
          </p>
        </div>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(/assets/video_chat.png)` }}
        />
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Binge movies with your loved one</h2>
        <a
          href="https://hoangtu0701.github.io/binger-extension"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
        >
          Try Binger
        </a>
      </section>
    </main>
  );
}
