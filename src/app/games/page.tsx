import React from "react";
import Link from "next/link";
import Wrapper from "@/app/components/wrapper/Wrapper";
import styles from "./page.module.css";

const games = [
  {
    title: "Emoji Memory Match",
    description:
      "I always gravitate to cozy memory games, so I built my own in Next.js 15 to explore flip animations, reducers, and playful UX tweaks.",
    href: "/games/emoji-memory-match",
    tags: ["React", "TypeScript", "Game"],
    status: "available" as const,
  },
  {
    title: "Still thinking what is next...",
    description:
      "Prototype in research mode — notes, sketches, and crazy UX ideas are simmering.",
    href: "#",
    tags: ["Exploration", "UX", "In progress"],
    status: "soon" as const,
  },
  {
    title: "New experiment coming soon",
    description:
      " I’m still hunting for the most interesting twist before shipping it.",
    href: "#",
    tags: ["Canvas", "Animation"],
    status: "soon" as const,
  },
];

function Games() {
  return (
    <section className={styles.section}>
      <Wrapper>
        <div className={styles.content}>
          <header className={styles.header}>
            <p className={styles.kicker}>Playground</p>
            <h1>Games & Experiments</h1>
            <p className={styles.lead}>
              A small collection of interactive projects that blend UI polish,
              performance experiments, and fun mechanics.
            </p>
          </header>
          <div className={styles.grid}>
            {games.map((game) => (
              <article key={game.title} className={styles.card}>
                <div>
                  <h2>{game.title}</h2>
                  <p>{game.description}</p>
                  <ul className={styles.tags}>
                    {game.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
                {game.status === "available" ? (
                  <Link href={game.href} className={styles.cta}>
                    Play now →
                  </Link>
                ) : (
                  <span className={styles.soon}>Coming soon</span>
                )}
              </article>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default Games;
