import { Recipe } from './types'

/**
 * Simulates fetching all recipes from an API endpoint.
 *
 * @returns An array of recipes
 */
export default async function fetchAllRecipes(): Promise<Recipe[]> {
  try {
    const response = await fetch(process.env.ApiEndpoint!)
    if (!response.ok) {
      return []
    }

    const data: Recipe[] = await response.json()
    return data
  } catch (e) {
    console.log(e)
    return []
  }
}
