
import meals from '@/data/meals.json'

export async function fetchMeals (){
    console.log("Fetching the meals....")
    return  new Promise((resolve)=>setTimeout(()=>resolve(meals.burgers), 2000))
}