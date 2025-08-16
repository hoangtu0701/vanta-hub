"use client";

import styles from "./Clutch.module.css";

export default function ClutchPage() {
  return (
    <main className={styles.clutch}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.overlay} />
        <h1 className={styles.title}>Clutch</h1>
        <p className={styles.subtitle}>
          Your <span>AI co-pilot</span> for Counter-Strike 2.
        </p>
      </section>

      {/* Features */}
      <section className={styles.features}>
        <div className={styles.featureCard}>
          <h2>Hands-free play</h2>
          <p>
            Triggered by voice — call out <em>“Hey Clutch”</em> and get guidance without breaking focus.
          </p>
        </div>
        <div className={styles.featureCard}>
          <h2>Real-time calls</h2>
          <p>
            Clutch reacts mid-round, giving you the info you need while the action’s still unfolding.
          </p>
        </div>
        <div className={styles.featureCard}>
          <h2>Tactical awareness</h2>
          <p>
            Fuses CS2’s live game data with AI reasoning to deliver sharp, context-aware advice.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Ready to clutch every round?</h2>
        <a
          href="https://hoangtu0701.github.io/clutch"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
        >
          Explore Clutch
        </a>
      </section>
    </main>
  );
}
