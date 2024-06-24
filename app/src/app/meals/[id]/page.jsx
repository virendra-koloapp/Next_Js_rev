import { fetchMealById } from "@/lib/meals";
import React from "react";
import styles from "./page.module.scss";
import { notFound } from "next/navigation";

export default async function MealDetails({ params }) {
  const id = params.id;

  const meal = await fetchMealById(id);

  if (!meal) {
    return notFound();
  }

  return (
    <div>
      <div className={styles.container}>
        <img src={meal.images[0]} alt="" />

        <h1>{meal.name}</h1>
        <h2>Get it at {meal.price}</h2>
        <p>{meal.description}</p>
      </div>
    </div>
  );
}
