import MealList from "@/components/meal-list/meal-list";
import React from "react";

import { fetchMeals } from "@/lib/meals";

export const metadata = {
  title: "Meals Listing page",
  description: "Some description for the page",
};

export default async function MealsPage() {
  const meals = await fetchMeals();
  return (
    <div>
      <MealList meals={meals} />
    </div>
  );
}
