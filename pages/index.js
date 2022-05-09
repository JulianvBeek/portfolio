import Head from "next/head";
import Link from "next/link";
import { ContactLink } from "../components/contactLink";
import { Header } from "../components/header";
import { Project } from "../components/project";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Julian van Beek</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.hero}>
          <section>
            <span className={styles.name}>Julian van Beek</span>
            <h1 className={styles.function}>Web Designer</h1>
          </section>
          <section className={styles.characteristics}>
            <span>Creative</span>
            <span>Tech-savvy</span>
            <span>Passionated</span>
            <span>Eager to learn</span>
            <span>Customer oriented</span>
            <span>Result driven</span>
          </section>
          {/* <Link href="/portfolio">
            <a className={styles.cta}>View Projects</a>
          </Link> */}

          <span className={styles.mouse}>
            <span></span>
          </span>
        </div>

        {/* <>
          <h2 className={styles.heading}>Recent Projects</h2>
            <div className={styles.projects}>
              <Project tags={['design', 'code', 'work']} title="Soulance Marketing" image="https://i.postimg.cc/J7fkGP2K/soulance.png" pageLink="soulance" />
              <Project tags={['design', 'school']} title="Greenpeace Plastic Campaign" image="https://i.postimg.cc/cCY3hbHx/greenpeace.png" pageLink="greenpeace" />
            </div>
        </> */}
        <>
          <ContactLink />
        </>
      </main>
    </div>
  );
}
