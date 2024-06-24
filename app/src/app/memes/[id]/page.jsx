import { getMemeById } from "@/lib/memes";
import React from "react";
import styles from "./page.module.scss";
import { notFound } from "next/navigation";
import { headers } from "next/headers";

export async function generateMetadata({ params }) {
  const meme = await getMemeById(params.id).catch(notFound);

  if (!meme) {
    return notFound();
  }

  return {
    title: meme.name,
  };
}

export default async function MemeDetails({ params }) {
  const id = params.id;
  const meme = await getMemeById(id);

  if (!meme) {
    return notFound();
  }

  return (
    <div>
      <div className={styles.container}>
        <img src={meme.image} alt="" />

        <h1>{meme.name}</h1>
        <p>{meme.description}</p>
      </div>
    </div>
  );
}
