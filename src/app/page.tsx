import Link from "next/link";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const projects = [
    {
      slug: "clutch",
      name: "Clutch",
      number: "01",
      description:
        "A real-time AI voice assistant for Counter-Strike 2 — designed to coach, call, and elevate your game.",
    },
    {
      slug: "binger",
      name: "Binger",
      number: "02",
      description:
        "A synced movie watching experience with chat, video calls, and shared playback. Simple. Seamless. Social.",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-140px)] flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 grid place-items-center">
        <div className={styles.hero}>
          <h1 className={`shine ${styles.title}`}>Vanta</h1>
          <p className={styles.subtitle}>
            Powerful, real-time tools for learning and play.
          </p>
          <div className={styles.actions}>
            <Link href="/projects" className={styles["btn-invert"]}>
              Explore Vanta Projects
            </Link>
            <Link href="/about" className={styles.btn}>
              About Vanta
            </Link>
          </div>
        </div>
      </section>

      {/* Project Tiles */}
      <section className={styles.section}>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={styles.tile}
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl md:text-4xl font-extrabold">
                  {project.name}
                </h3>
                <span>{project.number}</span>
              </div>
              <p className="opacity-90">{project.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
