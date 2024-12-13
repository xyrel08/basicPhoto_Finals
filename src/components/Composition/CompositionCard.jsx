import React, { useState } from "react";

import styles from "./CompositionCard.module.css";
import { getImageUrl } from "../../utils";

export const CompositionCard = ({
    Composition: { day, title, imageSrc, description,taken },
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleImageClick = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
        onClick={handleImageClick}
      />
      <h2 className={styles.day}>{day}</h2>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.taken}>{taken}</p>
      <p className={styles.description}>{description}</p>
      
      <ul className={styles.skills}></ul>

      {isPopupOpen && (
        <div className={styles.popupOverlay} onClick={closePopup}>
          <div
            className={styles.popupContent}
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the popup
          >
            <img
              src={getImageUrl(imageSrc)}
              alt={`Image of ${title}`}
              className={styles.popupImage}
            />
            <button className={styles.closeButton} onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};