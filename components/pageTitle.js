import styles from "./pageTitle.module.css";

export function PageTitle({
    title,
    description,
}) {

  return (
    <>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.description}>{description}</span>
    </>
  );
}