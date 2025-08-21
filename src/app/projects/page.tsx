import Link from "next/link";
import styles from "./Projects.module.css";

export default function ProjectsPage() {
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
    <div className={styles.page}>
      <section className={styles.section}>
        <h1 className={styles.heading}>Vanta Projects</h1>

        <div className={styles.list}>
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={styles.tile}
            >
              <div className={styles.tileHeader}>
                <h3 className={styles.tileTitle}>{project.name}</h3>
                <span className={styles.tileNumber}>{project.number}</span>
              </div>
              <p className={styles.tileDescription}>{project.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
