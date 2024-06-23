import MealList from "@/components/meal-list/meal-list";
import React, { Suspense } from "react";

import { fetchMeals } from "@/lib/meals";
import styles from "./page.module.scss";
import LoadingMeals from "./loading-out";

export const metadata = {
  title: "Meals Listing page",
  description: "Some description for the page",
};

async function Meals() {
  const meals = await fetchMeals();
  return <MealList meals={meals} />;
}

export default function MealsPage() {
  return (
    <div>
      <div className={styles.content}>
        <h1>Welcome to Our Burger Menu</h1>
        <p>
          Explore our delicious range of burgers, made with the freshest
          ingredients and cooked to perfection. Whether you're a meat lover or a
          veggie enthusiast, we've got something to satisfy your cravings.
        </p>
      </div>

      <Suspense fallback={<LoadingMeals />}>
        <Meals />
      </Suspense>
    </div>
  );
}
