import React from "react";
import styles from "./RecentProjects.module.css";
import Wrapper from "../wrapper/Wrapper";

const projects = [
  {
    title: "Emoji Memory Match",
    description:
      "I always gravitate to cozy memory games, so I built my own in Next.js 15 to explore flip animations, reducers, and playful UX tweaks.",
    stack: ["Next.js", "TypeScript", "CSS Modules"],
    href: "/games/emoji-memory-match",
  },
  {
    title: "Still thinking what is next...",
    description:
      "Prototype in research mode — notes, sketches, and crazy UX ideas are simmering.",
    stack: ["Exploration", "UX", "In progress"],
    href: "#",
  },
  {
    title: "New experiment coming soon",
    description:
      "I’m still hunting for the most interesting twist before shipping it.",
    stack: ["Canvas", "Animation"],
    href: "#",
  },
];

const RecentProjects = () => {
  return (
    <section className={styles.projectsSection}>
      <Wrapper>
        <div className={styles.content}>
          <header className={styles.header}>
            <p className={styles.kicker}>Latest work</p>
            <h2>Recent Projects</h2>
            <p className={styles.lead}>
              A snapshot of the products and experiments I have shipped lately
            </p>
          </header>
          <div className={styles.grid}>
            {projects.map((project) => (
              <article key={project.title} className={styles.card}>
                <div className={styles.cardBody}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className={styles.meta}>
                  <ul>
                    {project.stack.map((label) => (
                      <li key={label}>{label}</li>
                    ))}
                  </ul>
                  <a href={project.href} className={styles.link}>
                    Explore →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default RecentProjects;
