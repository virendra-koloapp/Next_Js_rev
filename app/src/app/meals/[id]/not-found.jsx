import React from "react";
import styles from "./page.module.scss";

export default function NotFound() {
  return (
    <div className={styles.error}>
      <img
        src="https://indianmemetemplates.com/wp-content/uploads/puneet-superstar-eating-street-food.jpg"
        alt=""
      />
      <h1>Meal Not Found</h1>
    </div>
  );
}
