import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Members</h2>
      <div className={styles.content}>
        
        <img
          src={getImageUrl("genio1.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        {/* <img
          src={getImageUrl("genio.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <img
          src={getImageUrl("genio.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        /> */}
        <ul className={styles.aboutItems}>
          {/* <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3></h3>
              <p>
                Xyrel Genio
              </p>
            </div>
          </li> */}
           {/* <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3></h3>
              <p>
              I am an aspiring software developer with a strong interest in technology and problem-solving. 
              I am dedicated to mastering coding and software design. 
              Eager to contribute to impactful projects and collaborate with like-minded professionals.
              </p>
            </div>
          </li> */}
           {/* <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3></h3>
              <p>
              Aspiring IT professional with a strong academic background and a passion for technology. Knowledgeable in programming languages and eager to learn and apply new skills.
              Seeking opportunities to gain practical experience and contribute to IT projects while delivering exceptional results.
              </p>
            </div>
          </li>   */}
        </ul>
      </div>
      <p>Xyrel Genio &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Vince Alanigue&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Irish Burdeos</p>
    </section>
  );
};