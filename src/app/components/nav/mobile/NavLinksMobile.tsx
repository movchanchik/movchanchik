"use client";
import React, { useState, useEffect } from "react";
import styles from "./NavLinksMobile.module.css";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import Image from "next/image";
import Logo from "../../../images/logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLinksMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const pathname = usePathname();
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  return (
    <>
      <button
        className={styles.menuButton}
        type="button"
        onClick={() => handleButtonClick()}
      >
        <IoMdMenu />
      </button>

      {isOpen && (
        <div className={styles.navWrap}>
          <div className={styles.header}>
            <div className={styles.logoWrap}>
              <Image
                priority
                src={Logo}
                alt="Movchanchik"
                className={styles.logo}
              />
            </div>
            <button
              className={styles.closeButton}
              type="button"
              onClick={() => handleClose()}
            >
              <IoMdClose />
            </button>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li>
                <Link
                  href="/"
                  className={pathname === "/" ? styles.active : ""}
                >
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
              </li>*/}
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
        </div>
      )}
    </>
  );
}

export default NavLinksMobile;
