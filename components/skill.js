import styles from "./skill.module.css";
import Image from "next/image";

export function Skill({
    name,
    image
}) {

  return (
    <div className={styles.skillContainer}>
        <Image className={styles.image} src={image} alt={name} />
        <span>{name}</span>
    </div>
  );
}
