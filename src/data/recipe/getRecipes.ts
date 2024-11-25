import fetchAllRecipes from './fetchAllRecipes'
import { Recipe } from './types'

interface GetRecipesProps {
  page?: number
  perPage?: number
  query?: string
}

interface GetRecipesResponse {
  recipes: Recipe[]
  total: number
}

/**
 * Returns a paginated list of recipes based on query and page number.
 *
 * @param page - The current page to return (default: 1).
 * @param perPage - The number of recipes per page (default: 10).
 * @param query - Query to filter recipes by description (default: '').
 */
export default async function getRecipes(
  props: Readonly<GetRecipesProps>
): Promise<GetRecipesResponse> {
  const { page = 1, perPage = 10, query = '' } = props
  const allRecipes = await fetchAllRecipes()

  // Filter recipes based on the query
  const filteredRecipes =
    query && query.trim() !== ''
      ? allRecipes.filter((recipe) =>
          recipe.name.toLowerCase().includes(query.toLowerCase())
        )
      : allRecipes

  // Paginate the filtered recipes
  const startIndex = (page - 1) * perPage
  const paginatedRecipes = filteredRecipes.slice(
    startIndex,
    startIndex + perPage
  )

  return {
    recipes: paginatedRecipes,
    total: filteredRecipes.length,
  }
}
