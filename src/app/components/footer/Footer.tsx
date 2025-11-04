import React from "react";
import styles from "./Footer.module.css";
import Wrapper from "../wrapper/Wrapper";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Wrapper>
        <div className={styles.footerWrap}>
          <div className={styles.footerSocial}>
            <ul className={styles.socialLinks}>
              <li>
                <span className={styles.linkLabel}>LinkedIn:</span>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/movchanchik/"
                  rel="noreferrer noopener"
                >
                  @movchanchik
                </a>
              </li>
              <li>
                <span className={styles.linkLabel}>Email:</span>
                <a href="mailto:movchan.in09@gmail.com">
                  movchan.in09@gmail.com
                </a>
              </li>
              <li>
                <span className={styles.linkLabel}>Mobile Number:</span>
                <a href="tel:+14167318442">+1 (416) 731-8442</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerText}>
            © 2025 Movchanchik. <br /> All rights reserved.
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}

export default Footer;
