import React from "react";
import styles from "./meal-list.module.scss";
import Link from "next/link";

export default function MealList(props) {
  console.log("Meals Page : Server Component");

  return (
    <div>
      <div className={styles.list}>
        {props.meals.map((meal) => (
          <div className={styles.item} key={meal.id}>
            <Link href={`/meals/${meal.id}`}>
              <img src={meal.images[0]} alt="" />
              <p>{meal.name}</p>
              <p>{meal.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
