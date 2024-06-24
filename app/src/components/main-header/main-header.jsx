import React from "react";
import styles from "./main-header.module.scss";
import Image from "next/image";
import Link from "next/link";

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
        <div className={styles.active}>
          <Link href={"/community"}>Community</Link>
        </div>

        <div>
          <Link href={"/memes"}>Memes</Link>
        </div>

        <div>
          <Link href={"/share"}>Share Meme</Link>
        </div>
      </div>
    </div>
  );
}
