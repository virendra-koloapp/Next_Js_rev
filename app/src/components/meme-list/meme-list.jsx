import React from "react";
import styles from "./meme-list.module.scss";
import Link from "next/link";

export default function MemeList(props) {
  console.log("Meals Page : Server Component");

  return (
    <div>
      <div className={styles.list}>
        {props.memes.map((meme) => (
          <div className={styles.item} key={meme.id}>
            <Link href={`/memes/${meme.id}`}>
              <img src={meme.image} alt="" />
              <p>{meme.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
