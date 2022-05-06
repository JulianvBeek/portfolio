import React, { useState } from "react";
import Link from "next/link";
import styles from "./contactLink.module.css";

export function ContactLink() {
  return (
    <section className={styles.container}>
        <h3>Need a designer?</h3>
        <Link href="/contact">
            <a>Let's work together &rarr;</a>
        </Link>
    </section>
  );
}
