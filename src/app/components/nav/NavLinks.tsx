import React from "react";
import styles from "./NavLinks.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLinks() {
  const pathname = usePathname();
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <Link href="/" className={pathname === "/" ? styles.active : ""}>
            Home
          </Link>
        </li>
        {/* <li>
          <Link
            href="/about"
            className={pathname === "/about" ? styles.active : ""}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/experience"
            className={pathname === "/experience" ? styles.active : ""}
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            href="/skills"
            className={pathname === "/skills" ? styles.active : ""}
          >
            Skills
          </Link>
        </li> */}
        <li>
          <Link
            href="/blog"
            className={pathname === "/blog" ? styles.active : ""}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={pathname === "/contact" ? styles.active : ""}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavLinks;
