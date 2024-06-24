import MemeList from "@/components/meme-list/meme-list";
import React, { Suspense } from "react";

import { getMemes } from "@/lib/memes";
import styles from "./page.module.scss";
import LoadingMemes from "./loading-out";

export const metadata = {
  title: "Meme Listing page",
  description: "Some description for the page",
};

async function Memes() {
  const memes = await getMemes();
  return <MemeList memes={memes} />;
}

export default function MemesPage() {
  return (
    <div>
      <div className={styles.content}>
        <h1>Welcome to Our Memes Library</h1>
        <p>
          Explore our delicious range of burgers, made with the freshest
          ingredients and cooked to perfection. Whether you're a meat lover or a
          veggie enthusiast, we've got something to satisfy your cravings.
        </p>
      </div>

      <Suspense fallback={<LoadingMemes />}>
        <Memes />
      </Suspense>
    </div>
  );
}
