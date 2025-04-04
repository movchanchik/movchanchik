import styles from "./UnderConstruction.module.css";
const UnderConstruction = ({ pageTitle }: { pageTitle: string }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>🚧 This page is under construction</h1>
      <p className={styles.text}>
        Im currently working on {pageTitle} — please check back soon!
      </p>
      <p className={styles.signature}>– Movchanchik</p>
    </div>
  );
};
export default UnderConstruction;
