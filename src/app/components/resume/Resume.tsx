import React from "react";
import styles from "./Resume.module.css";
import Wrapper from "../wrapper/Wrapper";

const Resume = () => {
  return (
    <section className={styles.resumeSection}>
      <Wrapper>
        <div className={styles.container}>
          <p className={styles.text}>
            Do you want to know more about my skills and experience?
            <br />
            Please feel free to download my resume below 👇
          </p>
          <a
            href="/Inna_Movchan__Front-end_Developer.pdf"
            download
            className={styles.button}
          >
            <span>Download</span>
          </a>
        </div>
      </Wrapper>
    </section>
  );
};

export default Resume;
