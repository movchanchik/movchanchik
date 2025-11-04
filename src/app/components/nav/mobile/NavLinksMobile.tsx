"use client";
import React, { useState, useEffect, useRef, useId } from "react";
import styles from "./NavLinksMobile.module.css";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import Image from "next/image";
import Logo from "../../../images/logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLinksMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const panelId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const previousOverflow = useRef<string>("");
  const wasOpenRef = useRef(false);

  const focusableSelector =
    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

  const handleButtonClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      previousOverflow.current = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      wasOpenRef.current = true;

      requestAnimationFrame(() => {
        const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
          focusableSelector
        );
        focusable?.[0]?.focus();
      });
      return () => {
        document.body.style.overflow = previousOverflow.current;
      };
    }

    if (wasOpenRef.current) {
      document.body.style.overflow = previousOverflow.current;
      menuButtonRef.current?.focus();
      wasOpenRef.current = false;
    }
  }, [isOpen, focusableSelector]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
        focusableSelector
      );

      if (!focusable || focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey) {
        if (active === first || !active) {
          event.preventDefault();
          last.focus();
        }
        return;
      }

      if (active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, focusableSelector]);

  return (
    <>
      <button
        ref={menuButtonRef}
        className={styles.menuButton}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-haspopup="true"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={handleButtonClick}
      >
        <IoMdMenu />
      </button>

      {isOpen && (
        <div
          ref={panelRef}
          id={panelId}
          className={styles.navWrap}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
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
              aria-label="Close navigation menu"
              onClick={handleClose}
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
