import React from "react";

import styles from "./Composition.module.css";

import compositions from "../../data/composition.json";
import { CompositionCard } from "./CompositionCard";

export const Composition = () => {
  return (
    <section className={styles.container} id="compositions">
      <h2 className={styles.title}>Composition</h2>
      <div className={styles.projects}>
        {compositions.map((Composition, id) => {
          return <CompositionCard key={id} Composition={Composition} />;
        })}
      </div>
    </section>
  );
};