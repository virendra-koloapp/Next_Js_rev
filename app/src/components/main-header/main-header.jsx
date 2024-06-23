import React from "react";
import styles from "./main-header.module.scss";
import Image from "next/image";

export default function Header() {
  return (
    <div className={styles.header}>
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2022/08/29/17/45/burger-7419428_640.jpg"
          alt=""
        />
      </div>
      <div className={styles.actions}>
        <div className={styles.active}>Community</div>
        <div>Meals</div>
        <div>Login</div>
      </div>
    </div>
  );
}
