import Head from "next/head";
import { Header } from "../components/header";
import { PageTitle } from "../components/pageTitle";
import styles from "../styles/Contact.module.css";

import emailjs from '@emailjs/browser';

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_yv3z9t6', 'template_qdrlrqh', e.target, 'sXxthm8MzmhDqIpYq').then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
    e.target.reset();
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Contact | Julian van Beek</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#111111" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <PageTitle title="Contact" description="Projects I have worked on" />
        <section className={styles.contactContainer}>
          <form onSubmit={sendEmail}>
            <h2>Tell me about yourself</h2>
            <div className={styles.half}>
              <label htmlFor="name">Name</label>
              <input type="text" placeholder="Name" name="name" />
            </div>
            <div className={styles.half}>
              <label htmlFor="phone">Phone</label>
              <input type="tel" placeholder="Phone" name="phone" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Email" name="email" />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea name="message" placeholder="How can I help?" rows="8" />
            </div>
            <input className={styles.submitButton} type="submit" value="Submit Message" />
          </form>
        </section>
      </main>
    </div>
  );
}
