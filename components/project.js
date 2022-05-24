import Link from 'next/link';
import styles from "./project.module.css";

export function Project({
    tags,
    title,
    image,
    pageLink,
    comingSoon
}) {

const tagsList = tags.map((tag) => 
    <li key={tag}>{tag}</li>
);
  if (comingSoon) {
    return(
      <div className={styles.comingSoon} style={{backgroundImage: `url(${image})` }}>
        <section>
          <span>Coming Soon</span>
        </section>
      </div>
    )

  } else {
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
}
