import React from "react";
import styles from "./page.module.css";

function Contact() {
  return (
    <section className={styles.contactSection}>
      <h1>Contact Me</h1>
      <p>
        If you're interested in working together or just want to say hi — drop
        me a message!
      </p>

      <div className={styles.contactInfo}>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:movchan.in09@gmail.com">movchan.in09@gmail.com</a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a href="https://www.linkedin.com/in/movchanchik" target="_blank">
            @movchanchik
          </a>
        </p>
        <p>
          <strong>Location:</strong> Toronto, Canada
        </p>
      </div>
    </section>
  );
}

export default Contact;
