import Head from "next/head";
import { Header } from "../components/header";
import { PageTitle } from "../components/pageTitle";
import { ContactLink } from "../components/contactLink";
import styles from "../styles/About.module.css";
import { Skill } from "../components/skill";

//Skills SVG's
import XD from '../public/images/skills/xd.svg';
import Illustrator from '../public/images/skills/illustrator.svg';
import Photoshop from '../public/images/skills/photoshop.svg';
import HTML from '../public/images/skills/html.svg';
import CSS from '../public/images/skills/css.svg';
import Javascript from '../public/images/skills/javascript.svg';
import Magento from '../public/images/skills/magento.svg';
import Git from '../public/images/skills/git.svg';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About | Julian van Beek</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#111111" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <PageTitle title="About Me" description="Get to know me" />
        <section className={styles.aboutContainer}>
          <h2>A few words about me</h2>
          <p>I&apos;m Julian van Beek, a web designer based in Den Hoorn, The Netherlands. Designing and coding is a passion of me. The moment I created my first website, I Realized that this is what I like to do as a job in the future. I like the combination of designing and coding websites.</p>
        </section>
        <section className={styles.experienceContainer}>
          <h2 className={styles.subTitle}>Experience</h2>
          <p>Currently I&apos;m studying Communication and Multimedia Design. Besides my study I&apos;ve also done several commercial projects in web design and coding.</p>

          <table className={styles.timeLine}>
            <thead>
              <tr>
                <th>Company</th>
                <th>Function</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Web4Exposure</td>
                <td>Web Designer</td>
                <td>Apr 2019 - Apr 2020</td>
              </tr>
              <tr>
                <td>Skopei</td>
                <td>Internship Web Design</td>
                <td>Sep 2020 - Feb 2021</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className={styles.skillsContainer}>
          <h2 className={styles.subTitle}>Skills</h2>
          <p>It goes without saying that I know how to work with the most commonly used (design)tools and programming languagues. Next to that I am eager to learn new programs. I also have experience in customer contacts and sales what I learned during my side job as sales employee.</p>
          <section className={styles.skillsList}>
            <Skill name="Adobe XD" image={XD} />
            <Skill name="Illustrator" image={Illustrator} />
            <Skill name="Photoshop" image={Photoshop} />
            <Skill name="HTML 5" image={HTML} />
            <Skill name="CSS 3" image={CSS} />
            <Skill name="Javascript" image={Javascript} />
            <Skill name="Magento 2" image={Magento} />
            <Skill name="Git" image={Git} />
          </section>
        </section>
        <ContactLink />
      </main>
      <footer></footer>
    </div>
  );
}