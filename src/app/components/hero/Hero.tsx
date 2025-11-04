"use client";
import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
import ProfilePhoto from "../../images/profile-photo.jpg";
import Wrapper from "../wrapper/Wrapper";
import Circles from "../circles/Circles";
import Resume from "../resume/Resume";

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    const timeout2 = setTimeout(() => {
      setIsVisible(true);
    }, 1300);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  return (
    <div className={styles.heroSection}>
      <Wrapper>
        <div className={styles.row1}>
          <div className={styles.left}>
            <div className={styles.decorativeCircles} aria-hidden="true">
              <span
                aria-hidden
                className={`${styles.circle} ${isLoaded ? styles.visible : ""}`}
                style={{ transitionDelay: "0.4s" }}
              ></span>
              <span
                aria-hidden
                className={`${styles.circle} ${styles.circleSm} ${
                  isLoaded ? styles.visible : ""
                }`}
                style={{ transitionDelay: "0.6s" }}
              ></span>
              <span
                aria-hidden
                className={`${styles.circle} ${styles.circleMd} ${
                  isLoaded ? styles.visible : ""
                }`}
                style={{ transitionDelay: "0.8s" }}
              ></span>
            </div>

            <div
              className={`${styles.photoWrap} ${isLoaded ? styles.loaded : ""}`}
            >
              <Image
                priority
                src={ProfilePhoto}
                alt="Portrait of Inna Movchan"
                className={styles.photo}
              />
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.textWrap}>
              <h1 className={[styles.line, styles.line1].join(" ")}>
                Hello everyone,
              </h1>
              <p className={[styles.line, styles.line2].join(" ")}>
                I’m Inna 👋
              </p>
              <p className={[styles.line, styles.line3].join(" ")}>
                I’m a Frontend Developer
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
      <div className={`${styles.row2} ${isVisible ? styles.reveal : ""}`}>
        <div className={styles.textWrap}>
          <p className={[styles.line, styles.line1].join(" ")}>
            I turn ideas into scalable web apps
          </p>
          <p className={[styles.line, styles.line2].join(" ")}>
            using React and TypeScript —
          </p>
          <p className={[styles.line, styles.line3].join(" ")}>
            seamless, fast, and ready to grow.
          </p>
        </div>
        <div className={styles.bg}>
          <Circles />
        </div>
      </div>
      <Resume />
    </div>
  );
}

export default Hero;
