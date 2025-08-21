"use client";

import styles from "./AboutPage.module.css";

export default function AboutPage() {
  return (
    <main className={styles.about}>
      {/* Hero */}
      <section className={styles.hero}>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.tagline}>
          Building real-time tools that make learning and play feel alive.
        </p>
      </section>

      {/* Bio */}
      <section className={styles.bio}>
        <p>
        I’m Tung / Trevor — a developer who loves building software that actually{" "}
        <span>feels alive</span>. To me, the best tech should get out of the way
        and feel as natural as a conversation. That’s what I chase with my work on Vanta Hub:
        tools that make it easier to learn, connect, and play. My projects —
        <span>Clutch</span> and <span>Binger</span> — are where I’ve been exploring
        how AI and real-time systems can make that happen for gamers, students,
        and creators.
        </p>
        <p>
        From an AI voice coach for Counter-Strike 2 to a social movie-watching
        platform, I’m not interested in just checking features off a list —
        I want to build experiences that are{" "}
        <span>fast, immersive, and unforgettable</span>.
        </p>
      </section>

      {/* Skills */}
      <section className={styles.skills}>
        <h2>My Toolkit</h2>
        <ul>
            <li>Realtime STT & TTS</li>
            <li>OpenRouter / OpenAI LLMs</li>
            <li>YOLOv8 Computer Vision</li>
            <li>Firebase Realtime Database & WebRTC</li>
            <li>AI Data Pipelines</li>
        </ul>
      </section>
    </main>
  );
}
