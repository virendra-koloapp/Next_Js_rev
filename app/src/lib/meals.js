import { meals } from "@/data/burgers";

export async function fetchMeals() {
  console.log("Fetching the meals....");
  return new Promise((resolve) => setTimeout(() => resolve(meals), 2000));
}

export async function fetchMealById(id) {
  console.log("Fetching the meals By id....");
  return new Promise((resolve) =>
    setTimeout(() => resolve(meals.find((meal) => meal.id == id)), 1000)
  );
}
