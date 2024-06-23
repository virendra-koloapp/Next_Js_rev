import MealList from "@/components/meal-list/meal-list";
import React from "react";

import meals from "@/data/meals.json";

export const metadata = {
  title: "Meals Listing page",
  description: "Some description for the page",
};

export default async function MealsPage() {
  return (
    <div>
      <MealList meals={meals.burgers} />
    </div>
  );
}
