import Link from 'next/link';
import styles from "./project.module.css";

export function Project({
    tags,
    title,
    image,
    pageLink
}) {

const tagsList = tags.map((tag) => 
    <li>{tag}</li>
);

  return (
    <div className={styles.project} style={{backgroundImage: `url(${image})` }}>
        <section>
            <ul>{tagsList}</ul>
            <h3>{title}</h3>
            <Link href={`/portfolio/${pageLink}`}><a>View Project</a></Link>
        </section>
    </div>
  );
}
