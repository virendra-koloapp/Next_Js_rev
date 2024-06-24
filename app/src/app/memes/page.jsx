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
      </div>

      <Suspense fallback={<LoadingMemes />}>
        <Memes />
      </Suspense>
    </div>
  );
}
